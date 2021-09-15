const { path } = require('@vuepress/utils')

module.exports = {
    lang: 'de-DE',
    title: 'unnoticed - der Film',
    description: 'Ein humorvoller studentischer Kurzfilm, der mit Vorurteilen spielt, um auf diese aufmerksam zu machen.',
    theme: path.resolve(__dirname, './theme'),

    themeConfig: {
      logo: 'images/clapperboard-for-numbering-scenes-on-films-svgrepo-com.svg',
      navbar: [
        // NavbarItem
        {
            text: 'Kickstarter',
            link: 'https://www.kickstarter.com/projects/415863944/behind-closed-doors-3',
          },
          {
            text: 'Sponsoren',
            link: '/sponsors/',
          },
          '/team.md'
      ],
      sidebar: false,
      contributors: false,
      lastUpdated: false
    },
  }
