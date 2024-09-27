-- CreateTable
CREATE TABLE "Aulas" (
    "id_aula" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "nome_aluno" TEXT NOT NULL,
    "turma_id" INTEGER NOT NULL,

    CONSTRAINT "Aulas_pkey" PRIMARY KEY ("id_aula")
);

-- AddForeignKey
ALTER TABLE "Aulas" ADD CONSTRAINT "Aulas_turma_id_fkey" FOREIGN KEY ("turma_id") REFERENCES "Turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
