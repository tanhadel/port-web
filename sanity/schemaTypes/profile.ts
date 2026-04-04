import {defineType} from 'sanity'

export default defineType({
  name: 'profile',
  type: 'document',
  title: 'Profil',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Namn',
      validation: (rule) => rule.required(),
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      description: 'Din titel eller tagline',
    },
    {
      name: 'roles',
      type: 'array',
      title: 'Roller',
      description: 'Dina roller som visas i animationen (t.ex. "Web Developer", "System Developer")',
      of: [{type: 'string'}],
      validation: (rule) => rule.min(1).max(10),
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      description: 'En kort beskrivning om dig',
    },
    {
      name: 'hobbies',
      type: 'array',
      title: 'Hobbies/Intressen',
      description: 'Dina hobbies och intressen',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profilbild',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logotyp',
      description: 'Ladda upp en logotyp (om tom används första bokstaven i ditt namn)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroBackground',
      type: 'image',
      title: 'Bakgrundsbild för startsidan',
      description: 'Valfri bakgrundsbild för hero-sektionen (om tom används profilbilden)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-post',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Telefon',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Plats',
    },
    {
      name: 'socialLinks',
      type: 'object',
      title: 'Sociala länkar',
      fields: [
        {name: 'github', type: 'url', title: 'GitHub'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'facebook', type: 'url', title: 'Facebook'},
      ],
    },
    {
      name: 'resume',
      type: 'file',
      title: 'CV/Resume (PDF)',
      description: 'Ladda upp din CV som PDF-fil',
      options: {
        accept: '.pdf',
      },
    },
  ],
})
