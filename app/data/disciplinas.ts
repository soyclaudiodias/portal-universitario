export const disciplinas = [
  // =========================
  // 1ª ETAPA
  // =========================

  {
    id: '1',
    nome: 'ALGORITMOS DE PROGRAMAÇÃO I',
    professor: 'Fabio Gamarra',
    banner: '/materias/materia_programacao.jpg',
    usuarioId: 1,
    media: '8.7',
    faltas: 2,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Lógica de programação', '12/03/2026', '2.0', '8.5'],
      ['Prova 2', 'Estruturas condicionais', '09/04/2026', '2.0', '9.0'],
      ['Prova 3', 'Projeto em Python', '14/05/2026', '3.0', '8.8'],
      ['Prova 4', 'Avaliação final', '18/06/2026', '3.0', '8.5'],
    ],
  },

  {
    id: '2',
    nome: 'CIÊNCIA, TECNOLOGIA E SOCIEDADE',
    professor: 'Daniela Vieira',
    banner: '/materias/materia_tecnologia_sociedade.jpg',
    usuarioId: 1,
    media: '8.2',
    faltas: 1,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Sociedade e tecnologia', '10/03/2026', '2.0', '8.0'],
      ['Prova 2', 'Impactos sociais da computação', '07/04/2026', '2.0', '8.5'],
      ['Prova 3', 'Seminário', '12/05/2026', '3.0', '8.0'],
      ['Prova 4', 'Artigo crítico', '16/06/2026', '3.0', '8.3'],
    ],
  },

  {
    id: '3',
    nome: 'CIRCUITOS ELÉTRICOS E ELETRÔNICOS',
    professor: 'Carlos Henrique',
    banner: '/materias/materia_eletronico.jpg',
    usuarioId: 1,
    media: '4.8',
    faltas: 12,
    situacao: 'Reprovado',
    avaliacoes: [
      ['Prova 1', 'Lei de Ohm', '11/03/2026', '2.0', '4.0'],
      ['Prova 2', 'Circuitos digitais', '15/04/2026', '2.0', '5.0'],
      ['Prova 3', 'Laboratório eletrônico', '20/05/2026', '3.0', '5.2'],
      ['Prova 4', 'Projeto prático', '17/06/2026', '3.0', '4.9'],
    ],
  },

  {
    id: '4',
    nome: 'FUNDAMENTOS DE CIÊNCIA DA COMPUTAÇÃO',
    professor: 'Ricardo Alves',
    banner: '/materias/materia_programacao.jpg',
    usuarioId: 1,
    media: '9.1',
    faltas: 1,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Pensamento computacional', '13/03/2026', '2.0', '9.0'],
      ['Prova 2', 'Abstração computacional', '17/04/2026', '2.0', '9.2'],
      ['Prova 3', 'Arquitetura básica', '22/05/2026', '3.0', '9.0'],
      ['Prova 4', 'Trabalho final', '19/06/2026', '3.0', '9.3'],
    ],
  },

  {
    id: '5',
    nome: 'MATEMÁTICA DISCRETA I',
    professor: 'Mariana Souza',
    banner: '/materias/materia_matematica.jpg',
    usuarioId: 1,
    media: '7.9',
    faltas: 3,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Conjuntos e lógica', '14/03/2026', '2.0', '7.5'],
      ['Prova 2', 'Relações e funções', '18/04/2026', '2.0', '8.0'],
      ['Prova 3', 'Grafos', '23/05/2026', '3.0', '8.2'],
      ['Prova 4', 'Combinatória', '20/06/2026', '3.0', '7.9'],
    ],
  },

  {
    id: '6',
    nome: 'ÉTICA E CIDADANIA',
    professor: 'Fernanda Lima',
    banner: '/materias/materia_humanas.png',
    usuarioId: 1,
    media: '8.8',
    faltas: 0,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Ética profissional', '08/03/2026', '2.0', '8.5'],
      ['Prova 2', 'Cidadania digital', '12/04/2026', '2.0', '9.0'],
      ['Prova 3', 'Debate em grupo', '17/05/2026', '3.0', '8.7'],
      ['Prova 4', 'Artigo final', '14/06/2026', '3.0', '9.0'],
    ],
  },

  // =========================
  // 2ª ETAPA
  // =========================

  {
    id: '7',
    nome: 'ÁLGEBRA BOOLEANA E CIRCUITOS DIGITAIS',
    professor: 'João Pedro',
    banner: '/materias/materia_eletronico.jpg',
    usuarioId: 2,
    media: '7.5',
    faltas: 5,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Portas lógicas', '10/03/2026', '2.0', '7.0'],
      ['Prova 2', 'Mapas de Karnaugh', '14/04/2026', '2.0', '7.5'],
      ['Prova 3', 'Circuitos combinacionais', '19/05/2026', '3.0', '7.8'],
      ['Prova 4', 'Projeto digital', '16/06/2026', '3.0', '7.7'],
    ],
  },

  {
    id: '8',
    nome: 'ALGORITMOS DE PROGRAMAÇÃO II',
    professor: 'Patrícia Gomes',
    banner: '/materias/materia_programacao.jpg',
    usuarioId: 2,
    media: '8.1',
    faltas: 3,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Vetores e matrizes', '09/03/2026', '2.0', '8.0'],
      ['Prova 2', 'Funções e recursão', '13/04/2026', '2.0', '8.2'],
      ['Prova 3', 'Ordenação e busca', '18/05/2026', '3.0', '8.0'],
      ['Prova 4', 'Projeto final', '15/06/2026', '3.0', '8.3'],
    ],
  },

  {
    id: '9',
    nome: 'ANÁLISE DE DADOS',
    professor: 'Lucas Martins',
    banner: '/materias/materia_dados.jpg',
    usuarioId: 2,
    media: '9.0',
    faltas: 1,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Pandas e gráficos', '11/03/2026', '2.0', '9.0'],
      ['Prova 2', 'Probabilidade', '15/04/2026', '2.0', '8.8'],
      ['Prova 3', 'Projeto analítico', '20/05/2026', '3.0', '9.2'],
      ['Prova 4', 'Dashboard final', '17/06/2026', '3.0', '9.0'],
    ],
  },

  {
    id: '10',
    nome: 'MATEMÁTICA DISCRETA II',
    professor: 'Amanda Ribeiro',
    banner: '/materias/materia_matematica.jpg',
    usuarioId: 2,
    media: '5.1',
    faltas: 10,
    situacao: 'Reprovado',
    avaliacoes: [
      ['Prova 1', 'Lógica proposicional', '12/03/2026', '2.0', '5.0'],
      ['Prova 2', 'Grafos avançados', '16/04/2026', '2.0', '4.8'],
      ['Prova 3', 'Árvores', '21/05/2026', '3.0', '5.5'],
      ['Prova 4', 'Combinatória avançada', '18/06/2026', '3.0', '5.0'],
    ],
  },

  {
    id: '11',
    nome: 'INTRODUÇÃO A COSMOVISÃO REFORMADA',
    professor: 'Eduardo Nunes',
    banner: '/materias/materia_tecnologia_sociedade.jpg',
    usuarioId: 2,
    media: '8.9',
    faltas: 0,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Cosmovisão cristã', '08/03/2026', '2.0', '8.8'],
      ['Prova 2', 'Ética reformada', '12/04/2026', '2.0', '9.0'],
      ['Prova 3', 'Seminário', '17/05/2026', '3.0', '8.7'],
      ['Prova 4', 'Trabalho final', '14/06/2026', '3.0', '9.1'],
    ],
  },

  // =========================
  // 3ª ETAPA
  // =========================

  {
    id: '12',
    nome: 'BANCO DE DADOS',
    professor: 'Ricardo Alves',
    banner: '/materias/materia_dados.jpg',
    usuarioId: 3,
    media: '9.2',
    faltas: 2,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Modelo relacional', '10/03/2026', '2.0', '9.0'],
      ['Prova 2', 'SQL', '14/04/2026', '2.0', '9.1'],
      ['Prova 3', 'Normalização', '19/05/2026', '3.0', '9.3'],
      ['Prova 4', 'Projeto final', '16/06/2026', '3.0', '9.4'],
    ],
  },

  {
    id: '13',
    nome: 'ESTRUTURA DE DADOS I',
    professor: 'Patrícia Gomes',
    banner: '/materias/materia_dados.jpg',
    usuarioId: 3,
    media: '8.4',
    faltas: 3,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Listas encadeadas', '11/03/2026', '2.0', '8.0'],
      ['Prova 2', 'Pilhas e filas', '15/04/2026', '2.0', '8.5'],
      ['Prova 3', 'Árvores', '20/05/2026', '3.0', '8.6'],
      ['Prova 4', 'Projeto final', '17/06/2026', '3.0', '8.4'],
    ],
  },

  {
    id: '14',
    nome: 'MODELAGEM MATEMÁTICA I',
    professor: 'Carlos Henrique',
    banner: '/materias/materia_matematica.jpg',
    usuarioId: 3,
    media: '4.9',
    faltas: 14,
    situacao: 'Reprovado',
    avaliacoes: [
      ['Prova 1', 'Funções matemáticas', '09/03/2026', '2.0', '4.5'],
      ['Prova 2', 'Modelagem computacional', '13/04/2026', '2.0', '5.0'],
      ['Prova 3', 'Simulação', '18/05/2026', '3.0', '5.2'],
      ['Prova 4', 'Projeto final', '15/06/2026', '3.0', '4.8'],
    ],
  },

  {
    id: '15',
    nome: 'ORGANIZAÇÃO DE COMPUTADORES',
    professor: 'Mariana Souza',
    banner: '/materias/materia_eletronico.jpg',
    usuarioId: 3,
    media: '8.0',
    faltas: 4,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Arquitetura básica', '12/03/2026', '2.0', '7.8'],
      ['Prova 2', 'Processadores', '16/04/2026', '2.0', '8.0'],
      ['Prova 3', 'Memória e barramentos', '21/05/2026', '3.0', '8.2'],
      ['Prova 4', 'Projeto prático', '18/06/2026', '3.0', '8.0'],
    ],
  },

  {
    id: '16',
    nome: 'PROJETO E ANÁLISE DE ALGORITMOS I',
    professor: 'Lucas Martins',
    banner: '/materias/materia_dados.jpg',
    usuarioId: 3,
    media: '7.9',
    faltas: 4,
    situacao: 'Aprovado',
    avaliacoes: [
      ['Prova 1', 'Complexidade', '13/03/2026', '2.0', '7.5'],
      ['Prova 2', 'Busca e ordenação', '17/04/2026', '2.0', '8.0'],
      ['Prova 3', 'Análise assintótica', '22/05/2026', '3.0', '8.1'],
      ['Prova 4', 'Projeto final', '19/06/2026', '3.0', '8.0'],
    ],
  },
]