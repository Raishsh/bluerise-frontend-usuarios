# 🏥 BlueRise - Sistema de Gestão Médica

Sistema completo de gestão de usuários para profissionais de saúde da BlueRise. Uma aplicação web moderna e responsiva desenvolvida com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Sistema de Login**: Autenticação simulada com validação de formulário
- **Dashboard**: Visão geral com estatísticas e lista de usuários
- **Gestão de Usuários**: CRUD completo (Criar, Ler, Atualizar, Deletar)
- **Filtros Avançados**: Filtrar usuários por status (ativo/inativo), função e busca por nome
- **Tema Dark/Light**: Alternância entre modos claro e escuro
- **Interface Responsiva**: Funciona perfeitamente em desktop, tablet e mobile
- **Validação de Formulários**: Usando React Hook Form + Zod

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes de UI acessíveis e customizáveis
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas TypeScript
- **Zustand** - Gerenciamento de estado global
- **Lucide React** - Biblioteca de ícones
- **React Router DOM** - Roteamento da aplicação

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

## 🚀 Instalação e Execução

### Para acessar o projeto hospedado na vercel:

```bash
### Link:
https://bluerise-frontend-usuarios.vercel.app/

```

### Usando npm:

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Entre no diretório do projeto
cd bluerise-sistema-gestao

# 3. Instale as dependências
npm install

# 4. Execute o projeto em modo desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:8080
```

### Usando yarn:

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Entre no diretório do projeto
cd bluerise-sistema-gestao

# 3. Instale as dependências
yarn install

# 4. Execute o projeto em modo desenvolvimento
yarn dev

# 5. Acesse no navegador
# http://localhost:8080
```

## 📜 Scripts Disponíveis

- `npm run dev` / `yarn dev` - Inicia servidor de desenvolvimento
- `npm run build` / `yarn build` - Gera build de produção
- `npm run preview` / `yarn preview` - Preview do build de produção
- `npm run lint` / `yarn lint` - Executa o linter

## 🔐 Como Usar

### 1. Página de Login

- Acesse a aplicação no navegador
- Use qualquer email e senha para fazer login (autenticação simulada)
- Exemplo: `admin@bluerise.com` / `123456`

### 2. Dashboard

- Visualize estatísticas gerais dos usuários
- Navegue pela lista de usuários cadastrados
- Use os filtros para encontrar usuários específicos

### 3. Gestão de Usuários

- **Criar**: Clique em "Novo Usuário" para adicionar
- **Editar**: Clique no ícone de edição em qualquer usuário
- **Excluir**: Clique no ícone de lixeira para remover
- **Filtrar**: Use os filtros por status e busca por nome

## 🎨 Personalização de Tema

A aplicação suporta tema claro e escuro:

- Clique no ícone de lua/sol no canto superior direito
- O tema é persistido no localStorage

## 📱 Responsividade

A interface foi desenvolvida seguindo o conceito "mobile-first":

- **Mobile**: Otimizada para telas pequenas
- **Tablet**: Layout adaptado para telas médias
- **Desktop**: Experiência completa para telas grandes

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── auth/           # Componentes de autenticação
│   ├── dashboard/      # Componentes do dashboard
│   └── ui/             # Componentes base da UI
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
├── providers/          # Providers de contexto
├── store/              # Estado global (Zustand)
└── types/              # Definições de tipos TypeScript
```

## 🤝 Contribuição

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🏥 Sobre a BlueRise

A BlueRise é uma empresa especializada em soluções tecnológicas para o setor médico, oferecendo sistemas de gestão modernos e eficientes para profissionais de saúde.

---
