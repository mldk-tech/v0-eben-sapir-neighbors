import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getBusinessBySlug, getAllBusinessSlugs } from "@/lib/businesses-data"
import { BusinessDetail } from "@/components/business-detail"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBusinessSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const business = getBusinessBySlug(slug)
  if (!business) return { title: "עסק לא נמצא" }
  return {
    title: `${business.name} | מרכז העסקים - אבן ספיר`,
    description: business.description,
  }
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params
  const business = getBusinessBySlug(slug)
  if (!business) notFound()
  return <BusinessDetail business={business} />
}
