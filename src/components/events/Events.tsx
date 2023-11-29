import { ZodError, z } from "zod";

// TODO: refactor

// to be extracted
const EventData = z.object({
  id: z.number(),
  date: z.object({
    day: z.string(),
    month: z.string(),
  }),
  location: z.object({
    city: z.string(),
    country: z.string(),
    address: z.string(),
  }),
  priceRange: z.string(),
});

const EventsData = z.array(EventData);

type Event = z.infer<typeof EventData>;
type Events = z.infer<typeof EventsData>;

const getEvents = async () => {
  try {
    const response = await fetch("http://localhost:9090/events");
    const obj: Events = EventsData.parse(await response.json());
    return obj;
  } catch (error) {
    if (error instanceof ZodError) {
      // TODO: toast maybe?
      console.log(error.issues);
    } else {
      console.log(error);
    }
  }
};

export default async function Events() {
  const events = await getEvents();

  return (
    <section className="section" id="tours">
      <div className="container mx-auto">{/* event box */}</div>
    </section>
  );
}
