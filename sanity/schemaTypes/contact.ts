import {defineType} from 'sanity' 
export default defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [ 
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name:'address',
      type: 'string',
      title: 'Address',
    },
    {
      name:'freelanceAvailable',
      type: 'boolean',
      title: 'Freelance Available',
      initialValue: false,
    },
    
  ],
})