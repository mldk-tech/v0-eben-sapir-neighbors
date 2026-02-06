"use client"

import { useState } from "react"

const navLinks = [
  { label: "אודות", href: "#about" },
  { label: "הקהילה", href: "#community" },
  { label: "גלריה", href: "#gallery" },
  { label: "כללי הקבוצה", href: "#rules" },
  { label: "צור קשר", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[hsl(25,30%,12%)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-serif text-xl font-bold text-[hsl(40,40%,97%)]">
          אבן ספיר
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[hsl(33,30%,85%)] transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="text-[hsl(40,40%,97%)] md:hidden"
          aria-label="תפריט"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-[hsl(40,40%,97%)]/10 px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-[hsl(33,30%,85%)] transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
