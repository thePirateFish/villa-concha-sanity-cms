
export default {
    name: 'section',
    type: 'object',
    title: 'Section',
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
        name: 'images',
        type: 'array',
        title: 'Images',
        description: 'Images that belong to this section.',
        of: [{type: 'image'}],
      },
      {
        name: 'subsections',
        type: 'array',
        title: 'Subsections',
        description: 'Subsections that belongs to this section.',
        of: [{
            type: 'subsection',
        }]
      },
      {
        name: 'links',
        type: 'array',
        title: 'Links',
        description: 'Links that appear in this section.',
        of: [{
            type: 'link',
        }]
      },
      {
        name: 'coordinates',
        type: 'geopoint',
        title: 'Coordinates'
      }
    ]
  }
  