/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `UserPreSales` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `UserPreSales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserPreSales" ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserPreSales_phone_key" ON "UserPreSales"("phone");
