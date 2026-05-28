'use client'

import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/navigation'

import DisciplinaCard from '../components/DisciplinaCard'

interface Disciplina {
  id: number
  nome: string
  professor: string
  banner: string
}

export default function Home() {
  const router = useRouter()

  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([])
  const [usuario, setUsuario] = useState<any>(null)

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuarioLogado')

    if (!usuarioSalvo) {
      window.location.href = '/'
      return
    }

    const usuarioParse = JSON.parse(usuarioSalvo)

    setUsuario(usuarioParse)

    async function buscarDisciplinas() {
      const response = await fetch(
        `/api/disciplinas?usuarioId=${usuarioParse.id}`
      )

      const data = await response.json()

      setDisciplinas(data)
    }

    buscarDisciplinas()
  }, [])

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <button
            className={styles.backButton}
            onClick={() => router.back()}
          >
            ←
          </button>

          <span>HIGIENÓPOLIS</span>

          <span className={styles.separator}>|</span>

          <span>{usuario?.curso || 'CURSO'}</span>
        </div>

        <div className={styles.right}>
          <span className={styles.name}>
            {usuario?.nome || 'NOME'}
          </span>

          <img
            src={usuario?.foto || '/user.png'}
            alt="Usuário"
            className={styles.userIcon}
          />
        </div>
      </header>

      <section className={styles.grid}>
        {disciplinas.map((disciplina) => (
          <DisciplinaCard
            key={disciplina.id}
            disciplina={disciplina}
          />
        ))}
      </section>
    </main>
  )
}