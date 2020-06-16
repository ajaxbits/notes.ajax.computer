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
