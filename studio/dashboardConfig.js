export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd71e828e742137277b8f26',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-eq36ycp1',
                  apiId: 'b9bf5c7c-90c9-46a2-b0f6-198247177cfc'
                },
                {
                  buildHookId: '5dd71e82998268a6d6bd96c6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jmya85js',
                  apiId: '4d33f5d6-a0fc-4b5e-9ab2-2c14fe36f757'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ncalvin/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jmya85js.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
