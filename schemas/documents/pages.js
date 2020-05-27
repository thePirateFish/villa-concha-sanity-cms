export default {
    name: 'pages',
    type: 'document',
    title: 'Pages',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'sections',
        type: 'array',
        title: 'Sections',
        description: 'Sections that appear on this page.',
        of: [{type: 'section'}]
      },
      {
        name: 'video',
        type: 'video',
        title: 'Background Video'
      }
    ]
  }