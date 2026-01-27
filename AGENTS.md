# AGENTS.md - Coding Agent Instructions

This document provides guidelines for AI coding agents working in this repository.

## Project Overview

Personal website/blog for Guillaume Moigneu (guillaume.id) built with:

- **Next.js 15** (App Router)
- **Nextra 4** (content/blog framework)
- **React 18**
- **TypeScript 5**
- **Tailwind CSS 4**

## Build/Lint/Test Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting (ESLint configured but no script defined)
npx eslint .                    # Lint entire project
npx eslint app/path/to/file.tsx # Lint single file

# Formatting (Prettier configured but no script defined)
npx prettier --write .                    # Format entire project
npx prettier --write app/path/to/file.tsx # Format single file
npx prettier --check .                    # Check formatting without writing
```

**Note:** No test framework is currently configured in this project.

## Project Structure

```
app/                    # Next.js App Router - pages and components
├── _components/        # Reusable React components (private folder)
├── lib/                # Utility functions
├── articles/           # Article pages with dynamic MDX routing
├── about/, projects/, talks/, videos/, tags/  # Static pages
├── layout.tsx          # Root layout
├── page.tsx            # Homepage
└── providers.tsx       # React context providers

content/
└── articles/           # Markdown/MDX blog articles with frontmatter

styles/
├── tailwind.css        # Main Tailwind entry point
├── typography.ts       # Typography plugin config
└── prism.css           # Code syntax highlighting

public/                 # Static assets (PDFs, etc.)
.upsun/                 # Upsun deployment configuration
```

## Code Style Guidelines

### Formatting (Prettier)

- **Single quotes** for strings
- **No semicolons** at end of statements
- **Tailwind class sorting** via prettier-plugin-tailwindcss

### TypeScript

- **Non-strict mode** is enabled (`strict: false`)
- **Path alias**: Use `@/` for imports from the `app/` directory
- **Inline type annotations** preferred for function parameters
- Use `React.ComponentPropsWithoutRef<T>` for extending HTML element props

### Import Order

```typescript
// 1. External packages (React, Next.js, third-party)
import { type Metadata } from "next";
import Image from "next/image";
import { Link } from "next-view-transitions";
import clsx from "clsx";

// 2. Internal components (use @ alias)
import { Container } from "@/_components/Container";
import { Card } from "@/_components/Card";

// 3. Internal utilities
import { formatDate } from "@/lib/formatDate";

// 4. Assets/images
import logoImage from "@/images/logos/logo.webp";
```

### Naming Conventions

| Type                | Convention           | Example                             |
| ------------------- | -------------------- | ----------------------------------- |
| React components    | PascalCase           | `ArticleLayout`, `SocialLink`       |
| Component files     | PascalCase.tsx       | `Container.tsx`, `Button.tsx`       |
| Utility files       | kebab-case.ts        | `get-articles.ts`, `format-date.ts` |
| Functions/variables | camelCase            | `formatDate`, `getArticles`         |
| Constants           | SCREAMING_SNAKE_CASE | `CONFIG`                            |
| Private folders     | Underscore prefix    | `_components/`                      |

### Component Patterns

**Standard functional component:**

```typescript
export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return <button className={clsx('...', className)} {...props} />
}
```

**forwardRef for DOM-forwarding:**

```typescript
export const Container = forwardRef<
  React.ElementRef<typeof ContainerOuter>,
  React.ComponentPropsWithoutRef<typeof ContainerOuter>
>(function Container({ children, ...props }, ref) {
  return <ContainerOuter ref={ref} {...props}>{children}</ContainerOuter>
})
```

**Compound components:**

```typescript
Card.Title = function CardTitle({ ... }) { ... }
Card.Description = function CardDescription({ ... }) { ... }
```

**Polymorphic components with `as` prop:**

```typescript
function Card<T extends React.ElementType = 'div'>({ as, ...props }) {
  const Component = as ?? 'div'
  return <Component {...props} />
}
```

### Styling

- **Tailwind CSS** for all styling
- **`clsx`** for conditional class merging
- **Dark mode** via `dark:` variant (class-based theme switching)
- **Responsive prefixes**: `sm:`, `md:`, `lg:`, `xl:`
- Use the `prose` class for article/typography content

### Links

Use `next-view-transitions` Link component for internal navigation:

```typescript
import { Link } from 'next-view-transitions'

<Link href="/articles">Articles</Link>
```

### Error Handling

- Rely on Next.js error boundaries and framework defaults
- No explicit try-catch patterns established in this codebase

## Content Management

Articles are Markdown files in `content/articles/` with YAML frontmatter:

```yaml
---
title: "Article Title"
url: https://external-url.com # Optional: external link
published: true # Required: visibility
description: "Article description"
tags: Tag1, Tag2, Tag3 # Comma-separated tags
cta: Read on external site # Optional: custom CTA text
date: 2025-06-07 # Publication date
---
Article content in Markdown...
```

Use `getArticles()` from `@/lib/get-articles.ts` to fetch articles.

## Deployment

Deployed on **Upsun** (Platform.sh):

- Node.js 22 runtime
- Build: `npm install && npm run build`
- Start: `npx next start -p $PORT`

## Key Dependencies

| Package                        | Purpose                             |
| ------------------------------ | ----------------------------------- |
| `next`                         | React framework (App Router)        |
| `nextra` + `nextra-theme-blog` | MDX content/blog framework          |
| `next-view-transitions`        | View transitions API for navigation |
| `next-themes`                  | Dark mode theme switching           |
| `clsx`                         | Conditional class name utility      |
| `tailwindcss`                  | Utility-first CSS framework         |

## Tips for Agents

1. Always use the `@/` path alias for imports from the `app/` directory
2. Place new components in `app/_components/`
3. Run `npx prettier --write <file>` after editing to maintain formatting
4. Use single quotes and omit semicolons
5. New articles go in `content/articles/` as `.md` files with proper frontmatter
6. Check dark mode appearance when adding new UI elements (`dark:` variants)
7. Use `clsx()` for combining Tailwind classes conditionally
