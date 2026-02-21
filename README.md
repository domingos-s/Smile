# Smile

A supportive self-reflection app that helps you inventory positive thoughts and receive encouragement + journaling prompts when feeling down.

**Tech stack:** Next.js (App Router) + TypeScript + TailwindCSS + Prisma + SQLite.

## Features

- **My Positives**
  - Add / edit / delete positive items (strengths, gratitude, accomplishments, etc.)
  - Search + filter by category
  - **Random Boost** button to surface 1–3 random items

- **I’m Feeling Down**
  - Save a “down session” with optional mood rating (1–10)
  - Deterministically selects **5 positives** using relevance rules (tag/category/text matching + seeded randomness)
  - Shows an encouragement message + journaling prompts
  - Save a journal entry

- **History**
  - View past sessions with selected positives + journal entry

## Local-first data

This app uses a local SQLite database (`dev.db`) stored alongside the project. If you run Smile on your laptop, data stays on your laptop.

## Setup

1) Install dependencies

```bash
npm install
```

2) Create your env file

```bash
cp .env.example .env
```

3) Set up the database

```bash
npm run prisma:generate
npm run prisma:migrate
```

4) Run the app

```bash
npm run dev
```

Open http://localhost:3000

## Notes

- No auth (single-user local app).
- No paid external APIs.
- Journal draft auto-saves to `localStorage` every 2 seconds and clears after saving.

## Prisma

- View DB in Prisma Studio:

```bash
npm run prisma:studio
```
