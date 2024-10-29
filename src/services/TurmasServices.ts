// import { Prisma } from '../config/prisma';

// const { turmas } = Prisma;

// interface TurmasDados {
//     id: number;
//     turma: string;
// }

// const MsgErro =
//     'O ID informano não esta vinculado a nenhuma turma cadastrada no sistema. Por gentileza, verificar';

// class TurmasServices {
//     async criarTurma({ id, turma }: TurmasDados) {
//         const turmaExistente = await turmas.findFirst({ where: { turma } });
//         if (id === turmaExistente.id) {
//             return { erro: "O ID já esta vinculado a outra turma." }
//         }
//         if (!turmaExistente) {
//             const novaTurma = await turmas.create({
//                 data: { id, turma },
//             });
//             return {
//                 status: 'Turma cadastrada com sucesso.',
//                 novaTurma,
//             };
//         }
//         return { erro: 'Turma já cadastrada no sistema.' };
//     }
//     async listarTurmas() {
//         const listaTurmas = await turmas.findMany();
//         if (!listaTurmas) {
//             return { erro: 'Não existe nenhuma turma cadastrada no sistema.' };
//         }
//         return { listaTurmas };
//     }
//     async listarTurmaID(id: number) {
//         const turmaID = await turmas.findFirst({ where: { id } });
//         if (!turmaID) {
//             return { erro: MsgErro };
//         }
//         return { turmaID };
//     }
//     async editarTurma({ id, turma }: TurmasDados) {
//         const idTurma = await turmas.findFirst({ where: { id } });
//         if (idTurma) {
//             const edicao = await turmas.update({
//                 where: { id },
//                 data: { turma },
//             });
//             return {
//                 status: "Alterações realizadas com sucesso.",
//                 dadosAntigos: idTurma,
//                 dadosAtualizados: edicao
//             }
//         }
//         return { erro: MsgErro };
//     }
//     async apagarTurma(id: number) {
//         const excluirTurma = await turmas.delete({ where: { id } });
//         if (!excluirTurma) {
//             return { erro: MsgErro };
//         }
//         return {
//             status: `A turma ${excluirTurma.turma} foi excluída do sistema com sucesso.`,
//         };
//     }
// }

// export { TurmasServices };
