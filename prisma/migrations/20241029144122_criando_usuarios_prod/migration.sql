/*
  Warnings:

  - You are about to drop the column `cargoId` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Aluno` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Aulas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cargo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Turmas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_id_aluno_fkey";

-- DropForeignKey
ALTER TABLE "Aulas" DROP CONSTRAINT "Aulas_turma_id_fkey";

-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_id_aluno_fkey";

-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_id_turma_fkey";

-- DropForeignKey
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_id_professor_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_cargoId_fkey";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "cargoId";

-- DropTable
DROP TABLE "Aluno";

-- DropTable
DROP TABLE "Aulas";

-- DropTable
DROP TABLE "Cargo";

-- DropTable
DROP TABLE "Pagamento";

-- DropTable
DROP TABLE "Professor";

-- DropTable
DROP TABLE "Turmas";
