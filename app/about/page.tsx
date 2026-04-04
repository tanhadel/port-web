import { client, queries, urlFor } from '@/lib/sanity'
import About from '@/components/About'

export const revalidate = 60

export default async function AboutPage() {
  try {
    const [profile, skills, personalSkills, services, pricingPlans, funFacts, clients] = await Promise.all([
      client.fetch(queries.profile),
      client.fetch(queries.skills),
      client.fetch(queries.personalSkills),
      client.fetch(queries.services),
      client.fetch(queries.pricingPlans),
      client.fetch(queries.funFacts),
      client.fetch(queries.clients),
    ])
    
    // Transform image object to URL
    const profileWithImageUrl = profile ? {
      ...profile,
      image: profile.image ? urlFor(profile.image).width(800).url() : null,
    } : null
    
    const cvUrl = profile?.resumeUrl || null
    
    // Transform client logos
    const clientsWithLogos = clients?.map((clientItem: any) => ({
      ...clientItem,
      logo: clientItem.logo ? urlFor(clientItem.logo).width(200).url() : null,
    })) || []

    return <About profile={profileWithImageUrl} skills={skills} personalSkills={personalSkills} services={services} cvUrl={cvUrl} pricingPlans={pricingPlans} funFacts={funFacts} clients={clientsWithLogos} />
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#353535]">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">About</h1>
          <p className="text-[#b8b8b8]">Loading content...</p>
        </div>
      </div>
    )
  }
}
