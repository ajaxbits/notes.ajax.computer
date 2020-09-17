module.exports = {
  siteMetadata: {
    title: `Alex Jackson's Code Notes`,
    description: `A central repository for all my notes, accessible everywhere`,
    author: "Alex Jackson",
  },
  plugins: [
    {
      resolve: "gatsby-theme-code-notes",
      options: {
        contentPath: "notes",
        basePath: "/",
        showThemeInfo: true,
        showDescriptionInSidebar: true,
        //opensearch
        openSearch: {
          siteUrl: "https://notes.ajax.computer",
        },
      },
    },
  ],
};
