import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const requests = await prisma.productRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: requests });
  } catch (error) {
    return NextResponse.json({ success: false, data: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newRequest = await prisma.productRequest.create({
      data: {
        productName: body.productName || "Custom Product",
        quantity: body.quantity || "1",
        packaging: body.packaging || "Standard",
        destinationCountry: body.destinationCountry || "Unspecified",
        targetPrice: body.targetPrice || null,
        additionalRequirements: body.additionalRequirements || null,
        referenceImageUrl: body.referenceImageUrl || null,
      },
    });

    return NextResponse.json({ success: true, data: newRequest });
  } catch (error) {
    console.error("[API] Product Request Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit product request." },
      { status: 500 }
    );
  }
}
