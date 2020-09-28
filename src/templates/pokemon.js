/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"

import Header from "../components/Header"

import styles from "../styles.css"

const Pokemon = ({
  data,
  pageContext: {
    id,
    name,
    dominant_color,
    allPokemon,
    prevPokemonId, // getting used in the graphql query below
    nextPokemonId, // getting used in the graphql query below
  },
}) => {
  const pokemon = {
    ...data.pokeapi.pokemon,
    id: id,
    dominant_color: dominant_color,
    name,
  }

  const prevPokemon = data.pokeapi.prevPokemon
  const nextPokemon = data.pokeapi.nextPokemon
  console.log(pokemon)

  return (
    <motion.div
      layoutId={`pokemon-${pokemon.name}`}
      sx={{
        backgroundColor: dominant_color,
        position: "relative",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      <Header />
      <motion.div
        initial={{ height: "50px", width: "50px" }}
        animate={{ height: "250px", width: "250px" }}
        transition={{ duration: 0.4 }}
        sx={{ position: "relative", margin: "0 auto" }}
      >
        <motion.img
          src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${id}.png`}
          alt={`${pokemon.name}`}
          sx={{ height: "100%", width: "100%", position: "relative" }}
        />
      </motion.div>
    </motion.div>
  )
}

export const query = graphql`
  query($id: Int!, $prevPokemonId: Int!, $nextPokemonId: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonFragment
      }
      prevPokemon: pokemon(id: $prevPokemonId) {
        id
        name
      }
      nextPokemon: pokemon(id: $nextPokemonId) {
        id
        name
      }
    }
  }
`

export default Pokemon
