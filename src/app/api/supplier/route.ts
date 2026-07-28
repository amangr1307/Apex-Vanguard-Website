import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const suppliers = await prisma.supplierRegistration.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: suppliers });
  } catch (error) {
    return NextResponse.json({ success: false, data: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newSupplier = await prisma.supplierRegistration.create({
      data: {
        companyName: body.companyName || "Vendor",
        products: body.products || "Various Products",
        productionCapacity: body.productionCapacity || "Standard Capacity",
        certifications: body.certifications || "ISO/GST",
        factoryAddress: body.factoryAddress || "India",
        contactPerson: body.contactPerson || "Contact",
        phone: body.phone || "0000000000",
        email: body.email || "vendor@company.com",
        website: body.website || null,
      },
    });

    return NextResponse.json({ success: true, data: newSupplier });
  } catch (error) {
    console.error("[API] Supplier Registration Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit supplier registration." },
      { status: 500 }
    );
  }
}
