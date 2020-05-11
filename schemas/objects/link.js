export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
      {
        name: 'text',
        type: 'text',
        title: 'Display Text'
      },
      {
        name: 'dest',
        type: 'text',
        title: 'Link Destination',
        description: 'Where on the page this link goes to.'
      }
    ]
  }
  