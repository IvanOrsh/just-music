import { NextResponse } from "next/server";

import { events } from "./events.data";

export async function GET() {
  return NextResponse.json(events);
}
