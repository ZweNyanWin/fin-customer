import { NextResponse } from "next/server";
import connect from "@/lib/db";
import Customer from "@/models/Customer";

// GET /api/customers  -> list
export async function GET() {
  await connect();
  const customers = await Customer.find().sort({ memberNumber: 1, name: 1 });
  return NextResponse.json(customers);
}

// POST /api/customers -> create
export async function POST(request) {
  await connect();
  try {
    const body = await request.json();

    const doc = await Customer.create({
      name: String(body.name ?? "").trim(),
      dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : null,
      memberNumber: Number(body.memberNumber),
      interests: String(body.interests ?? "").trim(),
    });

    return NextResponse.json(doc, { status: 201 });
  } catch (err) {
    if (err?.code === 11000) {
      return NextResponse.json({ error: "memberNumber must be unique" }, { status: 409 });
    }
    return NextResponse.json({ error: err?.message || "Server error" }, { status: 500 });
  }
}
