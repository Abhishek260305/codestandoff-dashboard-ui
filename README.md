# Dashboard UI

Dashboard micro-frontend application for CodeStandoff 2.0.

## Overview

This application provides user dashboard functionality including:
- User statistics and progress
- Recent activity tracking
- Problem-solving history
- Performance metrics

## Tech Stack

- Next.js 14 with TypeScript
- Tailwind CSS
- Module Federation (@module-federation/nextjs-mf)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on http://localhost:3001

### Building for Production

```bash
npm run build
npm start
```

## Module Federation

This application exposes the `Dashboard` component via Module Federation, which can be consumed by the host application.

## Repository

https://github.com/Abhishek260305/dashboard-ui

