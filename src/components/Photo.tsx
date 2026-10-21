import type { ImgHTMLAttributes } from "react";

const files = import.meta.glob<string>("../assets/photos/*.webp", { eager: true, import: "default" });

const url = (name: string, w: 640 | 960 | 1280) => files[`../assets/photos/${name}-${w}.webp`];

/** Foto real da academia em WebP, 640w, 960w e 1280w; o navegador baixa só o tamanho que precisa. */
export const photoSrc = (name: string, w: 640 | 960 | 1280 = 1280) => url(name, w);

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> & { name: string; alt: string };

const Photo = ({ name, alt, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw", ...rest }: Props) => (
  <img
    src={url(name, 640)}
    srcSet={`${url(name, 640)} 640w, ${url(name, 960)} 960w, ${url(name, 1280)} 1280w`}
    sizes={sizes}
    alt={alt}
    loading="lazy"
    decoding="async"
    {...rest}
  />
);

export default Photo;
