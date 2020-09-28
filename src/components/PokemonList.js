/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { motion } from "framer-motion"
import { navigate } from "gatsby"

import pokeball from "../images/pokeball-bg.svg"

import styles from "../styles.css"

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
}

const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const PokemonList = ({ pokemonList }) => {
  const numRows = pokemonList.length / 2

  return (
    <>
      {pokemonList ? (
        <motion.ul
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gridTemplateRows: `repeat(${numRows}, 200px)`,
            gridGap: "1rem",
            padding: "0.5rem",
          }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {pokemonList.map((pokemon, index) => (
            <motion.li
              sx={{
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
                borderRadius: "8px",
                listStyle: "none",
              }}
              onClick={() => navigate(`/pokemon/${pokemon.name}`)}
              key={index}
              layoutId={`pokemon-${pokemon.name}`}
              variants={card}
            >
              <motion.div
                sx={{
                  position: "relative",
                  height: "75%",
                  width: "75%",
                  maxWidth: "200px",
                  maxHeight: "200px",
                  margin: "0 auto",
                  backgroundImage: `url(${pokeball})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "90%",
                  backgroundPosition: "center",
                }}
              >
                <motion.img
                  src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${pokemon.id}.png`}
                  alt={`${pokemon.name}`}
                  sx={{
                    width: "100%",
                  }}
                />
              </motion.div>
              <p>{pokemon.name}</p>
            </motion.li>
          ))}
        </motion.ul>
      ) : null}
    </>
  )
}

export default PokemonList
