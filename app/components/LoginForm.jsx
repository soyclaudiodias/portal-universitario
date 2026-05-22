'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from '../styles/Login.module.css'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setLoading(true)

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await response.json()
    setLoading(false)

    if (!response.ok) {
      setSuccess(false)
      setMessage(data.error || 'Falha ao fazer login')
      return
    }

    setSuccess(true)

    localStorage.setItem(
      'usuarioLogado',
      JSON.stringify(data.usuario)
    )

    setMessage(`Login bem-sucedido: ${data.usuario.nome}`)

    setEmail('')
    setPassword('')

    setTimeout(() => {
      router.push('/home')
    }, 600)
  }

  return (
    <main className={styles.container}>
      <img
        src="/mackenzie.png"
        alt="Logo Mackenzie"
        className={styles.logoImg}
      />

      <section className={styles.loginBox} aria-label="Área de login">
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className={styles.button}>
            <span className={styles.iconArea}>
              <img src="/enter.png" alt="" />
            </span>

            <span className={styles.text}>ENTRAR</span>
          </button>

          {message ? (
            <p className={success ? styles.successMessage : styles.message}>
              {message}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  )
}