import {defineType} from 'sanity'

export default defineType({
  name: 'education',
  type: 'document',
  title: 'Utbildning',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Examen/Utbildning',
      validation: (rule) => rule.required(),
    },
    {
      name: 'institution',
      type: 'string',
      title: 'Institution',
      validation: (rule) => rule.required(),
    },
    {
      name: 'year',
      type: 'string',
      title: 'År',
      description: 'T.ex. "2015 - 2018" eller "2020"',
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
  ],
})
