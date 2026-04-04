import {defineType} from 'sanity'

export default defineType({
  name: 'client',
  type: 'document',
  title: 'Clients',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Client Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Client Logo',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
  ],
})
