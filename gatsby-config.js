module.exports = {
  siteMetadata: {
    title: `Pokédex`,
    description: `A Pokédex built with Gatsby, using data from the PokéAPI database`,
    author: `Janessa Garrow`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/JanessaGarrow`,
      },
      {
        name: `github`,
        url: `https://github.com/jgarrow`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Pokeapi`,
        fieldName: `pokeapi`,
        url: `http://localhost:4000/`,
      },
    },
    "gatsby-plugin-theme-ui",
  ],
}
