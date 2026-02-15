import React from "react"
import type { Metadata } from 'next'
import { Heebo, Frank_Ruhl_Libre } from 'next/font/google'

import './globals.css'

const _heebo = Heebo({ subsets: ['hebrew', 'latin'], variable: '--font-heebo' })
const _frank = Frank_Ruhl_Libre({ subsets: ['hebrew', 'latin'], variable: '--font-frank', weight: ['400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'השכנים באבן ספיר | קהילת המושב',
  description: 'אתר קהילתי של קבוצת השכנים במושב אבן ספיר, מטה יהודה. עדכונים, עזרה הדדית, יוזמות משותפות וחיי קהילה.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${_heebo.variable} ${_frank.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
