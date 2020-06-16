module.exports = {
  siteMetadata: {
    title: "Alex Jackson's Code Notes",
    description: `A central repo for my notes`,
    author: "Alex Jackson",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        logo: `/static/logo.png`,
        gitRepoContentPath: `https://github.com/beattheprose/code-notes/tree/master/notes/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ajax's Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. My memory bank.`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
  ],
};
