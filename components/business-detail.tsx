"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Business } from "@/lib/businesses-data"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? "hsl(38, 55%, 55%)" : "hsl(33, 15%, 80%)"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export function BusinessDetail({ business }: { business: Business }) {
  const [selectedImage, setSelectedImage] = useState(0)

  const wazeUrl = `https://waze.com/ul?ll=${business.coordinates.lat},${business.coordinates.lng}&navigate=yes`
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.coordinates.lat},${business.coordinates.lng}`
  const mapEmbedUrl = `https://maps.google.com/maps?q=${business.coordinates.lat},${business.coordinates.lng}&z=15&output=embed`

  const avgRating =
    business.reviews.length > 0
      ? (
          business.reviews.reduce((sum, r) => sum + r.rating, 0) /
          business.reviews.length
        ).toFixed(1)
      : null

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 md:h-[28rem]">
        <Image
          src={business.gallery[selectedImage] || business.image}
          alt={business.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25,30%,12%)] via-[hsl(25,30%,12%)]/40 to-transparent" />

        {/* Back button */}
        <div className="absolute top-6 right-6 z-10">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(25,30%,12%)]/70 px-4 py-2 text-sm text-[hsl(40,40%,97%)] backdrop-blur-sm transition-colors hover:bg-[hsl(25,30%,12%)]/90"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            חזרה למרכז העסקים
          </Link>
        </div>

        {/* Info overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8">
          <div className="mx-auto max-w-4xl">
            <span className="inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
              {business.category}
            </span>
            <h1 className="mt-3 font-serif text-3xl font-bold text-[hsl(40,40%,97%)] md:text-5xl">
              {business.name}
            </h1>
            {avgRating && (
              <div className="mt-2 flex items-center gap-2">
                <StarRating rating={Math.round(Number(avgRating))} />
                <span className="text-sm text-[hsl(33,30%,80%)]">
                  {avgRating} ({business.reviews.length} ביקורות)
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery thumbnails */}
      {business.gallery.length > 1 && (
        <div className="border-b border-border bg-card px-6 py-4">
          <div className="mx-auto flex max-w-4xl gap-3 overflow-x-auto">
            {business.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setSelectedImage(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all ${
                  selectedImage === i
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-card"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img || "/placeholder.svg"} alt={`${business.name} ${i + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="px-6 py-10">
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-3">
          {/* Main content - 2 cols */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                אודות העסק
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {business.extendedDescription}
              </p>
            </section>

            {/* Reviews */}
            {business.reviews.length > 0 && (
              <section className="mt-12">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  ביקורות והמלצות
                </h2>
                <div className="mt-6 flex flex-col gap-4">
                  {business.reviews.map((review) => (
                    <div
                      key={review.name}
                      className="rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                            {review.name.charAt(0)}
                          </div>
                          <span className="font-medium text-foreground">
                            {review.name}
                          </span>
                        </div>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - 1 col */}
          <aside className="flex flex-col gap-6">
            {/* Contact card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-bold text-foreground">
                פרטי התקשרות
              </h3>
              <div className="mt-4 flex flex-col gap-4">
                {/* Phone */}
                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(140, 25%, 28%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <span dir="ltr">{business.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(140, 25%, 28%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="break-all">{business.email}</span>
                </a>

                {/* Address */}
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(140, 25%, 28%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span>{business.address}</span>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif text-lg font-bold text-foreground">
                ניווט אל העסק
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#33ccff] px-4 py-3 text-sm font-bold text-[hsl(25,30%,12%)] transition-all hover:brightness-110"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.54 6.63c.68 1.27 1.06 2.71 1.06 4.26 0 3.53-2.04 6.29-5.08 7.87.07.52.1 1.07.08 1.59a6.14 6.14 0 01-.18 1.32c-.12.43-.56.68-.99.56a.83.83 0 01-.56-.99c.07-.27.12-.57.15-.87.03-.37.02-.76-.04-1.14a.86.86 0 01.42-.87c2.72-1.4 4.5-3.71 4.5-6.47 0-1.26-.3-2.43-.84-3.46a8.6 8.6 0 00-2.33-2.85 10.18 10.18 0 00-3.37-1.79A11.5 11.5 0 009.35 3.5c-1.34.08-2.62.35-3.77.83a9.17 9.17 0 00-2.96 2.04A6.73 6.73 0 00.97 9.35c-.06.53-.06 1.08 0 1.6.1.84.35 1.63.72 2.35a7.77 7.77 0 001.45 1.96l.25.26a.86.86 0 01.07 1.06l-1.36 2.01c-.24.35-.15.82.2 1.06.13.09.29.14.43.14.24 0 .48-.12.62-.34l1.2-1.77a.87.87 0 011.05-.3c1.35.55 2.85.83 4.38.83a.86.86 0 010 1.72c-1.47 0-2.91-.23-4.24-.67l-.81 1.2a2.56 2.56 0 01-3.53.72 2.56 2.56 0 01-.72-3.53l.92-1.37a9.49 9.49 0 01-1.36-1.92A8.83 8.83 0 01.19 11.3a7.91 7.91 0 01-.01-2.02A8.4 8.4 0 012 5.66a10.85 10.85 0 013.55-2.45A13.2 13.2 0 019.5 2.22c1.52-.1 3.05.08 4.46.52a11.87 11.87 0 013.92 2.1 10.27 10.27 0 012.66 3.29v.5zM8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-6.13 3.5a.86.86 0 00-.66 1.01c.38 1.93 1.88 3.29 3.79 3.29s3.41-1.36 3.79-3.29a.86.86 0 00-1.67-.36c-.23 1.17-1.12 1.93-2.12 1.93s-1.89-.76-2.12-1.93a.86.86 0 00-1.01-.65z" />
                  </svg>
                  נווט עם Waze
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#4285F4] px-4 py-3 text-sm font-bold text-[hsl(40,40%,97%)] transition-all hover:brightness-110"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  נווט עם Google Maps
                </a>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title={`מפה - ${business.name}`}
                src={mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom bar */}
      <footer className="border-t border-border bg-card px-6 py-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            חזרה למרכז העסקים
          </Link>
          <Link
            href="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            דף הבית
          </Link>
        </div>
      </footer>
    </main>
  )
}
