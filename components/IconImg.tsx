import Image from "next/image";

/**
 * Custom navy and gold illustrated icon from /public/icons, shown in the framed ivory tile.
 * next/image resizes the large source PNGs and serves them as webp.
 */
export function IconImg({ src, size = 64, tile = true }: { src: string; size?: number; tile?: boolean }) {
  const img = <Image src={encodeURI(src)} alt="" width={size} height={size} sizes={`${size}px`} className="ic-img" />;
  return tile ? <span className="ic-tile">{img}</span> : img;
}

export const icon = (folder: string, name: string) => `/icons/${folder}/${name}.png`;
