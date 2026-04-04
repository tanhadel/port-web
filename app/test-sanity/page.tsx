import { client, queries } from '@/lib/sanity'

export default async function TestPage() {
  const profile = await client.fetch(queries.profile)
  const projects = await client.fetch(queries.projects)
  const skills = await client.fetch(queries.skills)
  const experiences = await client.fetch(queries.experiences)
  const education = await client.fetch(queries.education)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Sanity Data Test</h1>
      
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Profile Data</h2>
          <pre className="overflow-auto text-xs">{JSON.stringify(profile, null, 2)}</pre>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Projects ({projects?.length || 0})</h2>
          <pre className="overflow-auto text-xs">{JSON.stringify(projects, null, 2)}</pre>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills ({skills?.length || 0})</h2>
          <pre className="overflow-auto text-xs">{JSON.stringify(skills, null, 2)}</pre>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">Experiences ({experiences?.length || 0})</h2>
          <pre className="overflow-auto text-xs">{JSON.stringify(experiences, null, 2)}</pre>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Education ({education?.length || 0})</h2>
          <pre className="overflow-auto text-xs">{JSON.stringify(education, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
