import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { activities, getActivityById } from "@/lib/kids-data"
import { ActivityDetail } from "@/components/activity-detail"

export function generateStaticParams() {
  return activities.map((a) => ({ id: a.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const activity = getActivityById(id)
  if (!activity) return { title: "לא נמצא" }
  return {
    title: `${activity.title} | פעילויות | השכנים באבן ספיר`,
    description: activity.shortDescription,
  }
}

export default async function ActivityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const activity = getActivityById(id)
  if (!activity) notFound()
  return <ActivityDetail activity={activity} />
}
