import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const quotes = await prisma.quoteRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: quotes });
  } catch (error) {
    return NextResponse.json({ success: false, data: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newQuote = await prisma.quoteRequest.create({
      data: {
        companyName: body.companyName || "Anonymous Company",
        country: body.country || "Unspecified",
        product: body.product || "General Commodity",
        quantity: body.quantity || "1 Container",
        packaging: body.packaging || "Standard",
        destinationPort: body.destinationPort || "FOB Port",
        incoterm: body.incoterm || "FOB",
        message: body.message || null,
      },
    });

    return NextResponse.json({ success: true, data: newQuote });
  } catch (error) {
    console.error("[API] Quote Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit quote request." },
      { status: 500 }
    );
  }
}
