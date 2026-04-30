import styles from '../styles/Home.module.css'
import Link from 'next/link'

const disciplinas = [
  { id: 1, nome: 'Disciplina 1', professor: 'Fulano' },
  { id: 2, nome: 'Disciplina 2', professor: 'Beltrano' },
  { id: 3, nome: 'Disciplina 3', professor: 'Ciclano' },
  { id: 4, nome: 'Disciplina 4', professor: 'Ciclano' },
  { id: 5, nome: 'Disciplina 5', professor: 'Ciclano' },
]

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <span>HIGIENÓPOLIS</span>
          <span className={styles.separator}>|</span>
          <span>CURSO</span>
        </div>

        <div className={styles.right}>
          <span className={styles.name}>NOME</span>
          <img src="/user.png" alt="Usuário" className={styles.userIcon} />
        </div>
      </header>

      <section className={styles.grid}>
        {disciplinas.map((disciplina) => (
          <Link
            key={disciplina.id}
            href={`/home/${disciplina.id}`}
            className={styles.card}
          >
            <img src="/aula.jpg" alt="Imagem da disciplina" />

            <div className={styles.cardContent}>
              <h2>{disciplina.nome}</h2>
              <p>Prof.(a) - {disciplina.professor}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}