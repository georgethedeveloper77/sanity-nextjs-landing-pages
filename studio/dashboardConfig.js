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
                  buildHookId: '619007ccac6c7794dcc14c1e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o2hz2xd1',
                  apiId: '71f69ecc-3191-44c6-93eb-77209187ebd2'
                },
                {
                  buildHookId: '619007cc77337c808bc65d0b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vi4k3vvp',
                  apiId: '5a56d489-d79e-4406-b7e4-56cbf0537c30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgethedeveloper77/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vi4k3vvp.netlify.app', category: 'apps'}
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
