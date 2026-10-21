import { useEffect } from "react";
import { business } from "@/data/site";

const setMeta = (selector: string, attr: string, value: string) =>
  document.head.querySelector(selector)?.setAttribute(attr, value);

/** Título, descrição, canonical e OG por rota (o index.html traz os valores da home). */
export function useSeo({ title, description, path, noindex }: { title: string; description?: string; path: string; noindex?: boolean }) {
  useEffect(() => {
    const url = `${business.url}${path}`;
    document.title = title;
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }
  }, [title, description, path, noindex]);
}
