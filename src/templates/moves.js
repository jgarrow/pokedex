import * as React from "react"
import { graphql, Link } from "gatsby"

const Pokemon = ({ data, pageContext: { id } }) => {
  const pokemon = data.pokeapi.pokemon
  console.log(pokemon)

  return (
    <>
      <h1>{pokemon.name}</h1>
      {/* <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
      <Link to={`/pokemon/${pokemon.name}/evolution`}>Evolution</Link> */}
    </>
  )
}

// export const query = graphql`
//   query($id: Int!) {
//     pokeapi {
//       pokemon(id: $id) {
//         ...PokemonMovesFragment
//         ...PokemonBannerFragment
//       }
//     }
//   }
// `

export default Pokemon
