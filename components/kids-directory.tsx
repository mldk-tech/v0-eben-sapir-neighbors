"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { activities, activityCategories } from "@/lib/kids-data"

export function KidsDirectory() {
  const [activeCategory, setActiveCategory] = useState("הכל")

  const filtered = useMemo(() => {
    return activities.filter((a) => activeCategory === "הכל" || a.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-background">
      <header className="relative bg-[hsl(25,30%,12%)] px-6 pb-12 pt-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            חזרה לדף הראשי
          </Link>
          <h1 className="mt-6 font-serif text-4xl font-bold text-[hsl(40,40%,97%)] md:text-5xl">פעילויות</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[hsl(33,30%,75%)]">
            רעיונות לבילוי בשעות הפנאי עם המשפחה, חברים או פעילות עצמאית באזור מושב אבן ספיר.
          </p>
        </div>
      </header>

      <div className="sticky top-0 z-40 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
          {activityCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-8 text-sm text-muted-foreground">{filtered.length} פעילויות</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((activity, i) => (
              <Link key={activity.id} href={`/kids/${activity.id}`} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-52 overflow-hidden">
                  <Image src={activity.image} alt={activity.title} fill priority={i < 3} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">{activity.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-foreground">{activity.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{activity.shortDescription}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                      {activity.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                      {activity.audience}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          {"יש רעיון לפעילות נוספת? "}
          <a href="https://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C?mode=gi_t" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline transition-colors hover:text-accent/80">
            שתפו בקבוצת הוואטסאפ
          </a>
        </p>
        <Link href="/" className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          חזרה לדף הראשי
        </Link>
      </footer>
    </main>
  )
}
