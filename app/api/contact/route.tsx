import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    Hello: "world",
  });
}

export async function POST() {
  return NextResponse.json({
    Hello: "world",
  });
}
