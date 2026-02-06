export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              אודות הקהילה
            </p>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl text-balance">
              ברוכים הבאים לקבוצת השכנים באבן ספיר
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              הקבוצה נועדה לחזק את הקשר בין השכנים, לעדכונים שוטפים, עזרה הדדית
              וטיפוח סביבה נעימה וקהילתית. במושב אבן ספיר ובמטה יהודה.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              מושב אבן ספיר שוכן בלב הרי יהודה, מוקף בכרמים, מטעי זיתים ויערות
              אורנים. כאן, בין הנופים המרהיבים והאוויר הצלול, פורחת קהילה חמה
              ותומכת.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img
                src="/images/lemon-tree.jpg"
                alt="עץ לימון עמוס פירות בגינה באבן ספיר"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-lg">
              <img
                src="/images/olive-tree.jpg"
                alt="עץ זית ועץ לימון בגינה באבן ספיר"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
