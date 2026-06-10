# Learning Dashboard

A modern learning progress dashboard built with Next.js, TypeScript, Tailwind CSS, Supabase, and Framer Motion.

## Features

- Responsive dashboard layout
- Dynamic course data from Supabase
- Progress tracking cards
- Learning activity heatmap
- Reusable component architecture
- Loading and error states
- Smooth animations with Framer Motion
- TypeScript support

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion

## Project Structure

```bash
app/
├── page.tsx
├── loading.tsx

components/
├── Sidebar.tsx
├── HeroTile.tsx
├── CourseCard.tsx
├── ActivityTile.tsx
├── FadeIn.tsx

lib/
└── supabase.ts
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/harshali-nikumbh/learning-dashboard.git
```

Install dependencies:

```bash
npm install
```

Create environment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Database Schema

Table: `courses`

| Column      | Type      |
|------------|-----------|
| id         | uuid      |
| title      | text      |
| progress   | int4      |
| icon_name  | text      |
| created_at | timestamp |

## Screenshots

<img width="1888" height="892" alt="image" src="https://github.com/user-attachments/assets/30a51d00-acbd-4180-8606-573c5eaef3f3" />


## Deployment

Deployed using Vercel.

## Author

Harshali Nikumbh
