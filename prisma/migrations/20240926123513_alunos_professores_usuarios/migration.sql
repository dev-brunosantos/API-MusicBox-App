-- AlterTable
ALTER TABLE "Turmas" ADD COLUMN     "professor" TEXT;

-- CreateTable
CREATE TABLE "Aluno" (
    "id_aluno" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id_aluno")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id_professor" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id_professor")
);

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_id_aluno_fkey" FOREIGN KEY ("id_aluno") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_id_professor_fkey" FOREIGN KEY ("id_professor") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
