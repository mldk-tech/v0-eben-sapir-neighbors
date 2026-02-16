import Image from "next/image"
import Link from "next/link"
import type { Activity } from "@/lib/kids-data"

export function ActivityDetail({ activity }: { activity: Activity }) {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image src={activity.image} alt={activity.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[hsl(25,30%,12%)]/60" />
        <div className="relative flex h-full flex-col justify-end px-6 pb-10">
          <div className="mx-auto w-full max-w-4xl">
            <Link href="/kids" className="mb-4 inline-flex items-center gap-2 text-sm text-[hsl(33,30%,80%)] transition-colors hover:text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              {'חזרה לפעילויות'}
            </Link>
            <h1 className="font-serif text-4xl font-bold text-[hsl(40,40%,97%)] md:text-5xl text-balance">{activity.title}</h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent">{activity.category}</span>
              <span className="rounded-full bg-[hsl(40,40%,97%)]/10 px-4 py-1.5 text-sm text-[hsl(40,40%,97%)]">{activity.audience}</span>
              <span className="rounded-full bg-[hsl(40,40%,97%)]/10 px-4 py-1.5 text-sm text-[hsl(40,40%,97%)]">{activity.duration}</span>
              <span className="rounded-full bg-[hsl(40,40%,97%)]/10 px-4 py-1.5 text-sm text-[hsl(40,40%,97%)]">{"רמה: "}{activity.difficulty}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Description */}
        <p className="text-lg leading-relaxed text-muted-foreground">{activity.fullDescription}</p>

        {/* Steps */}
        <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">איך עושים את זה?</h2>
        <div className="mt-8 space-y-6">
          {activity.steps.map((step, i) => (
            <div key={i} className="flex gap-5 rounded-xl bg-card p-6 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">
                {i + 1}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to Bring */}
        <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">מה להביא?</h2>
        <div className="mt-6 rounded-xl bg-card p-6 shadow-sm">
          <ul className="grid gap-3 sm:grid-cols-2">
            {activity.whatToBring.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <h2 className="mt-12 font-serif text-3xl font-bold text-foreground">טיפים</h2>
        <div className="mt-6 space-y-3">
          {activity.tips.map((tip) => (
            <div key={tip} className="flex items-start gap-3 rounded-lg bg-primary/5 p-4">
              <svg className="mt-0.5 shrink-0 text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
              <p className="text-sm leading-relaxed text-foreground">{tip}</p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link href="/kids" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            {'חזרה לכל הפעילויות'}
          </Link>
        </div>
      </div>
    </main>
  )
}
