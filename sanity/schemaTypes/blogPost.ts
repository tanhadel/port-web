import {defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  type: 'document',
  title: 'Blogginlägg',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Utdrag',
      description: 'Kort beskrivning av inlägget',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Huvudbild',
      description: 'Huvudbilden som visas i listningen och högst upp i artikeln',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Bildgalleri',
      description: 'Ytterligare bilder för artikeln',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt-text',
              description: 'Beskrivning av bilden för tillgänglighet',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Bildtext',
              description: 'Valfri bildtext som visas under bilden',
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Innehåll',
      of: [{type: 'block'}],
    },
    {
      name: 'author',
      type: 'string',
      title: 'Författare',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Kategori',
      options: {
        list: [
          {title: 'Teknologi', value: 'Technology'},
          {title: 'Design', value: 'Design'},
          {title: 'Backend', value: 'Backend'},
          {title: 'Frontend', value: 'Frontend'},
        ],
      },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Taggar',
      of: [{type: 'string'}],
    },
    {
      name: 'readTime',
      type: 'string',
      title: 'Lästid',
      description: 't.ex. "5 min read"',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publiceringsdatum',
      validation: (rule) => rule.required(),
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Utvalt inlägg',
      description: 'Markera som utvalt blogginlägg för att visa i featured-sektionen',
      initialValue: false,
    },
  ],
  orderings: [
    {
      title: 'Publiceringsdatum, Nyast',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
