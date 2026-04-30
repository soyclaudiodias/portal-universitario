import styles from '../../styles/Disciplina.module.css'

export default function Disciplina() {
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
        <h1>Disciplina 1</h1>
        <p className={styles.professor}>Prof.(a) - Fulano</p>

        <hr />

        <section className={styles.cardsResumo}>
          <article className={styles.infoCard}>
            <div className={styles.circle}>↗</div>

            <div>
              <strong>MÉDIA ATUAL</strong>
              <h2>7,5</h2>
              <p>Mínimo para aprovação: 6,0</p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.circle}>▣</div>

            <div>
              <strong>FALTAS</strong>
              <h2>15%</h2>
              <p>Presença mínima: 75%</p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <div className={styles.circleGreen}>✓</div>

            <div>
              <strong>SITUAÇÃO</strong>
              <h2 className={styles.aprovado}>Aprovado</h2>
              <p>Parabéns! 🎉</p>
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

          {[
            ['Prova 1', 'Prova', '10/03/2024', '2,0', '8,0'],
            ['Prova 2', 'Prova', '25/03/2024', '2,0', '7,5'],
            ['Prova 3', 'Prova', '15/04/2024', '2,5', '6,5'],
            ['Prova 4', 'Prova', '30/04/2024', '1,5', '8,0'],
          ].map((item, index) => (
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