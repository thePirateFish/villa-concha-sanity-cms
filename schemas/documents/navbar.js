export default {
    name: 'navbar',
    type: 'document',
    title: 'Navigation Bar',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'logo',
        type: 'image',
        title: 'Logo'
      },
      {
        name: 'links',
        type: 'array',
        title: 'Links',
        description: 'Links that will be displayed on the navigation bar.',
        of: [{type: 'link'}]
      }
    ]
  }
  