import { NextResponse } from 'next/server'

const accounts = [
  { email: 'aluno@mackenzie.com', password: '0' },
]

export async function POST(request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email e senha são obrigatórios' },
      { status: 400 }
    )
  }

  const user = accounts.find(
    (account) => account.email === email && account.password === password
  )

  if (!user) {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    )
  }

  return NextResponse.json({ ok: true, email: user.email })
}
