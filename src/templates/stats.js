/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import PokemonLayout from "../components/PokemonLayout"
import Stats from "../components/Stats"

const PokemonStats = ({
  data,
  pageContext: { id, name, dominant_color },
  location,
}) => {
  const pokemon = { ...data.pokeapi.pokemon, name, id, dominant_color }

  return (
    <PokemonLayout
      pokemon={pokemon}
      location={location}
      idLayout={`pokemon-${pokemon.name}-stats`}
      imgIdLayout={`${pokemon.name}-image-moves`}
    >
      <Stats pokemon={pokemon} />
    </PokemonLayout>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonStatsFragment
        ...PokemonBannerFragment
      }
    }
  }
`

export default PokemonStats
