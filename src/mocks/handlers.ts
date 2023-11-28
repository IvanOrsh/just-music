import { http, RequestHandler, HttpResponse } from "msw";

const data = [
  {
    id: 1,
    name: "item1",
  },
  {
    id: 2,
    name: "item2",
  },
];

export const handlers: RequestHandler[] = [
  http.get("/test", async ({ request }) => {
    console.log('Captured a "GET /test" request');

    return HttpResponse.json({
      message: "Success",
    });
  }),

  http.get("/test/:id", async ({ request, params }) => {
    console.log('Captured a "GET /test/:id" request', params.id);

    const { id } = params;

    return HttpResponse.json(data.find((item) => item.id === Number(id)));
  }),
];
