/*
  Warnings:

  - A unique constraint covering the columns `[turma]` on the table `Turmas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Turmas_turma_key" ON "Turmas"("turma");
