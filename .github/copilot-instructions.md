# AI Coding Agent Guidelines for Next.js 13 Tailwind Blog Project

Welcome to the Next.js 13 Tailwind Blog project! This document provides essential guidelines for AI coding agents to work effectively within this codebase. Follow these instructions to ensure consistency and productivity.

---

## Project Overview

This project is a blog application built with:
- **Next.js 13**: Utilizes the App Router for modern React features.
- **Tailwind CSS**: For styling and responsive design.
- **Supabase**: For backend services and database management.

The application is structured to support dynamic routing, reusable components, and API integration.

---

## Key Files and Directories

- **`src/app/`**: Contains the main application logic, including pages and layouts.
  - `layout.tsx`: Defines the root layout for the app.
  - `page.tsx`: The homepage of the blog.
  - `articles/`: Handles article-related pages, including dynamic routes like `[id]/`.
- **`src/components/`**: Reusable UI components such as `ArticleCard` and `DeleteButton`.
- **`src/data/posts.json`**: Static data for blog posts.
- **`src/utils/supabase/client.ts`**: Supabase client configuration.

---

## Development Workflow

### Running the Project
To start the development server:
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Debugging
- Use the browser's developer tools for inspecting components and network requests.
- Check the Supabase logs for backend-related issues.

### Testing
- Currently, no explicit testing framework is set up. Follow project conventions when adding tests.

---

## Project-Specific Conventions

### Dynamic Routing
- Dynamic routes are defined under `src/app/articles/[id]/`.
- Use `not-found.tsx` for handling 404 errors.

### Component Design
- Components are located in `src/components/`.
- Follow the pattern of separating logic and presentation for reusability.

### API Integration
- Use `src/blogAPI.ts` for API-related logic.
- Supabase is configured in `src/utils/supabase/client.ts`.

---

## External Dependencies

- **Supabase**: Ensure the `.env` file contains the correct Supabase credentials.
- **Tailwind CSS**: Configured in `postcss.config.mjs`.

---

## Examples

### Adding a New Page
1. Create a new folder under `src/app/`.
2. Add a `page.tsx` file for the new route.
3. Update navigation in `Header.tsx` if necessary.

### Fetching Data
Use the `blogAPI.ts` file for fetching data. Example:
```typescript
import { fetchPosts } from '../blogAPI';

const posts = await fetchPosts();
```

---

For any unclear sections or additional guidance, feel free to update this document!