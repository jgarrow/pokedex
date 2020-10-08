/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion, AnimatePresence } from "framer-motion"
// import { lightenDarkenColor } from "../utils/colors"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Nav from "../components/PokemonNav"

import pokeball from "../images/pokeball-bg-sm.svg"

const TypeIcon = ({ pokemonName, type }) => {
  const imgSrc = require(`../images/type-icons/${type}_icon_SwSh.png`)
  return (
    <img
      src={imgSrc}
      alt={`${pokemonName}-type-${type}`}
      sx={{ width: "100%" }}
    />
  )
}

const PokemonLayout = ({ pokemon, children, location }) => {
  // const newColor = lightenDarkenColor(pokemon.dominant_color, -60)

  return (
    <Layout>
      <motion.div
        layoutId={`pokemon-${pokemon.name}`}
        sx={{
          background: `linear-gradient(135deg, ${pokemon.dominant_color.light}, ${pokemon.dominant_color.dark} 70vh)`,
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          height: "100%",
          zIndex: 1000,
        }}
      >
        <Header name={pokemon.name} />
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",

            "::after": {
              position: "absolute",
              top: "0px",
              content: `"${
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }"`,
              background:
                "linear-gradient(180deg, rgba(254, 254, 254, 0.4) 0%, rgba(254, 254, 254, 0.0104167) 85%, rgba(254, 254, 254, 0) 100%)",
              fontSize: "9rem",
              lineHeight: "1",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              zIndex: "-1",
            },
          }}
        >
          <div
            // transition={{ duration: 0.4 }}
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
              src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/src/img/${pokemon.id}.png`}
              alt={`${pokemon.name}`}
              layoutId={`${pokemon.name}-image`}
              sx={{
                width: "100%",
                position: "relative",
                backgroundImage: `url(${pokeball})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "90%",
                backgroundPosition: "center",
                filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
          </div>

          <h2 sx={{ margin: "0", color: "black" }}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <p sx={{ margin: "0.5rem 0", color: "black" }}>
            #{pokemon.nat_dex_num}
          </p>

          <ul
            key={`${pokemon.name}-types`}
            sx={{
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent:
                pokemon.types.length > 1 ? "space-between" : "center",
              width: "80px",
              margin: "0",
            }}
          >
            {pokemon.types.map((type, index) => (
              <li
                key={`type-${pokemon.name}-${index}`}
                sx={{ listStyle: "none", width: "30px", height: "30px" }}
              >
                <TypeIcon pokemonName={pokemon.name} type={type.name} />
              </li>
            ))}
          </ul>
        </div>

        <Nav name={pokemon.name} textColor={"black"} location={location} />
        <motion.section
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            display: "grid",
            gridGap: "15px",
            gridTemplateColumns: "1fr",
            padding: "1rem",
            // overflowY: "scroll",
            bg: "background",
            height: "auto",
            minHeight: "calc(100vh - 480px + 1rem)",
          }}
          // initial={{
          //   opacity: 0,
          //   y: 40,
          // }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          //   transition: { delay: 0.5 },
          // }}
        >
          <AnimatePresence>{children}</AnimatePresence>
        </motion.section>
      </motion.div>
    </Layout>
  )
}

export default PokemonLayout
