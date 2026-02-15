"use client"

import { useState, useEffect } from "react"

const heroImages = [
  {
    src: "/images/img-20250722-183648.jpg",
    alt: "נוף פנורמי של מושב אבן ספיר על גבעות יהודה בשקיעה",
  },
  {
    src: "/images/img-20251114-071014.jpg",
    alt: "קשת בענן מעל הרי ירושלים ליד אבן ספיר",
  },
  {
    src: "/images/img-20250722-180251.jpg",
    alt: "נוף רחב של אבן ספיר עם גבעות מיוערות",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,30%,12%)]/80 via-[hsl(25,30%,12%)]/30 to-transparent" />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-5xl font-bold leading-tight text-[hsl(40,40%,97%)] md:text-7xl lg:text-8xl text-balance">
          השכנים באבן ספיר
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(33,30%,85%)] md:text-xl">
          קהילה שכנית חמה בלב הרי יהודה
        </p>
        <a
          href="https://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          עברו לקבוצה בוואטסאפ
        </a>
        <div className="mt-10 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-accent"
                  : "w-2 bg-[hsl(40,40%,97%)]/50"
              }`}
              aria-label={`עבור לתמונה ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
