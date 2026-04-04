import { client, queries } from '@/lib/sanity'
import Resume from '@/components/Resume'

export const revalidate = 60

export default async function ResumePage() {
  try {
    const [experiences, education, certifications, skills, personalSkills] = await Promise.all([
      client.fetch(queries.experiences),
      client.fetch(queries.education),
      client.fetch(queries.certifications),
      client.fetch(queries.skills),
      client.fetch(queries.personalSkills),
    ])

    return <Resume experiences={experiences} education={education} certifications={certifications} skills={skills} personalSkills={personalSkills} />
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#353535]">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
          <p className="text-[#b8b8b8]">Loading content...</p>
        </div>
      </div>
    )
  }
}
