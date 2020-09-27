import * as React from "react"
import { AnimatePresence } from "framer-motion"

import PokemonList from "../components/PokemonList"

const Home = ({ pageContext: { allPokemon } }) => {
  console.log("allPokemon: ", allPokemon)
  return (
    <>
      {/* <h1>Welcome to Pokédex!</h1> */}
      <PokemonList pokemonList={allPokemon} />
    </>
  )
}

export default Home
