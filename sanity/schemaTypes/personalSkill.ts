import {defineType} from 'sanity'

export default defineType({
  name: 'personalSkill',
  type: 'document',
  title: 'Personal Skills',
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
          {title: 'Communication', value: 'communication'},
          {title: 'Leadership', value: 'leadership'},
          {title: 'Teamwork', value: 'teamwork'},
          {title: 'Problem Solving', value: 'problem_solving'},
          {title: 'Time Management', value: 'time_management'},
          {title: 'Creativity', value: 'creativity'},
          {title: 'Adaptability', value: 'adaptability'},
          {title: 'Other', value: 'other'},
        ],
      },
    },
    {
      name: 'color',
      type: 'string',
      title: 'Färg',
      description: 'Tailwind gradient klass (t.ex. "from-green-400 to-green-600")',
      initialValue: 'from-green-400 to-green-600',
    },
    {
      name: 'order',
      type: 'number',
      title: 'Ordning',
    },
  ],
})
