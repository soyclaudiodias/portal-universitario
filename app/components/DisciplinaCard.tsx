import Link from 'next/link'
import styles from '../styles/Home.module.css'

interface Disciplina {
  id: number
  nome: string
  professor: string
  banner: string
}

export default function DisciplinaCard({ disciplina }: { disciplina: Disciplina }) {
  return (
    <Link href={`/home/${disciplina.id}`} className={styles.card}>
      <img src={disciplina.banner} alt={disciplina.nome} className={styles.banner} />

      <div className={styles.cardContent}>
        <h2>{disciplina.nome}</h2>
        <p>{disciplina.professor}</p>
      </div>
    </Link>
  )
}