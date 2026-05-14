# Portal Universitário

Uma aplicação web moderna para visualização e acompanhamento de disciplinas acadêmicas.

---

## Integrantes do Projeto

- Cláudio Dias - 10403569  
- Guillermo Kuznietz - 10410134  
- Matheus Mustaro - 10409259  

---

## Ideação do Projeto

A ideia do **Portal Universitário** surgiu a partir da necessidade de organizar, de forma simples e visual, as principais informações acadêmicas de um aluno.

Durante o processo de ideação, foram consideradas diferentes possibilidades, como:
- Um sistema focado apenas em notas
- Um chatbot educacional isolado (implementado no primeiro projeto)
- Um portal completo com múltiplas funcionalidades

Após discussões em grupo (brainstorming), optou-se por desenvolver um **portal centralizado**, que reúne:
- Disciplinas
- Avaliações
- Desempenho acadêmico

A escolha foi baseada em:
- Facilidade de uso
- Organização visual
- Possibilidade de evolução com API e chatbot

---

## Caráter Extensionista

O projeto pode ser utilizado como uma ferramenta de apoio ao estudante, facilitando o acesso às informações acadêmicas em um único ambiente.

Impactos principais:
- Organização das informações de disciplinas
- Visualização rápida de notas e desempenho
- Base para integração com chatbot educacional

Além disso, o sistema pode evoluir para:
- Apoio a alunos ingressantes
- Integração com sistemas reais da universidade
- Assistência automatizada via chat

---

## Sobre o Projeto

O **Portal Universitário** permite que o usuário:

- Faça login na plataforma
- Visualize suas disciplinas em formato de cards
- Acesse informações detalhadas de cada disciplina
- Consulte:
  - Média atual
  - Frequência
  - Situação (aprovado/reprovado)
  - Notas (Provas, Projetos, Atividades, etc)

---

## Wireframe

### Protótipo para modelo web

O sistema foi projetado com foco em navegação simples e direta:

1. Tela de login
2. Tela inicial com disciplinas (cards)
3. Tela de detalhes da disciplina

O layout prioriza:
- Organização visual
- Facilidade de leitura
- Separação clara das informações

A tela da disciplina apresenta:
- Banner visual
- Informações do professor
- Indicadores de desempenho (média, faltas e situação)
- Lista de avaliações organizadas

Futuramente, o sistema contará com integração de chat, possivelmente como:
- Botão flutuante
- Painel lateral

<img width="1919" height="866" alt="Captura de tela 2026-05-07 092346" src="https://github.com/user-attachments/assets/98135498-68d3-4206-b10d-762ae9701307" />
<hr>
<img width="1901" height="865" alt="Captura de tela 2026-05-07 092410" src="https://github.com/user-attachments/assets/593a9aff-8cb3-479a-b4a9-228655ed7892" />
<hr>
<img width="1919" height="851" alt="Captura de tela 2026-05-07 092451" src="https://github.com/user-attachments/assets/97dbd73f-15db-4434-a3b3-25febec49904" />
<img width="1919" height="868" alt="Captura de tela 2026-05-07 092504" src="https://github.com/user-attachments/assets/b7d0bc78-6b80-4e6c-94b9-28c7e9533af7" />


---

## Tecnologias Utilizadas

- **Next.js 16** – Framework React
- **React 19** – Interface de usuário
- **TypeScript** – Tipagem estática
- **CSS Modules** – Estilização isolada
- **Node.js** – Runtime JavaScript

---

## Modelo do Código

### CSS Global

```css
:root {
  --color-background: #f4f5f7;
  --color-header: #e5e5e5;
  --color-card: #ffffff;
  --color-text: #222;
  --color-muted: #66687a;
  --color-primary: #d63a4d;
  --color-primary-dark: #d10f1f;
  --color-success: #5ea34d;
  --color-success-bg: #e8f5e3;
  --color-neutral-bg: #f0f0f0;

  --radius-sm: 8px;
  --radius-md: 12px;
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

O `:root` define variáveis globais de cores, bordas e sombras utilizadas em toda a aplicação.

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--color-background);
  color: var(--color-text);
}
```

