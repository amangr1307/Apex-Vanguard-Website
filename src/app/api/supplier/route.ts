import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("[API] Incoming Supplier Onboarding:", body);
    return NextResponse.json({ success: true, message: "Supplier registration submitted successfully." });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to submit supplier registration." }, { status: 500 });
  }
}
