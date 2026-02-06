const galleryImages = [
  {
    src: "/images/img-20250722-183648.jpg",
    alt: "נוף פנורמי של מושב אבן ספיר בשקיעה",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/vineyard.jpg",
    alt: "כרמים בסתיו בהרי יהודה",
    span: "",
  },
  {
    src: "/images/lemon-tree.jpg",
    alt: "עץ לימון עמוס פירות",
    span: "",
  },
  {
    src: "/images/pine-view.jpg",
    alt: "מושב אבן ספיר מבעד לעצי אורן",
    span: "md:col-span-2",
  },
  {
    src: "/images/moshav-view.jpg",
    alt: "מושב אבן ספיר מרחוק ביום חורפי",
    span: "",
  },
  {
    src: "/images/img-20251114-071014.jpg",
    alt: "קשת בענן מעל הרי ירושלים",
    span: "",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            גלריה
          </p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            הנופים שלנו
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            מבטים מרהיבים מהמושב והסביבה - כרמים, יערות, שקיעות וקשתות
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[250px]">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`group overflow-hidden rounded-xl ${img.span}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
