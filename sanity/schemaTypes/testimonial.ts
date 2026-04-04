import {defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Namn',
      validation: (rule) => rule.required(),
    },
    {
      name: 'role',
      type: 'string',
      title: 'Roll/Titel',
      description: 'T.ex. "CEO at Company" eller "Web Designer"',
      validation: (rule) => rule.required(),
    },
    {
      name: 'company',
      type: 'string',
      title: 'Företag',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profilbild',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Citat/Omdöme',
      validation: (rule) => rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Betyg',
      description: 'Betyg från 1-5 stjärnor',
      validation: (rule) => rule.min(1).max(5),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordning',
      description: 'Används för att sortera testimonials',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
