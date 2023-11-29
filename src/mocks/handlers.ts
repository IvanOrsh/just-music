import { http, RequestHandler, HttpResponse } from "msw";

const events = [
  {
    id: 1,
    date: {
      day: "15",
      month: "Feb",
    },
    location: {
      city: "Los Angeles",
      country: "USA",
      address: "LA Convention Center",
    },
    priceRange: "50-250$",
  },

  {
    id: 2,
    date: {
      day: "20",
      month: "Mar",
    },
    location: {
      city: "Rio de Janeiro",
      country: "Brazil",
      address: "Sambadrome",
    },
    priceRange: "40-200$",
  },

  {
    id: 3,
    date: {
      day: "10",
      month: "May",
    },
    location: {
      city: "Paris",
      country: "France",
      address: "Eiffel Tower Park",
    },
    priceRange: "70-300$",
  },

  {
    id: 4,
    date: {
      day: "25",
      month: "Jul",
    },
    location: {
      city: "Berlin",
      country: "Germany",
      address: "Berlin Exhibition Hall",
    },
    priceRange: "55-280$",
  },

  {
    id: 5,
    date: {
      day: "06",
      month: "Sep",
    },
    location: {
      city: "Athens",
      country: "Greece",
      address: "Acropolis Amphitheatre",
    },
    priceRange: "45-282$",
  },

  {
    id: 6,
    date: {
      day: "12",
      month: "Oct",
    },
    location: {
      city: "Bucharest",
      country: "Romania",
      address: "National Arena",
    },
    priceRange: "42-260$",
  },

  {
    id: 7,
    date: {
      day: "03",
      month: "Nov",
    },
    location: {
      city: "Warsaw",
      country: "Poland",
      address: "PGE Narodwysoków",
    },
    priceRange: "50-270$",
  },
];

const albums = [
  {
    id: 1,
    img: "/assets/albums/cover/cover-1.png",
    name: "album 1",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },

  {
    id: 2,
    img: "/assets/albums/cover/cover-2.png",
    name: "album 2",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },

  {
    id: 3,
    img: "/assets/albums/cover/cover-3.png",
    name: "album 3",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },

  {
    id: 4,
    img: "/assets/albums/cover/cover-4.png",
    name: "album 4",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },

  {
    id: 5,
    img: "/assets/albums/cover/cover-5.png",
    name: "album 5",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },

  {
    id: 6,
    img: "/assets/albums/cover/cover-6.png",
    name: "album 6",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },

  {
    id: 7,
    img: "/assets/albums/cover/cover-7.png",
    name: "album 7",
    tracks: [
      {
        name: "Serenade in D Major",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Midnight Lullaby",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Whispers of the Wind",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Dance of the Fireflies",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Echoes of the Past",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Enchanted Dreams",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Requiem",
        src: "/assets/freedom.mp3",
      },
      {
        name: "Misty Moonlight",
        src: "/assets/freedom.mp3",
      },
    ],
  },
];

const posts = [
  {
    id: 1,
    date: "2023-09-21",
    title: "Rock Concert at Central Park",
    description:
      "Join use for an rock music show in Central Park! The lineup includes artists such as The Beatles, The Rolling Stones, and The Who.",
  },

  {
    id: 2,
    date: "2023-09-22",
    title: "Concert at the Museum of Modern Art",
    description:
      "Join us for a concert at the Museum of Modern Art. The show features artists such as Andy Warhol, Andy Warhol, and Andy Warhol.",
  },

  {
    id: 3,
    date: "2023-09-23",
    title: "EDM Extravaganza",
    description:
      "Join use for an rock music show in Central Park! The lineup includes artists such as The Beatles, The Rolling Stones, and The Who.",
  },

  {
    id: 4,
    date: "2023-09-27",
    title: "Acoustic Concert",
    description:
      "Join use for an rock music show in Central Park! The lineup includes artists such as The Beatles, The Rolling Stones, and The Who.",
  },

  {
    id: 5,
    date: "2023-09-28",
    title: "Jazz Fusion",
    description:
      "Join use for an rock music show in Central Park! The lineup includes artists such as The Beatles, The Rolling Stones, and The Who.",
  },

  {
    id: 6,
    date: "2023-09-29",
    title: "Classical Symphony Showcase",
    description:
      "Join use for an rock music show in Central Park! The lineup includes artists such as The Beatles, The Rolling Stones, and The Who.",
  },

  {
    id: 7,
    date: "2023-09-30",
    title: "Dance Performance",
    description:
      "Join use for an rock music show in Central Park! The lineup includes artists such as The Beatles, The Rolling Stones, and The Who.",
  },
];

export const handlers: RequestHandler[] = [
  http.get("/events", async ({ request }) => {
    console.log('Captured a "GET /test" request');

    return HttpResponse.json(events);
  }),

  http.get("/events/:id", async ({ request, params }) => {
    console.log('Captured a "GET /test/:id" request', params.id);

    const { id } = params;

    return HttpResponse.json(events.find((event) => event.id === Number(id)));
  }),

  http.get("/albums", async ({ request }) => {
    console.log('Captured a "GET /albums" request');

    return HttpResponse.json(albums);
  }),

  http.get("/albums/:id", async ({ request, params }) => {
    console.log('Captured a "GET /albums/:id" request', params.id);

    const { id } = params;

    return HttpResponse.json(albums.find((album) => album.id === Number(id)));
  }),

  http.get("/posts", async ({ request }) => {
    console.log('Captured a "GET /posts" request');

    return HttpResponse.json(posts);
  }),

  http.get("/posts/:id", async ({ request, params }) => {
    console.log('Captured a "GET /posts/:id" request', params.id);

    const { id } = params;

    return HttpResponse.json(posts.find((post) => post.id === Number(id)));
  }),
];
