/*
  Warnings:

  - You are about to drop the column `classId` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_classId_fkey";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "classId";

-- DropTable
DROP TABLE "Class";
