import {createClient} from 'next-sanity'
import {createImageUrlBuilder} from '@sanity/image-url'
import contact from '@/sanity/schemaTypes/contact'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-13',
  useCdn: false, // Disable CDN to see changes immediately
  token: process.env.SANITY_API_TOKEN,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  profile: `*[_type == "profile"][0]{
    _id,
    name,
    tagline,
    roles,
    bio,
    hobbies,
    image,
    logo,
    heroBackground,
    email,
    phone,
    location,
    socialLinks,
    "resumeUrl": resume.asset->url
  }`,
  
  projects: `*[_type == "project"] | order(order asc){
    _id,
    title,
    slug,
    category,
    description,
    image,
    link,
    githubUrl,
    liveUrl,
    featured,
    tags,
    order
  }`,
  
  blogPosts: `*[_type == "blogPost"] | order(featured desc, publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    image,
    gallery,
    content,
    publishedAt,
    author,
    readTime,
    category,
    tags,
    featured,
    "date": publishedAt
  }`,
  
  services: `*[_type == "service"] | order(order asc){
    _id,
    title,
    icon,
    description,
    order
  }`,
  
  experiences: `*[_type == "experience"] | order(startDate desc){
    _id,
    title,
    company,
    startDate,
    endDate,
    current,
    description,
    location,
    tags,
    "period": startDate + " - " + select(current == true => "Present", endDate)
  }`,
  
  education: `*[_type == "education"] | order(year desc){
    _id,
    title,
    institution,
    year,
    description,
    location,
    "degree": title,
    "period": year
  }`,
  
  skills: `*[_type == "skill"] | order(category asc, level desc){
    _id,
    name,
    level,
    category,
    color,
    "percentage": level
  }`,
  
  personalSkills: `*[_type == "personalSkill"] | order(category asc, order asc, level desc){
    _id,
    name,
    level,
    category,
    color,
    "percentage": level
  }`,
  
  certifications: `*[_type == "certification"] | order(order asc){
    _id,
    name,
    year,
    order
  }`,
  
  pricingPlans: `*[_type == "pricingPlan"] | order(order asc){
    _id,
    name,
    price,
    period,
    icon,
    features,
    buttonText,
    order
  }`,
  
  funFacts: `*[_type == "funFact"] | order(order asc){
    _id,
    title,
    value,
    icon,
    order
  }`,
  
  clients: `*[_type == "client"] | order(order asc){
    _id,
    name,
    logo,
    order
  }`,
  contact:`*[_type =="contact"][0]{
    _id,
    email,
    phone,
    location,
    address,
    freelanceAvailable
  }`,
}
