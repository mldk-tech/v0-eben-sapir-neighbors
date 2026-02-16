"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "אודות", href: "#about" },
  { label: "קהילה", href: "#community" },
  { label: "דואר", href: "#post-office" },
  { label: "מיחזור", href: "#recycling" },
  { label: "כללים", href: "#rules" },
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
          <Link href="/businesses" className="text-sm text-[hsl(33,30%,85%)] transition-colors hover:text-accent">
            עסקים
          </Link>
          <Link href="/kids" className="text-sm text-[hsl(33,30%,85%)] transition-colors hover:text-accent">
            פעילויות
          </Link>
          <a href="https://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C?mode=gi_t" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#20bd5a]">
            וואטסאפ
          </a>
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
          <Link href="/businesses" onClick={() => setOpen(false)} className="block py-3 text-sm text-[hsl(33,30%,85%)] transition-colors hover:text-accent">
            עסקים
          </Link>
          <Link href="/kids" onClick={() => setOpen(false)} className="block py-3 text-sm text-[hsl(33,30%,85%)] transition-colors hover:text-accent">
            פעילויות
          </Link>
          <a href="https://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C?mode=gi_t" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex w-fit rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white">
            וואטסאפ
          </a>
        </div>
      )}
    </nav>
  )
}
