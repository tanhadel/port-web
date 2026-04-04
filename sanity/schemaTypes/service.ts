import {defineType} from 'sanity'

export default defineType({
  name: 'service',
  type: 'document',
  title: 'Tjänster',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Ikon',
      description: 'Font Awesome ikon-klass (t.ex. fa-code)',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivning',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordning',
    },
  ],
})
