import { NextResponse } from "next/server";

import { albums } from "@/app/api/albums/albums.data";

export async function GET() {
  return NextResponse.json(albums);
}
