import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    Hello: "world",
  });
}

export async function POST(request: Request, response: Response) {
  return NextResponse.json({
    Hello: "world",
  });
}
