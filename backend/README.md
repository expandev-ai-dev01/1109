# TODO List Backend API

Backend REST API for TODO List system built with Node.js, Express, TypeScript, and SQL Server.

## Features

- RESTful API architecture
- TypeScript for type safety
- SQL Server database integration
- Multi-tenancy support
- Comprehensive error handling
- API versioning
- CORS configuration
- Security middleware (Helmet)
- Request compression

## Prerequisites

- Node.js 18+ 
- SQL Server 2019+
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and configure:
```bash
cp .env.example .env
```

4. Update `.env` with your database credentials and settings

## Development

Start development server with hot reload:
```bash
npm run dev
```

## Building

Build for production:
```bash
npm run build
```

## Running Production

Start production server:
```bash
npm start
```

## Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Linting

Run ESLint:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
└── server.ts               # Application entry point
```

## API Endpoints

Base URL: `http://localhost:3000/api/v1`

### Health Check
- `GET /health` - API health status

## Environment Variables

See `.env.example` for all available configuration options.

## License

ISC