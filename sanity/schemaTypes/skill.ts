import {defineType} from 'sanity'

export default defineType({
  name: 'skill',
  type: 'document',
  title: 'Kompetenser',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Kompetens',
      validation: (rule) => rule.required(),
    },
    {
      name: 'level',
      type: 'number',
      title: 'Nivå',
      description: 'Från 0 till 100',
      validation: (rule) => rule.required().min(0).max(100),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Kategori',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Design', value: 'design'},
          {title: 'Personal/Soft Skills', value: 'personal'},
          {title: 'CMS & Headless', value: 'cms_headless'},
          {title: 'Databases', value: 'databases'},
          {title: 'Tools & Workflow', value: 'tools_workflow'},
          {title: 'E-commerce & Payments', value: 'ecommerce_payments'},
        ],
      },
    },    {
      name: 'color',
      type: 'string',
      title: 'Färg',
      description: 'Tailwind gradient klass (t.ex. "from-blue-400 to-blue-600")',
      initialValue: 'from-blue-400 to-blue-600',
    },  ],
})
