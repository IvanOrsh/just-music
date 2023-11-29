import { ZodError, z } from "zod";

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

export { EventsData, type Events };
