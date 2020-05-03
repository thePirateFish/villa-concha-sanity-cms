export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ea8e00db5370a9b495aeb45',
                  title: 'Sanity Studio',
                  name: 'villa-concha-cms-studio',
                  apiId: '269bcffa-ea4a-4a77-a0df-28633b08163f'
                },
                {
                  buildHookId: '5ea8e00d8751f097fc9fce42',
                  title: 'Villa Concha CMS',
                  name: 'villa-concha-cms',
                  apiId: 'c69180d0-15ac-4c10-838b-105e751496d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thePirateFish/villa-concha-sanity-cms',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://admin.villa-concha.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ]
}
