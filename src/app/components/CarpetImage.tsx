import { useState } from "react";

const BASE = `${import.meta.env.BASE_URL}img/carpets`;

/**
 * Ornament shown when a photo is missing — better than a broken-image icon
 * while the stock shots are being replaced with the real showroom photos.
 */
const carpetPattern = `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23b8935a' stroke-opacity='.34'%3E%3Crect x='18' y='18' width='124' height='124'/%3E%3Cpath d='M80 18l62 62-62 62-62-62z'/%3E%3Ccircle cx='80' cy='80' r='24'/%3E%3C/g%3E%3C/svg%3E")`;

interface CarpetImageProps {
  /** File name without size suffix, e.g. "tabriz" for img/carpets/tabriz-960.webp */
  name: string;
  alt: string;
  className?: string;
  /** Only for images visible without scrolling. Everything else stays lazy. */
  priority?: boolean;
  /** Rendered width, so the browser can pick 480w instead of 960w on phones. */
  sizes?: string;
}

export function CarpetImage({
  name,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 1023px) 92vw, 45vw",
}: CarpetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative overflow-hidden bg-[#120D07] ${className ?? ""}`}
        style={{
          backgroundImage: `${carpetPattern}, linear-gradient(135deg, #120D07 0%, #2a1a0d 48%, #5f4222 100%)`,
          backgroundPosition: "center",
          backgroundSize: "160px 160px, cover",
        }}
      >
        <div className="absolute inset-4 border border-[#B8935A]/35" />
      </div>
    );
  }

  return (
    <img
      src={`${BASE}/${name}-960.webp`}
      srcSet={`${BASE}/${name}-480.webp 480w, ${BASE}/${name}-960.webp 960w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}
