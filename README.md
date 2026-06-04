# Portfólio — Casco (Matteus Guylherme)

Portfólio pessoal de desenvolvedor backend, desenvolvido como projeto acadêmico com foco em **acessibilidade** e **animações modernas**. A página apresenta perfil, formação, experiência, skills técnicas, idiomas, atividades e contato, num layout estilo currículo com identidade visual própria (paleta creme/terracota/oliva e fontes display customizadas).

🔗 **Deploy:** _[adicionar link aqui após o deploy]_
💻 **Código:** https://github.com/ttmatteus/_[nome-do-repo]_

---

## Tecnologias utilizadas

- **React 18 + TypeScript** — estrutura de componentes e tipagem
- **Vite** — bundler e servidor de desenvolvimento
- **GSAP** + **ScrollTrigger** — animações
- **Lenis** — smooth scroll (rolagem suavizada)
- **anime.js** — animação de morphing do blob de fundo

---

## Bibliotecas de animação (explicação)

O projeto usa **três** bibliotecas de animação/manipulação de objetos, cada uma com um papel:

### 1. GSAP (GreenSock Animation Platform) + ScrollTrigger
Usada para as animações de entrada dos elementos. No carregamento, o nome e os textos do hero surgem com fade + deslize; a navbar desce suavemente. Com o **ScrollTrigger**, as seções (Educação, Experiência, Skills, etc.) revelam seu conteúdo conforme entram na viewport durante a rolagem. A imagem do hero também faz um fade-in suave via GSAP.

**Feature — botão magnético:** o CTA "Entrar em contato" (footer) é puxado suavemente em direção ao cursor com `gsap.quickTo` (manipulação de objeto via GSAP, atualizando `transform`), implementada no hook reutilizável [`src/hooks/useMagnetic.ts`](src/hooks/useMagnetic.ts). Respeita `prefers-reduced-motion`.

### 2. Lenis
Substitui o scroll nativo do navegador por uma rolagem **suavizada por interpolação** (`lerp`), deixando a navegação mais fluida. Está integrada ao GSAP (via `gsap.ticker` e `ScrollTrigger.update`) para que as animações de scroll fiquem sincronizadas com a posição real da página. Também é usada para o **scroll suave ao clicar** nos links da navbar (Sobre / Skills / Contato).

### 3. anime.js
Responsável pelo **blob de fundo que se transforma (morphing)**. É um único SVG fixo cujo `path` é animado continuamente entre duas formas (pulso) e que, a cada seção que entra na tela, **muda de forma, posição, escala e cor** — ficando verde-oliva nas seções claras e branco na faixa marrom. A lógica foi baseada no efeito "Morphing Background Shapes" da Codrops.

---

## Acessibilidade implementada

São **3** recursos principais de acessibilidade (sendo um o VLibras):

### 1. VLibras
Widget oficial do Governo Federal que traduz o conteúdo da página para **Libras** (Língua Brasileira de Sinais) em tempo real, com um avatar 3D. O botão de ativação fica no canto da tela.

### 2. Barra de Acessibilidade
Controles fixos no canto superior direito:
- **Alto contraste** — alterna para um tema de alto contraste (fundo branco, texto preto, cores reforçadas), inclusive desligando elementos decorativos (blob, folhas) para não atrapalhar a leitura.
- **Tamanho de fonte** — botões A+ / A− que aumentam ou diminuem o texto (12px a 24px).

### 3. Semântica e navegação por teclado
- Link **"Pular para o conteúdo principal"** (aparece ao navegar com Tab).
- HTML semântico (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`).
- Atributos **ARIA** em elementos interativos e decorativos (`aria-label`, `aria-hidden`, `role`, `aria-pressed`), imagens decorativas com `alt=""`.

---

## Como executar localmente

Pré-requisitos: **Node.js 18+** e npm.

```bash
# 1. Clonar o repositório
git clone https://github.com/ttmatteus/<nome-do-repo>.git
cd <nome-do-repo>

# 2. Instalar as dependências
npm install

# 3. Rodar em modo desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

```bash
# Gerar build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

## Estrutura do projeto

```
src/
├── components/
│   ├── AccessibilityBar.tsx  # Alto contraste e tamanho de fonte
│   ├── VLibras.tsx           # Widget de acessibilidade em Libras
│   ├── MorphBlob.tsx         # Blob de fundo (anime.js)
│   ├── morphShapes.ts        # Formas/cores do blob por seção
│   ├── Navbar.tsx            # Navegação fixa + scroll suave + auto-hide
│   ├── Hero.tsx              # Apresentação ("I am Casco")
│   ├── Intro.tsx             # Sobre + card de contato
│   ├── Resume.tsx            # Educação, experiência, skills, idiomas, atividades
│   └── Footer.tsx            # CTA final + links
├── App.tsx                   # Lenis + GSAP + controlador do blob + layout
├── index.css                 # Design system (cores, fontes, tema)
└── main.tsx                  # Ponto de entrada React
```

---

## Responsabilidades

Projeto **individual**.

| Integrante | Responsabilidades |
|------------|-------------------|
| **Matteus Guylherme (Casco)** — github.com/ttmatteus | Projeto completo: setup (Vite + React + TS), design e identidade visual, todos os componentes, integração das animações (GSAP, Lenis, anime.js), acessibilidade (VLibras, alto contraste, tamanho de fonte, ARIA), conteúdo, deploy e documentação. |

---

## Licença

Projeto acadêmico de código aberto.
