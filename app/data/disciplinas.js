export const disciplinas = [
  {
    id: '1',
    nome: 'Disciplina 1',
    professor: 'Fulano',
    media: '7,5',
    faltas: '15%',
    situacao: 'Aprovado',
    banner: '/aula.jpg',
    avaliacoes: [
      ['Prova 1', 'Prova', '10/03/2024', '2,0', '8,0'],
      ['Prova 2', 'Prova', '25/03/2024', '2,0', '7,5'],
      ['Prova 3', 'Prova', '15/04/2024', '2,5', '6,5'],
      ['Prova 4', 'Prova', '30/04/2024', '1,5', '8,0'],
    ],
  },
  {
    id: '2',
    nome: 'Disciplina 2',
    professor: 'Beltrano',
    media: '6,9',
    faltas: '10%',
    situacao: 'Aprovado',
    banner: '/aula.jpg',
    avaliacoes: [
      ['Prova 1', 'Prova', '12/03/2024', '2,0', '6,0'],
      ['Prova 2', 'Trabalho', '28/03/2024', '2,0', '7,5'],
      ['Prova 3', 'Prova', '18/04/2024', '2,5', '7,0'],
      ['Prova 4', 'Seminário', '05/05/2024', '1,5', '8,5'],
    ],
  },
  {
    id: '3',
    nome: 'Disciplina 3',
    professor: 'Ciclano',
    media: '8,1',
    faltas: '8%',
    situacao: 'Aprovado',
    banner: '/aula.jpg',
    avaliacoes: [
      ['Prova 1', 'Prova', '15/03/2024', '2,0', '8,5'],
      ['Prova 2', 'Prova', '29/03/2024', '2,0', '7,5'],
      ['Prova 3', 'Seminário', '20/04/2024', '2,5', '8,2'],
      ['Prova 4', 'Trabalho', '08/05/2024', '1,5', '8,8'],
    ],
  },
  {
    id: '4',
    nome: 'Disciplina 4',
    professor: 'Deltrano',
    media: '5,8',
    faltas: '22%',
    situacao: 'Recuperação',
    banner: '/aula.jpg',
    avaliacoes: [
      ['Prova 1', 'Prova', '18/03/2024', '2,0', '6,0'],
      ['Prova 2', 'Prova', '02/04/2024', '2,0', '5,0'],
      ['Prova 3', 'Trabalho', '22/04/2024', '2,5', '6,5'],
      ['Prova 4', 'Prova', '12/05/2024', '1,5', '5,8'],
    ],
  },
  {
    id: '5',
    nome: 'Disciplina 5',
    professor: 'Eltrano',
    media: '7,2',
    faltas: '12%',
    situacao: 'Aprovado',
    banner: '/aula.jpg',
    avaliacoes: [
      ['Prova 1', 'Prova', '20/03/2024', '2,0', '7,0'],
      ['Prova 2', 'Trabalho', '04/04/2024', '2,0', '7,5'],
      ['Prova 3', 'Prova', '24/04/2024', '2,5', '7,2'],
      ['Prova 4', 'Seminário', '14/05/2024', '1,5', '8,0'],
    ],
  },
]

export function getDisciplinaById(id) {
  return disciplinas.find((disciplina) => disciplina.id === String(id))
}
