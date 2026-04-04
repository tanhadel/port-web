import { client, queries, urlFor } from '@/lib/sanity'
import Hero from '@/components/Hero'

export const revalidate = 60

export default async function Home() {
  try {
    const profile = await client.fetch(queries.profile).catch(() => null)
    
    // Transform image object to URL
    const profileWithImageUrl = profile ? {
      ...profile,
      image: profile.image ? urlFor(profile.image).width(1200).url() : null,
      heroBackground: profile.heroBackground ? urlFor(profile.heroBackground).width(1920).url() : null,
    } : null

    return <Hero profile={profileWithImageUrl} />
  } catch (error) {
    console.error('Error fetching data:', error)
    return <Hero />
  }
}