O `body` define a fonte padrão, remove a margem automática do navegador e aplica as cores globais do projeto.

---

### Tela de Login

```tsx
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
    setMessage(`Login bem-sucedido: ${data.email}`)
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
```

A tela de login utiliza `<main>`, `<section>` e `<form>` para organizar semanticamente a estrutura.  
Os campos usam `label` com `htmlFor`, melhorando acessibilidade.

Para deixar com UX melhor, colocamos mensagens de erro quando o login possui campo em branco ou login incorreto, assim como mensagem de confirmação antes de direcionar para a página Home.

O login é realizado por uma api, que busca se a conta existe e se a senha está correta. 

---

### Rota usada na Tela de Login
```tsx
import { NextResponse } from 'next/server'

const accounts = [
  { email: 'aluno@mackenzie.com', password: '0' },
]

export async function POST(request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email e senha são obrigatórios' },
      { status: 400 }
    )
  }

  const user = accounts.find(
    (account) => account.email === email && account.password === password
  )

  if (!user) {
    return NextResponse.json(
      { error: 'Credenciais inválidas' },
      { status: 401 }
    )
  }

  return NextResponse.json({ ok: true, email: user.email })
}
```

Para o uso da api no login, usamos uma rota do tipo POST, que verifica se email e senha estão preenchidos (caso não estejam, devolve erro), buscando então na lista de contas, um usuário com aquele email e senha (caso o usuário não for encontrado ou a senha for incorreta, devolve erro).

---

### Home com Cards de Disciplinas

```tsx
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { disciplinas } from '../data/disciplinas'

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
            <img src={disciplina.banner} alt="Imagem da disciplina" />

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
```

A Home exibe as disciplinas em cards, que ficam salvas em um arquivo separado.  
O `map()` percorre a lista de disciplinas e cria um card para cada item.  
O componente `Link` permite navegar para a página de detalhes da disciplina sem recarregar o site e mantendo uma rota dinâmica.

---

### Tela de Detalhes da Disciplina

```tsx
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
```

A tela de disciplina apresenta informações detalhadas da matéria.  
Os cards de resumo mostram média, faltas, situação e avaliações do aluno.  
Foram usados elementos semânticos como `<section>` e `<article>` para melhorar a organização do HTML.

Para manter a forma dinâmica, utilizamos uma entrada com o parâmetro ``params``, que verifica se o ``id`` é válido, para depois buscar os dados da disciplina.

---

### Lista de Avaliações

```tsx
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
```

A lista de avaliações é renderizada dinamicamente com `map()`.  
Cada avaliação possui nome, tipo, data, peso e nota.  
A nota recebe uma classe própria para ficar visualmente destacada.

---

### Responsividade

```css
@media (max-width: 600px) {
  .logoImg {
    width: 200px;
    margin-bottom: 60px;
  }

  .button {
    width: 100%;
  }
}
```

As media queries ajustam o layout para telas menores.  
Na tela de login, a logo diminui e o botão ocupa melhor o espaço disponível.

```css
@media (max-width: 426px) {
  .left {
    display: none;
  }

  .header {
    justify-content: flex-end;
  }
}

@media (max-width: 600px) {
  .grid {
    padding: 40px 0;
    gap: 28px;
  }
}
```

Na Home, o espaçamento dos cards é reduzido para melhorar a visualização em telas menores.

---

## Como Executar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

---

## Fluxo de Uso

1. O usuário acessa `/`
2. Visualiza a tela de login
3. Ao entrar, acessa `/home`
4. Visualiza os cards de disciplinas
5. Clica em uma disciplina
6. Acessa `/home/[id]` com os detalhes da matéria

---

## Licença

Este projeto foi desenvolvido para fins educacionais pelos alunos do Mackenzie.
