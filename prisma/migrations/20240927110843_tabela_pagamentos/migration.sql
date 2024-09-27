-- CreateTable
CREATE TABLE "Pagamento" (
    "id_pag" TEXT NOT NULL,
    "id_aluno" TEXT NOT NULL,
    "nome_aluno" TEXT NOT NULL,
    "id_turma" INTEGER NOT NULL,
    "dt_pag" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id_pag")
);

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Aluno"("id_aluno") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_id_turma_fkey" FOREIGN KEY ("id_turma") REFERENCES "Turmas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
