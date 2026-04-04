import {defineType} from 'sanity'

export default defineType({
  name: 'pricingPlan',
  type: 'document',
  title: 'Pricing Plans',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Plan Name',
      description: 'e.g. Basic, Pro, Premium',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (rule) => rule.required(),
    },
    {
      name: 'period',
      type: 'string',
      title: 'Period',
      description: 'e.g. hour, month, year',
      initialValue: 'hour',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Font Awesome icon class or emoji',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Feature Name',
            },
            {
              name: 'included',
              type: 'boolean',
              title: 'Included',
              initialValue: true,
            },
            {
              name: 'isNew',
              type: 'boolean',
              title: 'New Feature',
              initialValue: false,
            },
          ],
        },
      ],
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
      initialValue: 'Buy Now',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
  ],
})
