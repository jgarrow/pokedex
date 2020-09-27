import * as React from "react"
import { graphql, Link } from "gatsby"

import { getTiers } from "../utils/getEvolutionTiers"

const Pokemon = ({ data, pageContext: { id } }) => {
  const pokemon = data.pokeapi.pokemon
  console.log(pokemon)
  const tiers = getTiers(pokemon)

  console.log("tiers: ", tiers)

  return (
    <>
      <h1>{pokemon.name}</h1>
      <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
      <Link to={`/pokemon/${pokemon.name}/moves`}>Moves</Link>
    </>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonEvolutionDataFragment
        ...PokemonEvolutionFragment
      }
    }
  }
`

export default Pokemon
