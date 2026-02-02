# Equine ERP Landing

Monorepo structure for the Equine ERP landing page with separate frontend and backend applications.

## Project Structure

```
equine-erp-landing/
├── apps/
│   ├── web/        # Frontend (React + Vite + TypeScript)
│   └── api/        # Backend (NestJS + TypeScript)
├── packages/
│   └── shared/    # Shared types and utilities
├── docker/         # Docker configurations
├── .env.example    # Environment variables template
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd equine-erp-landing
```

2. Copy environment variables:
```bash
cp .env.example .env
```

3. Install dependencies:
```bash
npm install
```

### Development

Run both frontend and backend in development mode:
```bash
npm run dev
```

Or run individually:
```bash
# Frontend only
npm run dev:web

# Backend only
npm run dev:api
```

### Building

Build all applications:
```bash
npm run build
```

Or build individually:
```bash
npm run build:web
npm run build:api
```

### Docker

Build and run with Docker:
```bash
npm run docker:build
npm run docker:up
```

Stop Docker containers:
```bash
npm run docker:down
```

## Applications

### Web (Frontend)
- **Framework**: React with Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **TypeScript**: Fully typed
- **Location**: `apps/web/`

### API (Backend)
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: Configurable
- **Location**: `apps/api/`

### Shared Package
- **Purpose**: Common types, utilities, and constants
- **Location**: `packages/shared/`

## Environment Variables

See `.env.example` for all available environment variables.

## Scripts

- `npm run dev` - Start all applications in development
- `npm run build` - Build all applications
- `npm run lint` - Lint all applications
- `npm run test` - Run all tests
- `npm run clean` - Clean all build artifacts and node_modules
- `npm run docker:up` - Start with Docker Compose
- `npm run docker:down` - Stop Docker Compose

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License
