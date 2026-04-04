import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  type: 'document',
  title: 'Erfarenhet',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Jobbtitel',
      validation: (rule) => rule.required(),
    },
    {
      name: 'company',
      type: 'string',
      title: 'Företag',
      validation: (rule) => rule.required(),
    },
    {
      name: 'startDate',
      type: 'date',
      title: 'Startdatum',
    },
    {
      name: 'endDate',
      type: 'date',
      title: 'Slutdatum',
    },
    {
      name: 'current',
      type: 'boolean',
      title: 'Nuvarande position',
      description: 'Markera om du jobbar här just nu',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivning',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Plats',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Taggar/Färdigheter',
      of: [{type: 'string'}],
    },
  ],
  orderings: [
    {
      title: 'Startdatum, Nyast',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
  ],
})
