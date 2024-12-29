import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request): Promise<Response> {
  try {
    // Parse the request body (fetch API requires parsing JSON explicitly)
    const body = await req.json();
    const { name, email, phone } = body;

    // Validate input
    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and phone are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create a new UserPreSales record
    const user = await prisma.userPreSales.create({
      data: { name, email, phone },
    });

    return new Response(
      JSON.stringify({ message: 'User created successfully', user }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);

    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}