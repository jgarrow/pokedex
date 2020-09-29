const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      pokeapi {
        allPokemon(limit: 10) {
          id
          name
          dominant_color
        }
      }
    }
  `)

  createPage({
    path: "/pokemon",
    component: path.resolve(`./src/templates/home.js`),
    context: {
      allPokemon: result.data.pokeapi.allPokemon,
    },
  })

  // create individual pokemon pages
  result.data.pokeapi.allPokemon.forEach(pokemon => {
    const slug = `pokemon/${pokemon.name}`

    // want to exclude alternate forms for the home page
    const prevId = pokemon.id - 1 > 0 ? pokemon.id - 1 : 893 // Zarude is the last pokemon w/ id of 893
    const nextId = pokemon.id + 1 <= 893 ? pokemon.id + 1 : 1

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/pokemon.js`),
      context: {
        id: pokemon.id,
        name: pokemon.name,
        dominant_color: pokemon.dominant_color,
        prevPokemonId: prevId,
        nextPokemonId: nextId,
        allPokemon: result.data.pokeapi.allPokemon,
      },
    })

    createPage({
      path: `${slug}/stats`,
      component: path.resolve(`./src/templates/stats.js`),
      context: {
        id: pokemon.id,
        name: pokemon.name,
        dominant_color: pokemon.dominant_color,
      },
    })

    createPage({
      path: `${slug}/evolution`,
      component: path.resolve(`./src/templates/evolution.js`),
      context: {
        id: pokemon.id,
        name: pokemon.name,
        dominant_color: pokemon.dominant_color,
      },
    })

    createPage({
      path: `${slug}/moves`,
      component: path.resolve(`./src/templates/moves.js`),
      context: {
        id: pokemon.id,
        name: pokemon.name,
        dominant_color: pokemon.dominant_color,
      },
    })
  })
}
