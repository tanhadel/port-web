import { client, queries, urlFor } from '@/lib/sanity'
import Blog from '@/components/Blog'

export const revalidate = 60

export default async function BlogPage() {
  try {
    const blogPosts = await client.fetch(queries.blogPosts)
    
    // Transform image objects to URLs
    const postsWithImageUrls = blogPosts.map((post: any) => ({
      ...post,
      image: post.image ? urlFor(post.image).width(800).url() : null,
      cardImage: post.gallery && post.gallery.length > 0 
        ? urlFor(post.gallery[0]).width(600).url() 
        : post.image 
        ? urlFor(post.image).width(600).url() 
        : null,
    }))

    return <Blog posts={postsWithImageUrls} />
  } catch (error) {
    console.error('Error fetching data:', error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#353535]">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-[#b8b8b8]">Loading content...</p>
        </div>
      </div>
    )
  }
}
