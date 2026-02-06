import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { CommunitySection } from "@/components/community-section"
import { GallerySection } from "@/components/gallery-section"
import { LandscapeBanner } from "@/components/landscape-banner"
import { RulesSection } from "@/components/rules-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <CommunitySection />
      <GallerySection />
      <LandscapeBanner />
      <RulesSection />
      <Footer />
    </main>
  )
}
