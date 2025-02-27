/*
  Warnings:

  - You are about to drop the column `databaseUrl` on the `Tenant` table. All the data in the column will be lost.
  - Added the required column `databaseName` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `databasePassword` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `databaseUser` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "databaseUrl",
ADD COLUMN     "databaseName" TEXT NOT NULL,
ADD COLUMN     "databasePassword" TEXT NOT NULL,
ADD COLUMN     "databaseUser" TEXT NOT NULL;
