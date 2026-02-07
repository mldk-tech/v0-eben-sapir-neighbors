"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  "הכל",
  "אוכל ושתייה",
  "אירוח ותיירות",
  "אומנות ויצירה",
  "בריאות ורווחה",
  "גינון ונוף",
  "בעלי מקצוע",
]

const businesses = [
  {
    name: "יקב הרי יהודה",
    category: "אוכל ושתייה",
    description:
      "יקב בוטיק משפחתי המייצר יינות איכותיים מענבים שגדלים בטרסות הרי ירושלים.",
    image: "/images/businesses/winery.jpg",
    phone: "050-1234567",
  },
  {
    name: "שמן זית אבן ספיר",
    category: "אוכל ושתייה",
    description:
      "שמן זית כתית מעולה מכבישה קרה, מזיתי המושב. טעימות בתיאום מראש.",
    image: "/images/businesses/olive-oil.jpg",
    phone: "050-2345678",
  },
  {
    name: "דבש הרים",
    category: "אוכל ושתייה",
    description:
      "דבש טבעי מפרחי הבר של הרי יהודה. מגוון טעמים עונתיים וסדנאות דבוראות.",
    image: "/images/businesses/honey.jpg",
    phone: "050-3456789",
  },
  {
    name: "קייטרינג ביתי - טעמי הכפר",
    category: "אוכל ושתייה",
    description:
      "אוכל ביתי לאירועים ומפגשים. מטבח ים תיכוני עם חומרי גלם טריים מהמושב.",
    image: "/images/businesses/catering.jpg",
    phone: "050-4567890",
  },
  {
    name: "צימר נוף ההרים",
    category: "אירוח ותיירות",
    description:
      "צימר רומנטי עם נוף פנורמי לעמק ולהרי ירושלים. ג'קוזי, מרפסת פרטית ושקט מוחלט.",
    image: "/images/businesses/tzimmer.jpg",
    phone: "050-5678901",
  },
  {
    name: "סטודיו קרמיקה - יד ואבן",
    category: "אומנות ויצירה",
    description:
      "סטודיו לקרמיקה וחרסינה. סדנאות יצירה למבוגרים וילדים, מכירת כלים ייחודיים.",
    image: "/images/businesses/ceramics.jpg",
    phone: "050-6789012",
  },
  {
    name: "טיפולי רווחה - נשימת ההר",
    category: "בריאות ורווחה",
    description:
      "עיסויים, רפלקסולוגיה וטיפולים הוליסטיים בסביבה שלווה מול נוף הרי יהודה.",
    image: "/images/businesses/wellness.jpg",
    phone: "050-7890123",
  },
  {
    name: "גני נוף - עיצוב גינות",
    category: "גינון ונוף",
    description:
      "עיצוב ותחזוקת גינות, מומחיות בצמחייה ים-תיכונית ובגינות מותאמות לאקלים ההרים.",
    image: "/images/businesses/garden.jpg",
    phone: "050-8901234",
  },
  {
    name: "נגריית עץ הזית",
    category: "בעלי מקצוע",
    description:
      "נגרות אומן, ריהוט בהתאמה אישית מעצי זית ועצים מקומיים. עבודת יד איכותית.",
    image: "/images/businesses/carpentry.jpg",
    phone: "050-9012345",
  },
]

export function BusinessDirectory() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("הכל")

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const matchesCategory =
        activeCategory === "הכל" || b.category === activeCategory
      const matchesSearch =
        search === "" ||
        b.name.includes(search) ||
        b.category.includes(search) ||
        b.description.includes(search)
      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative bg-[hsl(25,30%,12%)] px-6 pb-12 pt-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent"
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
            חזרה לדף הראשי
          </Link>
          <h1 className="mt-6 font-serif text-4xl font-bold text-[hsl(40,40%,97%)] md:text-5xl">
            מרכז העסקים
          </h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[hsl(33,30%,75%)]">
            העסקים של בעלי המקצוע והיזמים במושב אבן ספיר. תמיכה בכלכלה מקומית
            ובשכנים שלנו.
          </p>

          {/* Search */}
          <div className="mt-8">
            <div className="relative max-w-md">
              <svg
                className="absolute top-1/2 right-4 -translate-y-1/2 text-[hsl(33,30%,60%)]"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="חיפוש לפי שם עסק, סוג, או תיאור..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-[hsl(40,40%,97%)]/15 bg-[hsl(25,30%,18%)] py-3 pr-12 pl-4 text-sm text-[hsl(40,40%,97%)] placeholder-[hsl(33,30%,50%)] outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filters */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Business Grid */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <svg
                className="mx-auto text-muted-foreground"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <p className="mt-4 text-lg font-medium text-muted-foreground">
                לא נמצאו עסקים התואמים את החיפוש
              </p>
              <button
                onClick={() => {
                  setSearch("")
                  setActiveCategory("הכל")
                }}
                className="mt-4 text-sm text-accent underline transition-colors hover:text-accent/80"
              >
                נקו את החיפוש
              </button>
            </div>
          ) : (
            <>
              <p className="mb-8 text-sm text-muted-foreground">
                {filtered.length === businesses.length
                  ? `${businesses.length} עסקים`
                  : `${filtered.length} מתוך ${businesses.length} עסקים`}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((business, index) => (
                  <article
                    key={business.name}
                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={business.image || "/placeholder.svg"}
                        alt={business.name}
                        fill
                        priority={index < 3}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm">
                          {business.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {business.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {business.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-accent">
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
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                        </svg>
                        <span dir="ltr">{business.phone}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer bar */}
      <footer className="border-t border-border bg-card px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          רוצים להוסיף את העסק שלכם?{" "}
          <a
            href="https://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline transition-colors hover:text-accent/80"
          >
            פנו אלינו בקבוצת הוואטסאפ
          </a>
        </p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
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
          חזרה לדף הראשי
        </Link>
      </footer>
    </main>
  )
}
