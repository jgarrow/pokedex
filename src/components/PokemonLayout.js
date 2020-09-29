/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import Header from "../components/Header"
import Nav from "../components/PokemonNav"

import pokeball from "../images/pokeball-bg-sm.svg"

import styles from "../styles.css"

const TypeIcon = ({ pokemonName, type }) => {
  console.log("type: ", type)
  const imgSrc = require(`../images/type-icons/${type}_icon_SwSh.png`)
  return (
    <img
      src={imgSrc}
      alt={`${pokemonName}-type-${type}`}
      sx={{ width: "100%" }}
    />
  )
}

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
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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

        <h2 sx={{ margin: "0" }}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h2>
        <p sx={{ margin: "0.5rem 0" }}>#{pokemon.nat_dex_num}</p>

        <ul
          sx={{
            padding: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80px",
            margin: "0",
          }}
        >
          {pokemon.types.map((type, index) => (
            <li
              key={`type-${pokemon.name}-${index}`}
              sx={{ listStyle: "none", width: "30px", height: "30px" }}
            >
              {/* <p>{type.name}</p> */}
              <TypeIcon pokemonName={pokemon.name} type={type.name} />
            </li>
          ))}
        </ul>
      </div>

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
