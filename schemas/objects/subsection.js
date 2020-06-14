export default {
    name: 'subsection',
    type: 'object',
    title: 'Subsection',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle'
      },
      {
        name: 'body',
        type: 'content',
        title: 'Body',
        description: 'The written content.'
      },
      {
        name: 'links',
        type: 'array',
        title: 'Links',
        description: 'Links that appear in this section.',
        of: [{
            type: 'link',
        }]
      }
    ]
  }
  