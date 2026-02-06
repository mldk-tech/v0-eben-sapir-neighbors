export function LandscapeBanner() {
  return (
    <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
      <img
        src="/images/vineyard.jpg"
        alt="כרמים בהרי יהודה בסתיו"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[hsl(25,30%,12%)]/60" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <blockquote className="max-w-3xl font-serif text-3xl font-bold leading-relaxed text-[hsl(40,40%,97%)] md:text-4xl text-balance">
          {'"'}בברכת שכנות טובה וקהילה פורחת{'"'}
        </blockquote>
        <p className="mt-4 text-lg text-[hsl(33,30%,85%)]">
          מושב אבן ספיר, מטה יהודה
        </p>
      </div>
    </section>
  )
}
