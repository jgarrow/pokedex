/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import { getTiers } from "../utils/getEvolutionTiers"

// import Header from "../components/Header"
// import Nav from "../components/PokemonNav"
import Evolution from "../components/Evolution"
import PokemonLayout from "../components/PokemonLayout"

// import pokeball from "../images/pokeball-bg-sm.svg"

// import styles from "../styles.css"

const PokemonEvolution = ({
  data,
  pageContext: { id, name, dominant_color },
}) => {
  const pokemon = { ...data.pokeapi.pokemon, name, id, dominant_color }
  console.log(pokemon)
  const tiers = getTiers(pokemon)

  return (
    <PokemonLayout pokemon={pokemon}>
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
