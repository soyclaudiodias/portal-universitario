import { NextRequest, NextResponse } from 'next/server'
import { disciplinas } from '@/app/data/disciplinas'

export async function GET(request: NextRequest) {
  const usuarioId = request.nextUrl.searchParams.get('usuarioId')

  const disciplinasDoUsuario = disciplinas.filter(
    (disciplina) =>
      String(disciplina.usuarioId) === String(usuarioId)
  )

  return NextResponse.json(disciplinasDoUsuario)
}