/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import Header from "../components/Header"
import Nav from "../components/PokemonNav"

import pokeball from "../images/pokeball-bg-sm.svg"

import styles from "../styles.css"

const PokemonLayout = ({ pokemon, children }) => {
  return (
    <motion.div
      layoutId={`pokemon-${pokemon.name}`}
      sx={{
        backgroundColor: pokemon.dominant_color,
        position: "relative",
        width: "100%",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      <Header name={pokemon.name} />
      <motion.div
        transition={{ duration: 0.4 }}
        sx={{
          height: "75%",
          width: "75%",
          maxWidth: "250px",
          maxHeight: "250px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <motion.img
          src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${pokemon.id}.png`}
          alt={`${pokemon.name}`}
          layoutId={`${pokemon.name}-image`}
          sx={{
            width: "100%",
            position: "relative",
            backgroundImage: `url(${pokeball})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "80%",
            backgroundPosition: "center",
          }}
        />
      </motion.div>

      <Nav name={pokemon.name} />
      <motion.section
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          display: "grid",
          gridGap: "15px",
          gridTemplateColumns: "1fr",
          padding: "1rem",
          overflowY: "scroll",
          bg: "background",
        }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.5 },
        }}
      >
        {children}
      </motion.section>
    </motion.div>
  )
}

export default PokemonLayout
