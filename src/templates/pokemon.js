/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import About from "../components/About"
import PokemonLayout from "../components/PokemonLayout"
import Layout from "../components/Layout"

const Pokemon = ({
  data,
  pageContext: {
    id,
    name,
    dominant_color,
    allPokemon,
    prevPokemonId, // getting used in the graphql query below
    nextPokemonId, // getting used in the graphql query below
  },
  location,
}) => {
  const pokemon = {
    ...data.pokeapi.pokemon,
    id: id,
    dominant_color: dominant_color,
    name,
  }

  // const prevPokemon = data.pokeapi.prevPokemon
  // const nextPokemon = data.pokeapi.nextPokemon

  return (
    <Layout>
      <PokemonLayout
        pokemon={pokemon}
        location={location}
        idLayout={`pokemon-${pokemon.name}`}
        imgIdLayout={`${pokemon.name}-image`}
        nameIdLayout={`${pokemon.name}-name`}
      >
        <About pokemon={pokemon} />
      </PokemonLayout>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!, $prevPokemonId: Int!, $nextPokemonId: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonFragment
        ...PokemonBannerFragment
      }
      prevPokemon: pokemon(id: $prevPokemonId) {
        id
        name
      }
      nextPokemon: pokemon(id: $nextPokemonId) {
        id
        name
      }
    }
  }
`

export default Pokemon
