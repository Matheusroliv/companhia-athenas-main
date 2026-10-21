// Gera dist/index.html e dist/galeria/index.html com o conteúdo já renderizado.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, routes } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const meta = {
  "/galeria": {
    title: "Fotos da academia | Companhia Athenas Fitness, Samambaia Norte",
    description:
      "Veja fotos reais da Companhia Athenas: salão de musculação, cardio, piscina coberta, espaço de lutas e sala de aulas coletivas na QR 208, Samambaia Norte - DF.",
  },
};

for (const url of routes) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
  const m = meta[url];
  if (m) {
    const canonical = `https://companhiaathenas.com.br${url}`;
    html = html
      .replace(/<title>.*?<\/title>/, `<title>${m.title}</title>`)
      .replace(/(<meta name="description" content=")[^"]*/, `$1${m.description}`)
      .replace(/(<meta property="og:title" content=")[^"]*/, `$1${m.title}`)
      .replace(/(<meta property="og:description" content=")[^"]*/, `$1${m.description}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${canonical}`)
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${canonical}`);
  }
  const out = path.join(dist, url, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log("prerender", url);
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
