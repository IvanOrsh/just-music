import { NextResponse } from "next/server";

import { posts } from "@/app/api/posts/posts.data";

export async function GET() {
  return NextResponse.json(posts);
}
