/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"
import PokemonList from "../components/PokemonList"
import { Search } from "../components/SearchNew"

const Home = ({ pageContext: { allPokemon } }) => {
  const [searchResults, setSearchResults] = useState([...allPokemon])

  return (
    <Layout>
      <Header heading="Pokédex">
        <Search
          setSearchResults={setSearchResults}
          searchResults={searchResults}
          pokemonList={allPokemon}
        />
      </Header>
      <PokemonList pokemonList={searchResults} />
    </Layout>
  )
}

export default Home
