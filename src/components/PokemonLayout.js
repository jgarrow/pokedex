/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { Fragment } from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Nav from "../components/PokemonNav"

import pokeball from "../images/pokeball-bg-sm.svg"
import { GiFemale, GiMale } from "react-icons/gi"

import { replaceHyphenWithSpace } from "../utils/stringParsing"

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

const NidoranName = ({ name }) => {
  return (
    <Fragment>
      {name === "nidoran-f" ? (
        <h2
          sx={{
            margin: "0",
            color: "#fefefe",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
          }}
        >
          Nidoran{" "}
          <GiFemale
            sx={{ stroke: "#000", strokeWidth: "20px", fontSize: "1.15rem" }}
          />
        </h2>
      ) : (
        <h2
          sx={{
            margin: "0",
            color: "#fefefe",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            display: "flex",
            alignItems: "center",
          }}
        >
          Nidoran{" "}
          <GiMale
            sx={{ stroke: "#000", strokeWidth: "20px", fontSize: "1.15rem" }}
          />
        </h2>
      )}
    </Fragment>
  )
}

const PokemonLayout = ({ pokemon, children, location }) => {
  const bgColor =
    pokemon.dominant_color &&
    pokemon.dominant_color.light &&
    pokemon.dominant_color.dark
      ? `linear-gradient(135deg, ${pokemon.dominant_color.light}, ${pokemon.dominant_color.dark})`
      : `linear-gradient(135deg, #fefefe, #000000)`

  const idLayout = `pokemon-${pokemon.name}`
  const imgIdLayout = `${pokemon.name}-image`
  const nameIdLayout = `${pokemon.name}-name`

  return (
    <Fragment>
      <motion.div
        layout={true}
        sx={{
          background: bgColor,
          backgroundSize: "100% calc(100vh - 75px)",
          position: "relative",
          width: "100%",
          minHeight: "calc(100vh - 75px)",
          // height: "100%",
          zIndex: 1000,
        }}
      >
        <motion.div layoutId={idLayout}>
          <Header name={pokemon.name} />
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.img
              layout={true}
              // layout={locationChange}
              src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/server/src/img/${pokemon.id}.png`}
              alt={`${pokemon.name}`}
              layoutId={imgIdLayout}
              sx={{
                width: "250px",
                height: "250px",
                // width: "100%",
                // height: "100%",

                position: "relative",
                backgroundImage: `url(${pokeball})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "90%",
                backgroundPosition: "center",
                filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))",
              }}
            />

            {pokemon.name.includes("nidoran") ? (
              <NidoranName name={pokemon.name} />
            ) : (
              <motion.h2
                layoutId={nameIdLayout}
                sx={{
                  margin: "0",
                  color: "#fefefe",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {replaceHyphenWithSpace(pokemon.name)}
              </motion.h2>
            )}

            {pokemon.nat_dex_num ? (
              <p
                sx={{
                  margin: "0.5rem 0",
                  color: "#fefefe",
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                #{pokemon.nat_dex_num}
              </p>
            ) : null}

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
              {pokemon.types && pokemon.types.length
                ? pokemon.types.map((type, index) => (
                    <li
                      key={`type-${pokemon.name}-${index}`}
                      sx={{ listStyle: "none", width: "30px", height: "30px" }}
                    >
                      <TypeIcon pokemonName={pokemon.name} type={type.name} />
                    </li>
                  ))
                : null}
            </ul>

            <p
              // layoutId={`${pokemon.name}-faded-text`}
              sx={{
                position: "absolute",
                top: "0px",
                background:
                  "linear-gradient(180deg, rgba(254, 254, 254, 0.4) 0%, rgba(254, 254, 254, 0.0104167) 85%, rgba(254, 254, 254, 0) 100%)",
                fontSize: "9rem",
                lineHeight: "1",
                margin: 0,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                zIndex: "-1",
              }}
            >
              {pokemon.name.includes("nidoran")
                ? "Nidoran"
                : replaceHyphenWithSpace(pokemon.name)}
            </p>
          </div>

          <Nav name={pokemon.name} textColor={"#fefefe"} location={location} />
        </motion.div>
        <motion.section
          initial={
            location &&
            location.state &&
            location.state.prevPokemon === pokemon.name
              ? { y: 0, opacity: 1 }
              : { y: 200, opacity: 0 }
          }
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.45,
              type: "spring",
              bounce: 0.35,
              duration: 0.4,
            },
          }}
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            display: "grid",
            gridGap: "15px",
            gridTemplateColumns: "1fr",
            padding: "1rem",
            bg: "background",
            height: "auto",
            minHeight: "calc(100vh - 480px + 1rem)",
          }}
        >
          <motion.div
            initial={
              location &&
              location.state &&
              location.state.prevPokemon === pokemon.name
                ? {
                    x: 40,
                    opacity: 0,
                  }
                : {}
            }
            animate={
              location &&
              location.state &&
              location.state.prevPokemon === pokemon.name
                ? {
                    x: 0,
                    opacity: 1,
                    transition: { delay: 0.4 },
                  }
                : {}
            }
          >
            {children}
          </motion.div>
        </motion.section>
      </motion.div>
    </Fragment>
  )
}

export default PokemonLayout
