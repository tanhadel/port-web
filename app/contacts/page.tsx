import { client, queries } from '@/lib/sanity'
import Contact from '@/components/Contact'

export const revalidate = 60

export default async function ContactsPage() {
  try {
    const contactData = await client.fetch(queries.contact)

    return <Contact contactData={contactData} />
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#353535]">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
          <p className="text-[#b8b8b8]">Loading content...</p>
        </div>
      </div>
    )
  }
}
