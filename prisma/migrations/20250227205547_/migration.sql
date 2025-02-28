/*
  Warnings:

  - You are about to drop the column `subdomain` on the `Tenant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "subdomain";

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");
