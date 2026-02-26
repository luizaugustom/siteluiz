# Portfolio — Next.js

A tech-themed portfolio site built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. Single-page layout with sections: Hero, About, Technologies, Education, Projects (GitHub), and Contact.

## Setup

1. **Install dependencies** (already done if you cloned after `create-next-app`):
   ```bash
   npm install
   ```

2. **Configure your data**  
   Edit [`src/config/site.ts`](src/config/site.ts) and set:
   - `name`, `title`, `tagline`, `bio`, `email`
   - `avatarPath` (e.g. `/avatar.jpg` after adding your photo)
   - `links` (GitHub, LinkedIn, WhatsApp, Twitter)
   - `technologies` and `education` lists

3. **Add your photo**  
   Place your image in `public/` (e.g. `public/avatar.jpg`) and set `avatarPath` in `site.ts` to that path (e.g. `/avatar.jpg`).  
   The repo includes a placeholder `public/avatar.svg`; replace it with your photo when ready.

4. **GitHub projects (optional)**  
   Create `.env.local` from `.env.example` and set:
   ```env
   GITHUB_USERNAME=your-github-username
   ```
   The Projects section will then load your public repositories.

## Run

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Start (production):** `npm start`

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS, Framer Motion
- Single-page layout with anchor navigation and mobile menu
- Blue tech theme, responsive layout, scroll-triggered animations
- Projects loaded from GitHub API (server-side, cached 1h)

All content and UI copy are in English.
