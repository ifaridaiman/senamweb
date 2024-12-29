import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const body = await req.json();

    // Get the IP address from the request
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";

    // Destructure fields from the request body
    const { name, email, deletedAt, exportedAt } = body;

    // Validate the required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Check if the IP is already registered
    const existingIp = await prisma.ipCatchandRelease.findUnique({
      where: { ip_address: ip },
    });

    if (existingIp) {
      // Check if 24 hours have passed since the last update
      const lastUpdated = new Date(existingIp.updatedAt);
      const currentTime = new Date();
      const timeDifference = currentTime.getTime() - lastUpdated.getTime();

      if (timeDifference < 24 * 60 * 60 * 1000) {
        return NextResponse.json(
          { error: "IP already submitted within the last 24 hours." },
          { status: 429 }
        );
      }

      // Update the existing IP's updatedAt timestamp
      await prisma.ipCatchandRelease.update({
        where: { ip_address: ip },
        data: { updatedAt: new Date() },
      });
    } else {
      // Add the IP to the system
      await prisma.ipCatchandRelease.create({
        data: { ip_address: ip },
      });
    }

    // Create a new UserPreSales record
    const newUser = await prisma.userPreSales.create({
      data: {
        name,
        email,
        deletedAt: deletedAt ? new Date(deletedAt) : null,
        exportedAt: exportedAt ? new Date(exportedAt) : null,
      },
    });

    // Respond with the created user data
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error creating UserPreSales:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the user." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Disconnect Prisma client after the request
  }
}
