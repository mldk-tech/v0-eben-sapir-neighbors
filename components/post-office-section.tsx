export function PostOfficeSection() {
  return (
    <section id="post-office" className="bg-background py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            שירותי דואר
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            שעות פתיחת הדואר
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            שעות הפעילות של סניף הדואר במושב אבן ספיר
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Opening Hours Card */}
          <div className="rounded-2xl bg-card p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                שעות פתיחה
              </h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              (את לשירותים)
            </p>
            <div className="mt-6 space-y-0 divide-y divide-border">
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"א' - ב'"}</span>
                <span className="rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  16:30 - 17:15
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"ג' - ד'"}</span>
                <span className="rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  18:00 - 18:45
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"ה' - ו'"}</span>
                <span className="rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  18:00 - 18:45
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"ז' - ח'"}</span>
                <span className="rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  17:30 - 18:15
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"ט'"}</span>
                <span className="rounded-lg bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  19:00 - 19:45
                </span>
              </div>
            </div>
          </div>

          {/* Mail Distribution Card */}
          <div className="rounded-2xl bg-card p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground">
                חלוקת דואר
              </h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              חלוקת דברי דואר לתיבות
            </p>
            <div className="mt-6 space-y-0 divide-y divide-border">
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"ימי א', ד'"}</span>
                <span className="rounded-lg bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
                  17:30 - 18:30
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="font-medium text-foreground">{"יום ה'"}</span>
                <span className="rounded-lg bg-accent/15 px-4 py-1.5 text-sm font-semibold text-accent">
                  17:30 - 18:30
                </span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-primary/5 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-bold text-foreground">שימו לב: </span>
                השעות עשויות להשתנות בחגים ובמועדים מיוחדים. מומלץ לעקוב אחר עדכונים בקבוצה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
