import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { navigate } from "gatsby"

const PokemonList = ({ pokemonList }) => {
  console.log("pokemonList.length: ", pokemonList.length)
  const numRows = pokemonList.length / 2

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gridTemplateRows: `repeat(${numRows}, 200px)`,
        gridGap: "1rem",
      }}
    >
      {pokemonList.map((pokemon, index) => (
        <motion.div
          style={{
            backgroundColor: pokemon.dominant_color,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1000,
            boxSizing: "border-box",
            padding: `1rem 0`,
          }}
          onClick={() => navigate(`/pokemon/${pokemon.name}`)}
          key={index}
          layoutId={`pokemon-${pokemon.name}`}
        >
          <motion.div
            style={{
              position: "relative",
              height: "75%",
              width: "75%",
              margin: "0 auto",
            }}
          >
            <motion.img
              src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${pokemon.id}.png`}
              alt={`${pokemon.name}`}
              style={{
                width: "100%",
              }}
            />
          </motion.div>
          <p>{pokemon.name}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default PokemonList
