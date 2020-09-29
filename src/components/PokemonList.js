/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { motion } from "framer-motion"
import { Link, navigate } from "gatsby"

import pokeball from "../images/pokeball-bg-sm.svg"

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
          {pokemonList.map(pokemon => (
            <Link
              to={`/pokemon/${pokemon.name}`}
              key={`${pokemon.name}-card`}
              sx={{ textDecoration: "none" }}
            >
              <motion.li
                id={`${pokemon.name}`}
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
                // key={index}
                layoutId={`pokemon-${pokemon.name}`}
                variants={card}
                aria-label={`Link to ${pokemon.name}'s page`}
              >
                <motion.div
                  sx={{
                    position: "relative",
                    height: "75%",
                    width: "75%",
                    maxWidth: "200px",
                    maxHeight: "200px",
                    margin: "0 auto",
                  }}
                >
                  <motion.img
                    src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${pokemon.id}.png`}
                    alt={`${pokemon.name}`}
                    layoutId={`${pokemon.name}-image`}
                    sx={{
                      width: "100%",
                      backgroundImage: `url(${pokeball})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "80%",
                      backgroundPosition: "center",
                    }}
                  />
                </motion.div>
                <p sx={{ textDecoration: "none", color: "text" }}>
                  {pokemon.name}
                </p>
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      ) : null}
    </>
  )
}

export default PokemonList
