export function Footer() {
  return (
    <footer id="contact" className="bg-[hsl(25,30%,12%)] py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[hsl(40,40%,97%)]">
              השכנים של אבן ספיר
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(33,30%,70%)]">
              קהילה שכנית חמה בלב הרי יהודה. חיזוק הקשר בין השכנים, עדכונים
              שוטפים, עזרה הדדית וטיפוח סביבה נעימה.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[hsl(40,40%,97%)]">
              ניווט מהיר
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent"
              >
                אודות הקהילה
              </a>
              <a
                href="#community"
                className="text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent"
              >
                מה אנחנו עושים
              </a>
              <a
                href="#gallery"
                className="text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent"
              >
                גלריה
              </a>
              <a
                href="#rules"
                className="text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent"
              >
                כללי הקבוצה
              </a>
            </nav>
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[hsl(40,40%,97%)]">
              מידע
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[hsl(33,30%,70%)]">
              <p>מושב אבן ספיר</p>
              <p>מועצה אזורית מטה יהודה</p>
              <p>הרי ירושלים, ישראל</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[hsl(40,40%,97%)]/10 pt-8 text-center">
          <p className="text-xs text-[hsl(33,30%,60%)]">
            {'כל הזכויות שמורות לקהילת השכנים של אבן ספיר'} &copy;{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
