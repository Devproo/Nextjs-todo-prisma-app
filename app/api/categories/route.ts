/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// CREATE Category (POST)
export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    const category = await prisma.category.create({ data: { name } });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating category" },
      { status: 500 }
    );
  }
}

// GET All Categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching categories" },
      { status: 500 }
    );
  }
}
