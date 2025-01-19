# Kahunas Admin Dashboard

A Next.js-based admin dashboard application for managing clients and viewing analytics.

## Features

- User Authentication (Login/Register)
- Client Management
  - View list of clients with pagination
  - View detailed client information
- Analytics Dashboard
  - AI Response Statistics
  - Most Used Prompts Analysis

## Live Demo

The application is hosted on AWS EC2 and can be accessed at:
[http://13.233.45.0/login](http://13.233.45.0/login)

## Infrastructure

- **Hosting**: AWS EC2 instance
- **Monitoring**: AWS CloudWatch for performance metrics and logs

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd kahunas-admin-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
# Add your environment variables here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

The application will start on [http://localhost:3001](http://localhost:3001)

## Scripts

- `npm run dev` - Start development server on port 3001
- `npm run build` - Build the application for production
- `npm run start` - Start production server on port 3001
- `npm run lint` - Run ESLint for code linting

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - UI library
- [Axios](https://axios-http.com/) - HTTP client
- [SWR](https://swr.vercel.app/) - React Hooks for data fetching
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static type checking

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   ├── login/            # Login page
│   └── register/         # Registration page
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and configurations
└── config/               # Application configuration
```
