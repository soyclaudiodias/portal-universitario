import { notFound } from 'next/navigation'
import styles from '../../styles/Disciplina.module.css'
import { disciplinas } from '../../data/disciplinas'

interface PageProps {
  params: {
    id: string
  }
}

export default async function Disciplina({ params }: PageProps) {
  const {id} = await params
  const disciplina = disciplinas.find((item) => item.id === id)

  if (!disciplina) {
    notFound()
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <span>HIGIENÓPOLIS</span>
          <span className={styles.separator}>|</span>
          <span>CURSO</span>
        </div>

        <div className={styles.right}>
          <span>NOME</span>
          <img src="/user.png" alt="Usuário" className={styles.userIcon} />
        </div>
      </header>

      <section className={styles.banner}>
        <img src="/aula.jpg" alt="Imagem da disciplina" />
      </section>

      <section className={styles.content}>
        <h1>{disciplina.nome}</h1>
        <p className={styles.professor}>Prof.(a) - {disciplina.professor}</p>

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
            <div className={styles.circleGreen}>✓</div>

            <div>
              <strong>SITUAÇÃO</strong>
              <h2 className={disciplina.situacao === 'Aprovado' ? styles.aprovado : ''}>
                {disciplina.situacao}
              </h2>
            </div>
          </article>
        </section>

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

          {disciplina.avaliacoes.map((item, index) => (
            <article className={styles.avaliacaoItem} key={index}>
              <div>
                <strong>{item[0]}</strong>
                <p>{item[1]}</p>
              </div>

              <span>{item[2]}</span>
              <span>{item[3]}</span>
              <span className={styles.nota}>{item[4]}</span>
            </article>
          ))}
        </section>
      </section>
    </main>
  )
}