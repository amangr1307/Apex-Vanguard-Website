import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[API] Incoming Custom Product Request:", body);
    return NextResponse.json({ success: true, message: "Custom product request submitted successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit product request." }, { status: 500 });
  }
}
