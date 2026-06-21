import React, { useState } from 'react'

const carpetPattern = `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23b8935a' stroke-opacity='.34'%3E%3Crect x='18' y='18' width='124' height='124'/%3E%3Cpath d='M80 18l62 62-62 62-62-62z'/%3E%3Ccircle cx='80' cy='80' r='24'/%3E%3Cpath d='M18 18l124 124M142 18L18 142' stroke-opacity='.18'/%3E%3C/g%3E%3C/svg%3E")`;

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      aria-label={alt ?? 'Image unavailable'}
      className={`relative overflow-hidden bg-[#120D07] ${className ?? ''}`}
      data-original-url={src}
      role="img"
      style={{
        ...style,
        backgroundImage: `${carpetPattern}, linear-gradient(135deg, #120D07 0%, #2a1a0d 48%, #5f4222 100%)`,
        backgroundPosition: 'center',
        backgroundSize: '160px 160px, cover',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#120D07]/45 via-transparent to-[#FAF8F3]/10" />
      <div className="absolute inset-6 border border-[#B8935A]/35" />
      <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
        <span className="font-['Jost'] text-[10px] uppercase tracking-[0.35em] text-[#FAF8F3]/55">
          Persian carpet image unavailable
        </span>
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}
