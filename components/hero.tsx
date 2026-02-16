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
