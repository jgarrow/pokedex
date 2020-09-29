import * as React from "react"

import PokemonList from "../components/PokemonList"

const Home = ({ pageContext: { allPokemon } }) => {
  return (
    <>
      {/* <h1>Welcome to Pokédex!</h1> */}
      <PokemonList pokemonList={allPokemon} />
    </>
  )
}

export default Home
