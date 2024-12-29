-- CreateTable
CREATE TABLE "IpCatchandRelease" (
    "id" TEXT NOT NULL,
    "ip_address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IpCatchandRelease_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IpCatchandRelease_ip_address_key" ON "IpCatchandRelease"("ip_address");
