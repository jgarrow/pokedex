/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import { getTiers } from "../utils/getEvolutionTiers"

import Evolution from "../components/Evolution"
import PokemonLayout from "../components/PokemonLayout"

const PokemonEvolution = ({
  data,
  pageContext: { id, name, dominant_color },
  location,
}) => {
  const pokemon = { ...data.pokeapi.pokemon, name, id, dominant_color }
  const tiers = getTiers(pokemon)

  return (
    <PokemonLayout
      pokemon={pokemon}
      location={location}
      idLayout={`pokemon-${pokemon.name}-evolution`}
      imgIdLayout={`${pokemon.name}-image-evolution`}
    >
      <Evolution pokemon={pokemon} evolutionTiers={tiers} />
    </PokemonLayout>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonEvolutionDataFragment
        ...PokemonEvolutionFragment
        ...PokemonBannerFragment
      }
    }
  }
`

export default PokemonEvolution
