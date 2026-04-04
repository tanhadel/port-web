import {defineType} from 'sanity'

export default defineType({
  name: 'funFact',
  type: 'document',
  title: 'Fun Facts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'value',
      type: 'string',
      title: 'Value',
      description: 'e.g. 47, 15, 54',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Emoji or icon name',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
  ],
})
