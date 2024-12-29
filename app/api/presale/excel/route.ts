import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Parser } from "json2csv";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch all users (modify query as needed for filtering or limits)
    const users = await prisma.userPreSales.findMany({
      where: {
        deletedAt: null, // Exclude soft-deleted records
      },
      orderBy: {
        createdAt: "desc", // Sort by latest
      },
    });

    // Define the CSV fields
    const fields = [
      { label: "Name", value: "name" },
      { label: "Email", value: "email" },
      { label: "Phone", value: "phone" },
      { label: "Created At", value: "createdAt" },
      { label: "Updated At", value: "updatedAt" },
      { label: "Deleted At", value: "deletedAt" },
      { label: "Exported At", value: "exportedAt" },
    ];

    // Convert JSON data to CSV
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(users);

    // Return the CSV file as a response
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": "attachment; filename=users.csv",
      },
    });
  } catch (error) {
    console.error("Error generating CSV:", error);
    return NextResponse.json(
      { error: "Failed to generate CSV" },
      { status: 500 }
    );
  }
}
