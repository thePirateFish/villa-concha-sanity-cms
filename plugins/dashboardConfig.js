// Docs
// Netlify Dashboard Widget: https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-netlify
// Gatsby Cloud Preview: https://www.sanity.io/plugins/sanity-plugin-dashboard-widget-gatsby


export default {
    widgets: [
      {
        name: 'project-info'
      },
      {
        name: 'project-users'
      },
      {
        name: 'netlify',
        options: {
          title: 'Villa Concha - Netlify',
          sites: [
            {
              title: 'Villa Concha CMS',
              apiId: '269bcffa-ea4a-4a77-a0df-28633b08163f',
              buildHookId: '5ea8e00db5370a9b495aeb45',
              name: 'villa-concha-cms',
            },
            {
              title: 'Villa Concha',
              apiId: '2805277d-022f-4d91-a711-dea68f0e4fa0',
              buildHookId: '5ebb2183f2f1f9017a4dcfe1',
              name: 'villa-concha'
            }
          ]
        }
      },
      {
        name: 'gatsby',
        options: {
          sites: [
            {
              siteUrl: 'https://villa-concha-6772824217.gtsb.io/',
            }
          ]
        }
      },
      {
        name: 'sanity-tutorials'
      }
    ]
  }