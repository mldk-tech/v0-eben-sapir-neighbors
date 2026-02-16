"use client"

import { useState } from "react"

const bins = [
  {
    id: "green",
    name: "ירוק",
    subtitle: "פסולת רגילה",
    color: "bg-[#2d6a2e]",
    textColor: "text-[#2d6a2e]",
    borderColor: "border-[#2d6a2e]",
    lightBg: "bg-[#2d6a2e]/10",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    ),
    items: [
      "שאריות מזון",
      "מפיות ונייר מלוכלך",
      "שקיות ניילון מלוכלכות",
      "חיתולים ומוצרי היגיינה",
      "אבק ולכלוך מטאטא",
      "סיגריות וגפרורים",
      "חרסינה וכלי חרס שבורים",
      "פסולת שלא ניתנת למיחזור",
    ],
  },
  {
    id: "orange",
    name: "כתום",
    subtitle: "אריזות ופלסטיק",
    color: "bg-[#e87d1e]",
    textColor: "text-[#e87d1e]",
    borderColor: "border-[#e87d1e]",
    lightBg: "bg-[#e87d1e]/10",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    items: [
      "בקבוקי פלסטיק",
      "קופסאות פלסטיק ומעטפות בועות",
      "שקיות ניילון נקיות",
      "פחיות שתייה ושימורים",
      "קרטון חלב ומשקאות",
      "נייר אלומיניום ומגשי אלומיניום",
      "קופסאות קרטון (שטוחות)",
      "אריזות קלקר",
    ],
  },
  {
    id: "blue",
    name: "כחול",
    subtitle: "נייר וקרטון",
    color: "bg-[#1e6eb5]",
    textColor: "text-[#1e6eb5]",
    borderColor: "border-[#1e6eb5]",
    lightBg: "bg-[#1e6eb5]/10",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    items: [
      "עיתונים ומגזינים",
      "דפי נייר ומחברות",
      "מעטפות ודואר",
      "קרטון נקי ויבש",
      "קופסאות קרטון (שטוחות)",
      "שקיות נייר",
      "ספרים ישנים",
      "פליירים ועלונים",
    ],
  },
  {
    id: "purple",
    name: "סגול",
    subtitle: "זכוכית",
    color: "bg-[#6b3fa0]",
    textColor: "text-[#6b3fa0]",
    borderColor: "border-[#6b3fa0]",
    lightBg: "bg-[#6b3fa0]/10",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2h8l4 10H4L8 2z" /><path d="M4 12v6a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-6" />
      </svg>
    ),
    items: [
      "בקבוקי זכוכית",
      "צנצנות זכוכית",
      "כוסות זכוכית שבורות",
      "מכלי זכוכית לשימורים",
    ],
  },
  {
    id: "brown",
    name: "חום",
    subtitle: "פסולת אורגנית",
    color: "bg-[#7a5230]",
    textColor: "text-[#7a5230]",
    borderColor: "border-[#7a5230]",
    lightBg: "bg-[#7a5230]/10",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    items: [
      "קליפות פירות וירקות",
      "שאריות מזון אורגניות",
      "פרחים וצמחים",
      "שבבי עץ ועלים",
      "שקיות תה ומסנני קפה",
      "קליפות ביצים",
    ],
  },
  {
    id: "ewaste",
    name: "פסולת אלקטרונית",
    subtitle: "נקודות איסוף ייעודיות",
    color: "bg-[#444]",
    textColor: "text-[#444]",
    borderColor: "border-[#444]",
    lightBg: "bg-[#444]/10",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 2H8l-2 5h12L16 2z" /><circle cx="12" cy="14" r="2" />
      </svg>
    ),
    items: [
      "מכשירים חשמליים ישנים",
      "סוללות ומצברים",
      "טלפונים ומטענים",
      "מחשבים ואביזרי מחשב",
      "נורות פלורסנט",
      "תרופות פגות תוקף (בית מרקחת)",
    ],
  },
]

export function RecyclingSection() {
  const [activeBin, setActiveBin] = useState("green")
  const active = bins.find((b) => b.id === activeBin) || bins[0]

  return (
    <section id="recycling" className="bg-card py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            איכות הסביבה
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            מיחזור ומיון פסולת
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            מיון נכון שומר על הסביבה שלנו. הנה מדריך קצר לאיזה פח שייך כל סוג פסולת
          </p>
        </div>

        {/* Bin Selector Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {bins.map((bin) => (
            <button
              key={bin.id}
              onClick={() => setActiveBin(bin.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeBin === bin.id
                  ? `${bin.color} text-[hsl(40,40%,97%)] shadow-lg`
                  : "bg-background text-muted-foreground hover:bg-muted"
              }`}
            >
              <span
                className={`inline-block h-3 w-3 rounded-full ${
                  activeBin === bin.id ? "bg-[hsl(40,40%,97%)]/50" : bin.color
                }`}
              />
              {bin.name}
            </button>
          ))}
        </div>

        {/* Active Bin Detail */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-background shadow-sm">
          <div className={`${active.color} px-8 py-6`}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(40,40%,97%)]/20 text-[hsl(40,40%,97%)]">
                {active.icon}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[hsl(40,40%,97%)]">
                  {"פח "}{active.name}
                </h3>
                <p className="text-sm text-[hsl(40,40%,97%)]/80">
                  {active.subtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <p className={`mb-5 text-sm font-semibold ${active.textColor}`}>
              {"מה שמים בפח הזה:"}
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {active.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className={`mt-1.5 block h-2 w-2 flex-shrink-0 rounded-full ${active.color}`} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-background p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8v4" /><path d="M12 16h.01" />
              </svg>
            </div>
            <h4 className="mt-3 font-bold text-foreground">{"שטפו לפני מיחזור"}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {"אריזות ובקבוקים צריכים להיות שטופים ונקיים לפני שמכניסים לפח המיחזור"}
            </p>
          </div>
          <div className="rounded-xl bg-background p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h8" /><path d="M4 18V6" /><path d="M12 18V6" /><path d="M20 18V6" />
              </svg>
            </div>
            <h4 className="mt-3 font-bold text-foreground">{"שטחו קרטונים"}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {"קרטונים וקופסאות יש לשטח לפני השלכה לפח הכחול או הכתום כדי לחסוך מקום"}
            </p>
          </div>
          <div className="rounded-xl bg-background p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <h4 className="mt-3 font-bold text-foreground">{"ימי פינוי"}</h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {"עקבו אחרי עדכוני ימי הפינוי בקבוצה. וודאו שהפחים בחוץ ביום הפינוי"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
