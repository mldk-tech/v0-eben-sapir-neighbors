import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { CommunitySection } from "@/components/community-section"
import { GallerySection } from "@/components/gallery-section"
import { PostOfficeSection } from "@/components/post-office-section"
import { RecyclingSection } from "@/components/recycling-section"
import { LandscapeBanner } from "@/components/landscape-banner"
import { RulesSection } from "@/components/rules-section"
import { Footer } from "@/components/footer"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <CommunitySection />
      <GallerySection />
      <PostOfficeSection />
      <RecyclingSection />
      <LandscapeBanner />
      <RulesSection />
      <Footer />
      <WhatsAppFab />
    </main>
  )
}
