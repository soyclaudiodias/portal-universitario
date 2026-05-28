'use client'

import { useEffect, useState } from 'react'
import {
  notFound,
  useParams,
  useRouter,
} from 'next/navigation'

import styles from '../../styles/Disciplina.module.css'
import { disciplinas } from '../../data/disciplinas'

import Avaliacoes from '../../components/Avaliacoes'

export default function Disciplina() {
  const params = useParams()
  const router = useRouter()

  const id = params.id as string

  const [usuario, setUsuario] = useState<any>(null)

  const disciplina = disciplinas.find(
    (item) => item.id === id
  )

  useEffect(() => {
    const usuarioSalvo =
      localStorage.getItem('usuarioLogado')

    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo))
    }
  }, [])

  if (!disciplina) {
    notFound()
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <button
          className={styles.backButton}
          onClick={() => router.back()}
        >
          ←
        </button>

        <img
          src={usuario?.foto || '/user.png'}
          alt="Usuário"
          className={styles.userIcon}
        />
      </header>

      <section className={styles.banner}>
        <img
          src={disciplina.banner}
          alt="Imagem da disciplina"
        />
      </section>

      <section className={styles.content}>
        <h1>{disciplina.nome}</h1>

        <p className={styles.professor}>
          Prof.(a) - {disciplina.professor}
        </p>

        <hr />

        <section className={styles.cardsResumo}>
          <article className={styles.infoCard}>
            <div className={styles.circle}>↗</div>

            <div>
              <strong>MÉDIA ATUAL</strong>

              <h2>{disciplina.media}</h2>

              <p>Mínimo para aprovação: 6,0</p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.circle}>▣</div>

            <div>
              <strong>FALTAS</strong>

              <h2>{disciplina.faltas}</h2>

              <p>Presença mínima: 75%</p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <div
              className={
                disciplina.situacao === 'Aprovado'
                  ? styles.circleGreen
                  : styles.circleRed
              }
            >
              {disciplina.situacao === 'Aprovado'
                ? '✓'
                : '✕'}
            </div>

            <div>
              <strong>SITUAÇÃO</strong>

              <h2
                className={
                  disciplina.situacao ===
                  'Aprovado'
                    ? styles.aprovado
                    : styles.reprovado
                }
              >
                {disciplina.situacao}
              </h2>
            </div>
          </article>
        </section>

        <Avaliacoes
          avaliacoes={disciplina.avaliacoes}
        />
      </section>
    </main>
  )
}