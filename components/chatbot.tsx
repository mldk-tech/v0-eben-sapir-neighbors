"use client"

import { useState, useRef, useEffect } from "react"

type Message = {
  id: string
  role: "user" | "bot"
  content: string
  timestamp: Date
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome",
    role: "bot",
    content: "שלום! אני הבוט של השכנים באבן ספיר. איך אפשר לעזור?",
    timestamp: new Date(),
  },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen])

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: getBotResponse(trimmed),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "סגור צ'אט" : "פתח צ'אט"}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl sm:w-[24rem]">
          {/* Header */}
          <div className="flex items-center gap-3 bg-primary px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-primary-foreground">{"השכנים באבן ספיר"}</h3>
              <p className="text-xs text-primary-foreground/70">{"מענה אוטומטי"}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="סגור צ'אט"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3">
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-sm bg-primary text-primary-foreground"
                        : "rounded-bl-sm bg-card text-card-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-bl-sm bg-card px-4 py-3 text-card-foreground">
                    <div className="flex gap-1">
                      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40" style={{ animationDelay: "0ms" }} />
                      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40" style={{ animationDelay: "150ms" }} />
                      <span className="inline-block h-2 w-2 animate-bounce rounded-full bg-muted-foreground/40" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-border bg-background px-3 py-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="כתבו הודעה..."
                rows={1}
                className="max-h-24 min-h-[2.5rem] flex-1 resize-none rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:hover:bg-primary"
                aria-label="שלח הודעה"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes("דואר") || lower.includes("חבילה") || lower.includes("משלוח")) {
    return "שעות פתיחת הדואר:\nא'-ב': 16:30-17:15\nג'-ד': 18:00-18:45\nה'-ו': 18:00-18:45\nז'-ח': 17:30-18:15\nט': 19:00-19:45"
  }
  if (lower.includes("שער") || lower.includes("כניסה") || lower.includes("פתיחה")) {
    return "לפתיחת השער חייגו *6422. אם השער תקול, דווחו בקבוצת הוואטסאפ."
  }
  if (lower.includes("מיחזור") || lower.includes("זבל") || lower.includes("אשפה") || lower.includes("פסולת")) {
    return "נקודת המיחזור נמצאת בכניסה למושב. ניתן למחזר נייר, פלסטיק, זכוכית ואלקטרוניקה. אנא הקפידו על הפרדה נכונה."
  }
  if (lower.includes("וואטסאפ") || lower.includes("קבוצ") || lower.includes("whatsapp")) {
    return "קבוצת הוואטסאפ של השכנים זמינה כאן:\nhttps://chat.whatsapp.com/LJ7yzhXhVPB5Ro02taFe6C"
  }
  if (lower.includes("מזכירות") || lower.includes("טלפון") || lower.includes("ועד")) {
    return "מזכירות המושב: 02-641-2821"
  }
  if (lower.includes("שלום") || lower.includes("היי") || lower.includes("הי") || lower.includes("מה נשמע")) {
    return "שלום! איך אפשר לעזור לך היום?"
  }

  return "לא הצלחתי להבין את השאלה. נסו לשאול על:\n- שעות הדואר\n- השער\n- מיחזור\n- קבוצת הוואטסאפ\n- מזכירות המושב"
}
