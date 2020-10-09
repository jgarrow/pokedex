/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import PokemonLayout from "../components/PokemonLayout"
import PokemonMoves from "../components/Moves"

// TODO -- sorting functionality
// sort alphabetically by name (A-Z, Z-A), by category, by type, by learn method

const Moves = ({
  data,
  pageContext: { id, name, dominant_color },
  location,
}) => {
  const pokemon = { ...data.pokeapi.pokemon, id, name, dominant_color }

  return (
    <PokemonLayout
      pokemon={pokemon}
      location={location}
      idLayout={`pokemon-${pokemon.name}-moves`}
      imgIdLayout={`${pokemon.name}-image-moves`}
    >
      <PokemonMoves pokemon={pokemon} />
    </PokemonLayout>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonMovesFragment
        ...PokemonBannerFragment
      }
    }
  }
`

export default Moves
