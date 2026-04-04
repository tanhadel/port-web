import {defineType} from 'sanity'

export default defineType({
  name: 'certification',
  type: 'document',
  title: 'Certifikat',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Certifikat Namn',
      validation: (rule) => rule.required(),
    },
    {
      name: 'year',
      type: 'string',
      title: 'År',
      description: 'T.ex. "2023"',
      validation: (rule) => rule.required(),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Sorteringsordning',
      description: 'Lägre nummer visas först',
    },
  ],
})
