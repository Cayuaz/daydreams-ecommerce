# Daydreams - Streetwear E-commerce

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-bear?style=for-the-badge&labelColor=brown&color=463025)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=black)

> **Daydreams** é uma experiência completa de e-commerce streetwear. O projeto une uma arquitetura backend robusta (Clean Arch) com um frontend reativo de alta performance, desenhado do zero no Figma.

---

## Índice

- [Sobre](#sobre)
- [Preview](#preview)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Decisões Técnicas](#decisões-técnicas)
- [Objetivos de Aprendizagem](#objetivos-de-aprendizagem)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Links do Projeto](#links-do-projeto)
- [Como Executar](#como-executar)
- [Licença](#licença)

---

## Sobre

### O Projeto

**Daydreams** é uma plataforma de e-commerce fullstack desenvolvida para simular a operação real de uma loja de vestuário. Diferente de templates prontos, todo o sistema possui uma identidade visual autoral e foi construído absolutamente do zero.

O desenvolvimento seguiu um ciclo profissional completo (_end-to-end_): iniciou-se pela prototipação no **Figma**, avançou para a construção de uma API robusta com **Clean Architecture** e finalizou-se com um Front-end focado em componentização e reutilização.

### Inspiração & Motivação

A ideia central nasceu da vontade de unir duas paixões: a engenharia de software e a cultura do _Streetwear_.

A estética e a experiência de usuário foram inspiradas em referências do cenário nacional, como: _Mad Enlatados_, _Tá na base_, _Class_, _ALLGLORY_ e _EGHO STUDIOS_. O objetivo não foi apenas criar código, mas desenvolver um produto com identidade, utilizando esse contexto real para aplicar e consolidar conceitos complexos de programação na prática.

---

## Preview

![Home](./github/assets/daydreams-home.png)

&nbsp;

![Produtos](./github/assets/daydreams-products.png)

&nbsp;

![Produto](./github/assets/daydreams-product.png)

---

## Tecnologias Utilizadas

### Frontend (Client)

- **Core:** React & TypeScript
- **Roteamento:** React Router v6.4+ (Data APIs: Loaders/Actions)
- **Estilização:** TailwindCSS & Shadcn/UI
- **Estado Global:** Zustand (com persistência em LocalStorage)
- **Consumo de API:** Axios (Instâncias e Interceptadores)
- **Animações & Ícones:** Framer Motion & Lucide React
- **Validação:** Zod

### Backend (API)

- **Runtime & Linguagem:** Node.js & TypeScript (Paradigma POO)
- **Framework:** Express
- **Banco de Dados:** PostgreSQL (via Neon)
- **ORM:** Prisma
- **Segurança:** JWT (Autenticação), Bcrypt (Hash de senhas) e CORS
- **Documentação:** Swagger (OpenAPI 3.0)
- **Infraestrutura:** Docker (Conteinerização) & Dotenv

### Design

- **Interface & UX:** Figma
- **Assets Visuais**: Google Gemini (Geração de ícones de vestuário via IA)

## Funcionalidades

### Frontend (Client)

- **Performance & Code Splitting:** Uso de `lazy()` imports e `Suspense` para carregar rotas sob demanda.
- **Gerenciamento de Estado Global:**
  - **Carrinho Persistente:** Implementado com **Zustand** e middleware `persist` (Local Storage).
  - Controle granular de UI (menus, modais) sem prop-drilling.
- **Data Fetching Moderno:** Utilização de `loaders` e `actions` do **React Router v6.4+** para evitar "Waterfall requests".
- **UX/UI Imersiva:**
  - **Skeletons:** Feedback visual imediato durante o carregamento de dados (`<Await>`).
  - **Animações:** Transições suaves e modais de feedback utilizando **Framer Motion**.
  - **Notificações:** Feedback de usuário via **Sonner**.

### Backend (API)

- **Busca Inteligente (Smart Search):** Algoritmo capaz de normalizar termos (ex: plural/singular, acentos) e identificar sinônimos (ex: "jorts" retorna "shorts").
- **Segurança:** Autenticação via JWT, senhas com Bcrypt e validação de inputs com **Zod**.
- **Arquitetura Limpa:** Separação estrita entre Controllers, UseCases e Repositories.
- **Documentação:** API totalmente documentada via Swagger/OpenAPI.

---

## Decisões Técnicas

### Design & UI

- **Figma (Prototipagem):** Antes de escrever qualquer linha de código, todo o layout, fluxo de usuário e hierarquia visual foram desenhados no Figma. Isso garantiu um Design System consistente (cores, tipografia, espaçamentos) e agilizou a implementação com TailwindCSS.
- **Inteligência Artificial (Google Gemini):** Todos os ícones de vestuário foram gerados via IA, garantindo uma estética padronizada e personalizada. Essa abordagem permitiu elevar o nível visual do projeto, aproximando-o de padrões de e-commerces profissionais.

### Frontend

- **React Router v6.4+ (Data APIs):** A escolha se deu pela robustez das Data APIs (`loaders` e `actions`). Essa abordagem permite iniciar o carregamento de dados em paralelo à renderização da rota, melhorando a performance percebida e simplificando o gerenciamento de estado assíncrono.
- **Zustand:** Selecionado pela sua API minimalista e performance superior ao Context API nativo, evitando re-renderizações desnecessárias em estados globais voláteis como o carrinho de compras.
- **ShadcnUI:** Escolhido por oferecer componentes acessíveis e totalmente customizáveis. Diferente de bibliotecas tradicionais, ele permite controle total do código-fonte e integração nativa com o TailwindCSS.
- **Axios:** Selecionado em vez da Fetch API devido à sua flexibilidade na criação de instâncias globais e uso de interceptadores. Essa configuração permite a padronização da URL base e a criação de uma camada de resposta simplificada, retornando os dados diretamente (`res.data`) e reduzindo o boilerplate no consumo da API.

### Backend

- **Programação Orientada a Objetos (POO):** O sistema foi desenvolvido utilizando o paradigma de POO para garantir que a lógica de negócio seja modular e reutilizável. Através do uso de classes, métodos privados e tipos rigorosos, foi possível implementar padrões como Injeção de Dependência, facilitando a manutenção e a escalabilidade do código.
- **Clean Architecture (Adaptada):** A estrutura desacopla as regras de negócio do framework web (Express). Isso aumenta a testabilidade e a manutenção, isolando a lógica "pura" (Use Cases) de detalhes de infraestrutura.
- **Prisma ORM:** Utilizado para garantir Type Safety (segurança de tipos) entre a aplicação e o banco de dados, prevenindo erros de SQL em tempo de desenvolvimento e facilitando migrações.
- **PostgreSQL (Neon):** Escolhido pela robustez do ecossistema Postgres aliada a uma infraestrutura moderna em nuvem. O Neon oferece uma implementação gerenciada de alta performance, garantindo a integridade dos dados e eliminando a complexidade de manutenção de servidores físicos.

---

## Objetivos de Aprendizagem

Este projeto foi um marco importante na minha evolução como desenvolvedor, permitindo a consolidação de conceitos avançados e a aplicação prática de uma stack moderna. Os principais focos de aprendizado foram:

- **Arquitetura & POO:** Este foi o meu primeiro contato prático com Programação Orientada a Objetos aplicada a um projeto real. Combinar POO com **Clean Architecture** foi fundamental para entender como criar sistemas desacoplados, escaláveis e de fácil manutenção.
- **Gestão de Estado Global:** Com o **Zustand**, compreendi a importância de estados globais centralizados em aplicações complexas. A experiência destacou como uma biblioteca minimalista pode oferecer alta performance e uma excelente experiência de desenvolvimento.
- **Estilização & Design System:** O uso do **Tailwind CSS** provou sua eficiência na velocidade de desenvolvimento e na facilidade de implementar o conceito de _Mobile First_. A integração com **ShadcnUI** permitiu construir uma interface consistente e acessível utilizando componentes prontos de alta qualidade.
- **Segurança de Tipos com Zod:** O uso do **Zod** representou uma "virada de chave". Substituir _Type Guards_ manuais por validação baseada em schemas garantiu que os tipos fossem verificados em tempo de execução, aumentando drasticamente a confiabilidade dos dados entre o Front e o Back.
- **Documentação Interativa:** Com o **Swagger**, consolidei a importância de manter uma documentação profissional. Diferente de coleções estáticas, o Swagger oferece uma interface interativa que facilita o consumo da API por outros desenvolvedores.
- **Conteinerização com Docker:** Aprendi os fundamentos de imagens e contêineres, garantindo que a aplicação seja padronizada e capaz de rodar sem conflitos em qualquer ambiente de execução.

## Arquitetura do Projeto

```bash
daydreams-ecommerce/
├── backend/          # API RESTful
│   ├── src/
│   │   ├── controllers/  # Adaptadores de Entrada
│   │   ├── useCases/     # Regras de Negócio Puras
│   │   ├── repositories/ # Acesso ao Banco de Dados
│   │   └── entities/     # Modelos de Domínio
│   └── prisma/           # Schema e Migrations
│
└── frontend/         # SPA React
    ├── src/
    │   ├── Components/   # UI, Skeletons, Menus
    │   ├── routes/       # Páginas (Loaders & Actions)
    │   ├── stores/       # Zustand (Cart, User, UI)
    │   └── lib/          # Configurações (Axios, Utils)
```

---

## Como Executar

### Pré-requisitos

- Node.js (v18+)
- Docker (Opcional, para o backend)

### Passo 1: Configurando o Backend

1.  Entre na pasta do servidor:
    ```bash
    cd backend
    npm install
    ```
2.  Crie um arquivo `.env` na raiz do `backend` e configure as variáveis:
    ```env
    DATABASE_URL="postgresql://user:pass@host:port/db_name"
    SECRET="sua_chave_jwt_secreta"
    PORT=3000
    ```
3.  Execute as migrações e rode o servidor:
    ```bash
    npx prisma migrate dev
    npm run dev
    ```

### Passo 2: Configurando o Frontend

1.  Entre na pasta do cliente:
    ```bash
    cd frontend
    npm install
    ```
2.  (Opcional) Se necessário, configure a URL da API no arquivo `src/lib/axios.ts` caso não esteja usando a URL de produção hardcoded.
3.  Rode o projeto:
    ```bash
    npm run dev
    ```
4.  Acesse **http://localhost:5173**.

---

## Links do Projeto

- **Aplicação (Vercel):** [https://daydreams-mu.vercel.app/](https://daydreams-mu.vercel.app/)
- **API (Render):** [https://daydreams-api.onrender.com](https://daydreams-api.onrender.com)
- **Docs da API:** [https://daydreams-api.onrender.com/api-docs](https://daydreams-api.onrender.com/api-docs)
- **Design System (Figma):** [https://www.figma.com/design/ndB2ZxPIV6u6ZCc07xJ7E6/projeto-teste?node-id=0-1&t=Cg2WoRdABSq5oRLq-1](https://www.figma.com/design/ndB2ZxPIV6u6ZCc07xJ7E6/projeto-teste?node-id=0-1&t=Cg2WoRdABSq5oRLq-1)

> **⚠️ Aviso de Performance:** Como o projeto utiliza serviços de hospedagem gratuitos (Render/Neon), a API e o Banco de Dados entram em **modo de hibernação** após períodos de inatividade.
>
> Por isso, a **primeira requisição pode levar cerca de 1 minuto** para ser concluída enquanto os servidores "acordam". As requisições subsequentes serão rápidas. Agradeço a paciência!

---

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
