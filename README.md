# Mayerfield Frontend

A modern React + TypeScript storefront for a coffee brand called Brew & Bean. This frontend delivers a polished café landing experience with browsing, authentication, menu discovery, and customer-facing sections that connect to a backend API.

## Overview

This project is a Vite-based frontend built for a coffee shop workflow and customer experience. It includes:

- A responsive storefront landing page
- Menu browsing with category filters and search
- Customer reviews and testimonials section
- Contact form UI
- Sign in and sign up pages
- Token-based auth flow using a backend API

The app is designed to work alongside a Flask or similar backend service that exposes authentication and menu endpoints.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint

## Features

### Customer storefront
- Hero-style coffee shop home page
- Menu section with filters and item cards
- Review/testimonial showcase
- Contact section with a working form UX
- Sticky header with mobile navigation

### Authentication
- Sign in page with email and password flow
- Sign up page with registration form
- Auth token persisted in localStorage
- User profile info displayed in the header after login
- Logout support

### Menu integration
- Fetches menu items from the backend API
- Supports category and text search filtering
- Handles loading and error states gracefully

## Project Structure

```text
mayerfield_frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── sections/
│   │   ├── ui/
│   │   └── data/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Routing

The app currently includes the following routes:

- `/` — Home page with menu, reviews, and contact sections
- `/signin` — User sign-in page
- `/signup` — User registration page

## API Expectations

The frontend expects a backend running locally on:

```text
http://127.0.0.1:5000/api/v1
```

The following endpoints are used:

- `POST /auth/login`
- `POST /auth/register`
- `GET /menu`

The auth flow stores values in `localStorage`:

- `auth_token`
- `user_info`

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A running backend API that matches the expected endpoints

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```
Runs the app in development mode with Vite hot reloading.

```bash
npm run build
```
Builds the production bundle for deployment.

```bash
npm run preview
```
Serves the production build locally for preview.

```bash
npm run lint
```
Runs ESLint checks across the project.

## Notes

- The app uses a localStorage-based user session for demo purposes.
- The menu fetch is protected by an authorization header when a token is available.
- The design is tailored to a coffee-brand storefront and is intended to be extended with additional pages such as menu detail views, checkout, or order management.

## License

This project is currently for local development and internal frontend work. No formal license has been specified yet.

