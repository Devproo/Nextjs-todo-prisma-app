import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET Todos
export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}

// POST a new Todo
export async function POST(req: Request) {
  const { text } = await req.json();
  const newTodo = await prisma.todo.create({
    data: { text },
  });
  return NextResponse.json(newTodo, { status: 201 });
}

// DELETE a Todo
export async function DELETE(req: Request) {
  const { id } = await req.json();
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ message: "Deleted" });
}

// PATCH to toggle complete
export async function PATCH(req: Request) {
  const { id } = await req.json();
  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed: !todo.completed },
  });

  return NextResponse.json(updatedTodo);
}
