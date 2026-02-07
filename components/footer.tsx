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
              <a
                href="/businesses"
                className="text-sm text-[hsl(33,30%,70%)] transition-colors hover:text-accent"
              >
                מרכז העסקים
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
            <a
              href="https://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#20bd5a]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              קבוצת הוואטסאפ
            </a>
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
