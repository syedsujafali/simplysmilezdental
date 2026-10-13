import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const seoDataDir = path.resolve(__dirname, 'seo-data');

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

function generatePageHtml(baseHtml, meta) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

  // Replace Description
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/>/s, `<meta name="description"\n    content="${meta.description}" />`);

  // Replace Author
  html = html.replace(/<meta\s+name="author"\s+content=".*?"\s*\/>/s, `<meta name="author" content="${meta.author}" />`);

  // Replace Keywords
  html = html.replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/>/s, `<meta name="keywords"\n    content="${meta.keywords}" />`);

  // Replace Canonical
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/>/s, `<link rel="canonical" href="${meta.canonical}" />`);

  // Replace Open Graph
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/s, `<meta property="og:title" content="${meta.ogTitle}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/>/s, `<meta property="og:description"\n    content="${meta.ogDescription}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/>/s, `<meta property="og:url" content="${meta.ogUrl}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/>/s, `<meta property="og:image" content="${meta.ogImage}" />`);
  html = html.replace(/<meta\s+property="og:image:alt"\s+content=".*?"\s*\/>/s, `<meta property="og:image:alt" content="${meta.ogImageAlt}" />`);

  // Replace Twitter
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${meta.twitterTitle}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s, `<meta name="twitter:description"\n    content="${meta.twitterDescription}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/s, `<meta name="twitter:image" content="${meta.twitterImage}" />`);

  // Replace Schema JSON-LD
  const schemaRegex = /<script type="application\/ld\+json">.*?<\/script>/s;
  const newSchemaScript = `<script type="application/ld+json">\n${JSON.stringify(meta.schema, null, 2)}\n  </script>`;
  html = html.replace(schemaRegex, newSchemaScript);

  return html;
}

// Read all JSON files from scripts/seo-data/ and prerender them
if (fs.existsSync(seoDataDir)) {
  const files = fs.readdirSync(seoDataDir).filter(f => f.endsWith('.json'));

  for (const file of files) {
    const meta = JSON.parse(fs.readFileSync(path.join(seoDataDir, file), 'utf8'));
    const route = meta.route;
    const pageHtml = generatePageHtml(template, meta);

    // 1. Clean URL folder: e.g. dist/services/pediatric-dentistry/index.html (serves /services/pediatric-dentistry)
    const routeFolder = path.join(distDir, route.replace(/^\//, ''));
    fs.mkdirSync(routeFolder, { recursive: true });
    fs.writeFileSync(path.join(routeFolder, 'index.html'), pageHtml, 'utf8');

    // 2. Legacy / compatibility .html file: e.g. dist/about.html or dist/services/braces.html
    const legacyHtmlPath = path.join(distDir, `${route.replace(/^\//, '')}.html`);
    fs.mkdirSync(path.dirname(legacyHtmlPath), { recursive: true });
    fs.writeFileSync(legacyHtmlPath, pageHtml, 'utf8');

    console.log(`Generated SEO HTML for ${route} (clean URL folder + .html fallback)`);
  }
}
