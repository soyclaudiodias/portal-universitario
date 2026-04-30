import styles from '../styles/Login.module.css'

export default function LoginForm() {
  return (
    <main className={styles.container}>
      <img
        src="/mackenzie.png"
        alt="Logo Mackenzie"
        className={styles.logoImg}
      />

      <section className={styles.loginBox} aria-label="Área de login">
        <form className={styles.form}>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" />

          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" />

          <button type="submit" className={styles.button}>
            <span className={styles.iconArea}>
              <img src="/enter.png" alt="" />
            </span>

            <span className={styles.text}>ENTRAR</span>
          </button>
        </form>
      </section>
    </main>
  )
}