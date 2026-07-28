import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[API] Incoming Contact Form Submission:", body);
    return NextResponse.json({ success: true, message: "Contact message received." });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to process contact message." }, { status: 500 });
  }
}
