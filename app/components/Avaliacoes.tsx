import styles from '../styles/Disciplina.module.css'

interface AvaliacoesProps {
  avaliacoes: string[][]
}

export default function Avaliacoes({ avaliacoes }: AvaliacoesProps) {
  return (
    <section className={styles.avaliacoes}>
      <div className={styles.avaliacoesHeader}>
        <h2>Avaliações</h2>
      </div>

      <div className={styles.tableHeader}>
        <span>AVALIAÇÃO</span>
        <span>DATA</span>
        <span>PESO</span>
        <span>NOTA</span>
      </div>

      {avaliacoes.map((item, index) => (
        <article
          className={styles.avaliacaoItem}
          key={index}
        >
          <div>
            <strong>{item[0]}</strong>
            <p>{item[1]}</p>
          </div>

          <span>{item[2]}</span>
          <span>{item[3]}</span>

          <span className={styles.nota}>
            {item[4]}
          </span>
        </article>
      ))}
    </section>
  )
}