# Learning Dashboard

A futuristic learning dashboard built with Next.js, Supabase, Tailwind CSS, and Framer Motion.

## Tech Stack

* Next.js (App Router)
* TypeScript
* Supabase
* Tailwind CSS
* Framer Motion
* Lucide React

## Features

* Server-side data fetching using Next.js Server Components
* Dynamic course cards fetched from Supabase
* Animated progress bars
* Staggered page-load animations
* Hover interactions with Framer Motion
* Loading skeletons using loading.tsx
* Error handling for failed database requests
* Responsive Bento Grid layout
* Dynamic icon rendering from database values

## Environment Variables

Create a `.env.local` file using the values shown in `.env.example`.

Required variables:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

## Architecture

* `app/page.tsx` handles server-side data fetching.
* Reusable UI components are stored in `components/`.
* Supabase client configuration is located in `lib/supabase.ts`.
* Framer Motion is used for hover effects and staggered animations.

## Challenges

The primary challenge was combining Next.js Server Components with client-side Framer Motion animations while keeping the component structure modular and maintaining smooth UI interactions.
