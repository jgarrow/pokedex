/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { motion } from "framer-motion"

import PokemonListCard from "./PokemonListCard"

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
    <Fragment>
      {pokemonList ? (
        <motion.ul
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gridTemplateRows: `repeat(${numRows}, 60px)`,
            gridGap: "1rem",
            padding: "0.5rem",
          }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {pokemonList.map(pokemon => (
            <PokemonListCard
              pokemon={pokemon}
              key={`${pokemon.name}-card`}
              variant={card}
            />
          ))}
        </motion.ul>
      ) : null}
    </Fragment>
  )
}

export default PokemonList
