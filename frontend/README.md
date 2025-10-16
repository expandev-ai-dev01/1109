# TODO List Application

## Descrição
Sistema de gerenciamento de tarefas (TODO List) desenvolvido com React, TypeScript e TailwindCSS.

## Tecnologias
- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto
```
src/
├── app/                    # Configuração da aplicação
│   ├── main.tsx           # Entry point
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Providers globais
│   └── router.tsx         # Configuração de rotas
├── core/                   # Componentes e utilitários compartilhados
│   ├── components/        # Componentes UI reutilizáveis
│   ├── utils/             # Funções utilitárias
│   ├── constants/         # Constantes globais
│   └── lib/               # Configurações de bibliotecas
├── pages/                  # Páginas da aplicação
│   ├── layouts/           # Layouts compartilhados
│   ├── Home/              # Página inicial
│   └── NotFound/          # Página 404
├── domain/                 # Domínios de negócio (features)
└── assets/                 # Recursos estáticos
    └── styles/            # Estilos globais
```

## Instalação
```bash
npm install
```

## Configuração
1. Copie o arquivo `.env.example` para `.env`
2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento
```bash
npm run dev
```
Aplicação disponível em: http://localhost:3001

## Build
```bash
npm run build
```

## Preview
```bash
npm run preview
```

## Lint
```bash
npm run lint
```

## Arquitetura

### Padrões de Organização
- **Domain-Driven Architecture**: Cada domínio de negócio encapsulado em seu próprio diretório
- **Component-Based**: Componentes reutilizáveis e modulares
- **Type-Safe**: TypeScript para segurança de tipos
- **API Integration**: Cliente HTTP configurado para REST API

### Convenções de Nomenclatura
- **Componentes**: PascalCase (ex: `Button`, `TaskCard`)
- **Hooks**: camelCase com prefixo `use` (ex: `useTaskList`)
- **Utilitários**: camelCase (ex: `formatDate`)
- **Constantes**: SCREAMING_SNAKE_CASE (ex: `API_ENDPOINTS`)

### Gerenciamento de Estado
- **TanStack Query**: Para estado do servidor (cache, sincronização)
- **Zustand**: Para estado global da aplicação (quando necessário)
- **React Hook Form**: Para estado de formulários

### Estilização
- **TailwindCSS**: Utility-first CSS framework
- **Variants Pattern**: Variantes de estilo para componentes
- **Responsive Design**: Mobile-first approach

## Próximos Passos
1. Implementar domínio de tarefas (task)
2. Criar componentes de formulário de tarefa
3. Implementar listagem de tarefas
4. Adicionar filtros e ordenação
5. Implementar persistência de dados

## Contribuição
Siga os padrões estabelecidos na arquitetura e documentação JSDoc para todos os componentes e funções.