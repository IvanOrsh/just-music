import { ZodError, z } from "zod";

import EventBox from "../ui/EventBox";
import { EventsData, type Events } from "../model/types";

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
      <div className="container mx-auto">
        <EventBox events={events} />
      </div>
    </section>
  );
}
