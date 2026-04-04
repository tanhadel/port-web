import { client, queries, urlFor } from '@/lib/sanity'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  try {
    // Fetch the blog post by slug
    const post = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]{
        _id,
        title,
        excerpt,
        content,
        publishedAt,
        readTime,
        category,
        author,
        image,
        gallery,
        tags
      }`,
      { slug }
    )

    if (!post) {
      notFound()
    }

    const imageUrl = post.image ? urlFor(post.image).width(1200).url() : null
    const galleryImages = post.gallery?.map((img: any) => ({
      url: urlFor(img).width(800).url(),
      alt: img.alt || '',
      caption: img.caption || '',
    })) || []

    const formatDate = (dateString: string) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('sv-SE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    return (
      <section id="blog-post" className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section with Background Image */}
        {imageUrl && (
          <div 
            className="relative h-[60vh] lg:h-[70vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-gray-900 dark:to-gray-900"></div>
            
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-16">
              <div className="text-center max-w-4xl mx-auto">
                {/* Category Badge */}
                {post.category && (
                  <div className="mb-4 flex justify-center">
                    <span className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {post.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {post.author && (
                    <div className="flex items-center text-white/90">
                      <User size={18} className="mr-2" />
                      <span>{post.author}</span>
                    </div>
                  )}
                  <div className="flex items-center text-white/90">
                    <Calendar size={18} className="mr-2" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center text-white/90">
                      <Clock size={18} className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 py-16">
          {/* Back Button (if no image) */}
          {!imageUrl && (
            <Link
              href="/blog"
              className="inline-flex items-center text-green-500 hover:text-green-600 mb-8 font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Tillbaka till Blog
            </Link>
          )}

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            {/* Content */}
            {post.content && (
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12 text-gray-800 dark:text-gray-200">
                <PortableText 
                  value={post.content}
                  components={{
                    block: {
                      normal: ({children}) => <p className="mb-6 leading-relaxed text-lg">{children}</p>,
                      h1: ({children}) => <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900 dark:text-white">{children}</h1>,
                      h2: ({children}) => <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white">{children}</h2>,
                      h3: ({children}) => <h3 className="text-2xl font-bold mb-4 mt-6 text-gray-900 dark:text-white">{children}</h3>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-bold text-gray-900 dark:text-white">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      link: ({children, value}) => (
                        <a href={value.href} className="text-green-500 hover:text-green-600 underline" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-inside mb-6 space-y-2">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-inside mb-6 space-y-2">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => <li className="text-lg leading-relaxed">{children}</li>,
                      number: ({children}) => <li className="text-lg leading-relaxed">{children}</li>,
                    },
                  }}
                />
              </div>
            )}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Gallery Images */}
            {galleryImages.length > 0 && (
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryImages.map((img: any, index: number) => (
                    <div key={index} className="group">
                      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img
                          src={img.url}
                          alt={img.alt || `Gallery image ${index + 1}`}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {img.caption && (
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 italic">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/blog"
                className="inline-flex items-center text-green-500 hover:text-green-600 font-medium"
              >
                <ArrowLeft className="mr-2" size={20} />
                Se alla blogginlägg
              </Link>
            </div>
          </article>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching blog post:', error)
    notFound()
  }
}
