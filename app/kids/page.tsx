import type { Metadata } from "next"
import { KidsDirectory } from "@/components/kids-directory"

export const metadata: Metadata = {
  title: "פעילויות | השכנים באבן ספיר",
  description: "רעיונות לפעילויות פנאי במושב אבן ספיר - טיולים, יצירה, הרפתקאות ועוד",
}

export default function KidsPage() {
  return <KidsDirectory />
}
