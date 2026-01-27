# guillaume.id

Personal website and blog for Guillaume Moigneu — Developer, Speaker, Field CTO at Upsun.

**Live site:** [https://guillaume.id](https://guillaume.id)

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Nextra 4](https://nextra.site/) (Blog/content framework)
- [React 18](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## Adding Content

Articles are Markdown files in `content/articles/` with YAML frontmatter:

```yaml
---
title: "Article Title"
published: true
description: "Article description"
tags: Tag1, Tag2, Tag3
date: 2025-06-07
url: https://external-url.com # Optional: link to external article
cta: Read on external site # Optional: custom CTA text
---
Article content in Markdown...
```

## Deployment

Deployed on [Upsun](https://upsun.com) with Node.js 22. Configuration in `.upsun/config.yaml`.

## License

All rights reserved © Guillaume Moigneu
