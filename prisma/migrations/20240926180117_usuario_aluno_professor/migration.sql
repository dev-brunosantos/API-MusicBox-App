/*
  Warnings:

  - You are about to drop the column `cargoId` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `cargoId` on the `Professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Aluno" DROP COLUMN "cargoId";

-- AlterTable
ALTER TABLE "Professor" DROP COLUMN "cargoId";
