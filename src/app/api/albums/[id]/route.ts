import { NextResponse } from "next/server";

import { albums } from "../albums.data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const album = albums.find((album) => album.id === Number(params.id));

  if (!album) {
    return NextResponse.json({ error: "Album not found" }, { status: 404 });
  }

  return NextResponse.json(album);
}
