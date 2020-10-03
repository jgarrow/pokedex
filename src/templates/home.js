/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"
import PokemonList from "../components/PokemonList"

const Home = ({ pageContext: { allPokemon } }) => {
  return (
    <Layout>
      <Header showArrow={true} heading="Pokédex" />
      <PokemonList pokemonList={allPokemon} />
    </Layout>
  )
}

export default Home
