import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10); // Default to page 1
    const pageSize = parseInt(url.searchParams.get("pageSize") || "10", 10); // Default to 10 records per page

    // Fetch paginated data
    const users = await prisma.userPreSales.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: {
        deletedAt: null, // Exclude soft-deleted records
      },
      orderBy: {
        createdAt: "desc", // Sort by createdAt in descending order
      },
    });

    // Fetch total count for pagination metadata
    const totalCount = await prisma.userPreSales.count({
      where: {
        deletedAt: null,
      },
    });

    return NextResponse.json({
      users,
      totalCount,
      totalPages: Math.ceil(totalCount / pageSize),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
