/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { motion } from "framer-motion"

import PokemonListCard from "./PokemonListCard"
import { List } from "./List"

// const container = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.1, // takes too long to do it for every card
//     },
//   },
// }

// const card = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// }

const ListCard = ({ key, item: pokemon, style }) => {
  return <PokemonListCard key={key} pokemon={pokemon} style={style} />
}

const PokemonList = ({ pokemonList }) => (
  <Fragment>
    <List
      columns={2}
      data={pokemonList}
      height="100%"
      itemHeight={76}
      width="100%"
      outerElementType={motion.ul}
      sx={{
        padding: "0 0.5rem",
        marginTop: "0",
      }}
    >
      {ListCard}
    </List>
  </Fragment>
)

export default PokemonList
