-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "cargoId" SERIAL NOT NULL,
    "cargo" TEXT NOT NULL,
    "dt_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_atualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("cargoId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_cargo_key" ON "Cargo"("cargo");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("cargoId") ON DELETE RESTRICT ON UPDATE CASCADE;
