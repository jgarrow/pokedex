/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"
import PokemonList from "../components/PokemonList"

const Home = ({ pageContext: { allPokemon } }) => {
  const [searchResults, setSearchResults] = useState([...allPokemon])

  return (
    <Layout setSearchResults={setSearchResults} pokemonList={allPokemon}>
      <Header showArrow={true} heading="Pokédex" />
      <PokemonList pokemonList={searchResults} />
    </Layout>
  )
}

export default Home
