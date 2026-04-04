import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Portfolio Projekt',
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
      name: 'category',
      type: 'string',
      title: 'Kategori',
      options: {
        list: [
          {title: 'Photo', value: 'photo'},
          {title: 'Video', value: 'video'},
          {title: 'Music', value: 'music'},
          {title: 'Design', value: 'design'},
        ],
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivning',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Projektbild',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'link',
      type: 'url',
      title: 'Projektlänk',
    },
    {
      name: 'liveUrl',
      type: 'url',
      title: 'Live URL',
      description: 'Länk till live-versionen av projektet',
    },
    {
      name: 'githubUrl',
      type: 'url',
      title: 'GitHub URL',
      description: 'Länk till GitHub repository',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Taggar',
      of: [{type: 'string'}],
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Utvald',
      description: 'Markera som utvalt projekt',
      initialValue: false,
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordning',
      description: 'Använd för att sortera projekt',
    },
  ],
  orderings: [
    {
      title: 'Ordning, Stigande',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
