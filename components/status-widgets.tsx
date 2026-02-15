"use client"

import { useState, useEffect } from "react"

const postOfficeSchedule: Record<number, { open: string; close: string } | null> = {
  0: { open: "16:30", close: "17:15" },
  1: { open: "16:30", close: "17:15" },
  2: { open: "18:00", close: "18:45" },
  3: { open: "18:00", close: "18:45" },
  4: { open: "18:00", close: "18:45" },
  5: { open: "18:00", close: "18:45" },
  6: null,
}

function getIsraelTime() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jerusalem" }))
}

function isPostOfficeOpen(): { isOpen: boolean; hours: string; nextOpen: string } {
  const now = getIsraelTime()
  const day = now.getDay()
  const schedule = postOfficeSchedule[day]

  if (!schedule) {
    return { isOpen: false, hours: "", nextOpen: "יום ראשון 16:30" }
  }

  const [openH, openM] = schedule.open.split(":").map(Number)
  const [closeH, closeM] = schedule.close.split(":").map(Number)
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const openMinutes = openH * 60 + openM
  const closeMinutes = closeH * 60 + closeM

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return { isOpen: true, hours: `${schedule.open} - ${schedule.close}`, nextOpen: "" }
  }

  if (currentMinutes < openMinutes) {
    return { isOpen: false, hours: `${schedule.open} - ${schedule.close}`, nextOpen: `היום ${schedule.open}` }
  }

  const nextDay = (day + 1) % 7
  const nextSchedule = postOfficeSchedule[nextDay]
  const dayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]
  const nextOpen = nextSchedule ? `יום ${dayNames[nextDay]} ${nextSchedule.open}` : "יום ראשון 16:30"

  return { isOpen: false, hours: "", nextOpen }
}

export function StatusWidgets() {
  const [postStatus, setPostStatus] = useState({ isOpen: false, hours: "", nextOpen: "" })
  const [gateOk, setGateOk] = useState(true)

  useEffect(() => {
    setPostStatus(isPostOfficeOpen())
    const interval = setInterval(() => setPostStatus(isPostOfficeOpen()), 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-card px-6 py-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row">
        {/* Post Office Status */}
        <div className={`flex flex-1 items-center gap-4 rounded-xl p-5 ${postStatus.isOpen ? "bg-[#166534]/10 border border-[#166534]/20" : "bg-destructive/5 border border-destructive/15"}`}>
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${postStatus.isOpen ? "bg-[#166534]/15" : "bg-destructive/10"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={postStatus.isOpen ? "#166534" : "hsl(0,84%,60%)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-foreground">הדואר היום</p>
            {postStatus.isOpen ? (
              <p className="text-sm text-[#166534] font-semibold">
                {"פתוח "}{postStatus.hours}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                {"סגור"}{postStatus.nextOpen ? ` \u00B7 פתיחה הבאה: ${postStatus.nextOpen}` : ""}
              </p>
            )}
          </div>
        </div>

        {/* Gate Status */}
        <div className={`flex flex-1 items-center gap-4 rounded-xl p-5 ${gateOk ? "bg-[#166534]/10 border border-[#166534]/20" : "bg-destructive/5 border border-destructive/15"}`}>
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${gateOk ? "bg-[#166534]/15" : "bg-destructive/10"}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={gateOk ? "#166534" : "hsl(0,84%,60%)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 12h18" />
              <path d="M12 3v18" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-foreground">השער</p>
            <p className={`text-sm font-semibold ${gateOk ? "text-[#166534]" : "text-destructive"}`}>
              {gateOk ? "תקין" : "תקול"}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="tel:*6422"
              className="rounded-lg bg-primary/10 px-3 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
              title="חיוג לפתיחת שער"
            >
              *6422
            </a>
            <button
              onClick={() => setGateOk(!gateOk)}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${gateOk ? "bg-destructive/10 text-destructive hover:bg-destructive/20" : "bg-[#166534]/10 text-[#166534] hover:bg-[#166534]/20"}`}
            >
              {gateOk ? "דווח תקלה" : "תוקן"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
