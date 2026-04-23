---
date: '2026-02-15'
title: 'Hostyo Owner Portal'
github: ''
external: 'https://hostyo.com/'
tech:
  - Next.js 15
  - TypeScript
  - Notion API
  - Tailwind CSS
  - NextAuth
  - Vercel
description: 'A property management owner portal built with Next.js and TypeScript, using Notion as a headless backend to expose reservations, finances, and property data to hosts.'
showInProjects: true
---

Property management owner portal built with **Next.js 15** and **TypeScript**, using **Notion as a headless backend** to give hosts live visibility into reservations, payouts, expenses, and property performance. Integrates with OAuth providers for secure multi-tenant access and renders financial dashboards with real-time sync to Notion databases.

## Key Features

- Notion-backed data layer with typed API routes and caching
- Multi-tenant authentication with role-based access
- Financial dashboards (reservations, payouts, expenses)
- Server-side rendering with Next.js App Router
- Deployed on Vercel with preview environments per branch
