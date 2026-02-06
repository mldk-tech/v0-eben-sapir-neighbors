"use client"

import { useState } from "react"

const doItems = [
  "שמרו על הרלוונטיות - הקפידו שההודעות קשורות לחיים במושב",
  "פרגנו לשכנים - ראיתם גינה יפה? יוזמה מבורכת? תנו מילה טובה!",
  "היו סבלניים - לא כולם מחוברים כל הזמן, תנו זמן לאנשים להגיב",
  'פוליטיקה מושבית - כל עוד הדיון מכבד ולגופו של עניין ולא של אדם',
]

const dontItems = [
  "אין פוליטיקה - נמנעים מכל ויכוח או דיון פוליטי/מפלגתי, יש פלטפורמות אחרות",
  'אין לשון הרע - לא מרכלים, לא מוציאים דיבה ולא נכנסים לעניינים אישיים',
  "אין פרסומות מסחריות - הקבוצה אינה לוח מודעות (עסקים מקומיים בימי ראשון בלבד)",
  "בלי שרשראות וספאם - לא הודעות שרשרת, אזהרות לא מאומתות או תכנים ויראליים",
  "דיונים סוערים - מחלוקת אישית עם שכן? פתרו אותה בפרטי",
]

const conductItems = [
  "שעות הפעילות - לא לשלוח הודעות בין 22:00 ל-7:00, למעט מקרי חירום",
  "פרטיות - המידע והטלפונים בקבוצה לשימוש פנימי בלבד",
  'הודעות תודה - על הודעות כלליות כמו "שבת שלום" אפשר להגיב עם ריאקשן במקום הודעה',
]

type Tab = "do" | "dont" | "conduct"

export function RulesSection() {
  const [activeTab, setActiveTab] = useState<Tab>("do")

  const tabs: { id: Tab; label: string }[] = [
    { id: "do", label: "מה כן" },
    { id: "dont", label: "מה לא" },
    { id: "conduct", label: "כללי התנהלות" },
  ]

  const currentItems =
    activeTab === "do"
      ? doItems
      : activeTab === "dont"
        ? dontItems
        : conductItems

  return (
    <section id="rules" className="bg-primary py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            כללי הקבוצה
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            כדי לשמור על אווירה טובה
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            כמה כללים פשוטים שעוזרים לנו לשמור על קהילה נעימה ויעילה לכולם
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-10 space-y-4">
          {currentItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl bg-primary-foreground/5 p-5 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent">
                {i + 1}
              </div>
              <p className="text-base leading-relaxed text-primary-foreground/90">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
