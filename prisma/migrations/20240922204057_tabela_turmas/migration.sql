-- CreateTable
CREATE TABLE "Turmas" (
    "id" INTEGER NOT NULL,
    "turma" TEXT NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Turmas_pkey" PRIMARY KEY ("id")
);
