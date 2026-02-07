import type { Metadata } from "next"
import { BusinessDirectory } from "@/components/business-directory"

export const metadata: Metadata = {
  title: "מרכז העסקים | השכנים של אבן ספיר",
  description:
    "מרכז העסקים של מושב אבן ספיר - עסקים מקומיים, בעלי מקצוע ושירותים מהמושב והסביבה.",
}

export default function BusinessesPage() {
  return <BusinessDirectory />
}
