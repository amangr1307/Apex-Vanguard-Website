import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const contacts = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: contacts });
  } catch (error) {
    return NextResponse.json({ success: false, data: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newContact = await prisma.contactSubmission.create({
      data: {
        name: body.name || "Anonymous",
        email: body.email || "user@domain.com",
        subject: body.subject || null,
        message: body.message || "General inquiry",
      },
    });

    return NextResponse.json({ success: true, data: newContact });
  } catch (error) {
    console.error("[API] Contact Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit contact message." },
      { status: 500 }
    );
  }
}
