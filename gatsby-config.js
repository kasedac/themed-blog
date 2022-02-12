module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `テーマを使ったBlog`,
    author: `kasedac`,
    description: `このサイトはGatsbyのblogテーマのテスト用です`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/kasedac`,
      },
      {
        name: `github`,
        url: `https://github.com/kasedac`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
