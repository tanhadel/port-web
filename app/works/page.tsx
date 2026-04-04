import { client, queries, urlFor } from '@/lib/sanity'
import Portfolio from '@/components/Portfolio'

export const revalidate = 60

export default async function WorksPage() {
  try {
    const [projects, profile] = await Promise.all([
      client.fetch(queries.projects),
      client.fetch(queries.profile)
    ])
    
    // Transform image objects to URLs
    const projectsWithImageUrls = projects.map((project: any) => ({
      ...project,
      image: project.image ? urlFor(project.image).width(800).url() : undefined,
    }))

    // Get hero image from profile (use heroBackground if available, otherwise use profile image)
    const heroImage = profile?.heroBackground 
      ? urlFor(profile.heroBackground).width(1200).height(1600).url()
      : profile?.image 
      ? urlFor(profile.image).width(1200).height(1600).url()
      : undefined

    return <Portfolio projects={projectsWithImageUrls} heroImage={heroImage} />
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#353535]">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-[#b8b8b8]">Loading content...</p>
        </div>
      </div>
    )
  }
}
