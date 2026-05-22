import { NextRequest, NextResponse } from 'next/server'

const accounts = [
  {
    id: 1,
    nome: 'Cláudio Dias Alves',
    email: 'claudio.alves@mackenzie.com.br',
    password: '1234',
    curso: 'Ciência da Computação',
    campus: 'Higienópolis',
    etapa: '1ª Etapa',
    foto: '/user_claudio.jpeg',
  },

  {
    id: 2,
    nome: 'Guillermo Kuznietz',
    email: 'guillermo.kuznietz@mackenzie.com.br',
    password: '1234',
    curso: 'Ciência da Computação',
    campus: 'Higienópolis',
    etapa: '2ª Etapa',
    foto: '/user_guillermo.jpeg',
  },

  {
    id: 3,
    nome: 'Matheus Tobias Mustaro',
    email: 'matheus.mustaro@mackenzie.com.br',
    password: '1234',
    curso: 'Ciência da Computação',
    campus: 'Higienópolis',
    etapa: '3ª Etapa',
    foto: '/user_matheus.jpeg',
  },
]

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const user = accounts.find(
    (account) =>
      account.email === email &&
      account.password === password
  )

  if (!user) {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    )
  }

  return NextResponse.json({
    ok: true,

    usuario: {
      id: user.id,
      nome: user.nome,
      email: user.email,
      curso: user.curso,
      campus: user.campus,
      etapa: user.etapa,
      foto: user.foto,
    },
  })
}