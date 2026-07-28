import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[API] Incoming Quote Request:", body);
    return NextResponse.json({ success: true, message: "Quote request submitted successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit quote request." }, { status: 500 });
  }
}
