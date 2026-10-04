# Veltrix Labs 

A responsive studio website built with React, TypeScript, and Vite. It features a crisp vector laptop-and-mobile hero, service listings, clearly labeled example project concepts, project deliverables, the working process, social links, and an FAQ. The project concepts are illustrative examples, not client case studies.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Run with Docker

Build the production image and start the site at <http://localhost:8080>:

```bash
docker compose up --build
```

Stop the container with `Ctrl+C`, or run `docker compose down` in another
terminal. The Docker image builds the app with Node.js and serves the static
production files with Nginx.

Update the contact email and social profile URLs in `src/App.tsx` if the studio uses different details.

## SEO before launch

The site includes crawlable page metadata, structured business data, `robots.txt`,
and a social sharing preview. After choosing the production domain, add its
canonical URL, absolute Open Graph image URL, and sitemap, then verify the domain
in Google Search Console and submit the sitemap. Update the business service
area and profile links with accurate details; search visibility and ranking
cannot be guaranteed by metadata alone.
