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

const PokemonLayout = ({
  pokemon,
  children,
  location,
  idLayout,
  imgIdLayout,
}) => {
  const bgColor =
    pokemon.dominant_color &&
    pokemon.dominant_color.light &&
    pokemon.dominant_color.dark
      ? `linear-gradient(135deg, ${pokemon.dominant_color.light}, ${pokemon.dominant_color.dark} 70vh)`
      : `linear-gradient(135deg, #fefefe, #000000)`

  return (
    <Layout>
      <motion.div
        layoutId={idLayout}
        sx={{
          background: bgColor,
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          height: "100%",
          zIndex: 1000,
        }}
      >
        <Header name={pokemon.name} bgColor={pokemon.dominant_color.original} />
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
                pokemon.name.includes("nidoran")
                  ? "Nidoran"
                  : replaceHyphenWithSpace(pokemon.name)
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
              layoutId={imgIdLayout}
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

          {pokemon.name.includes("nidoran") ? (
            <NidoranName name={pokemon.name} />
          ) : (
            <h2
              sx={{
                margin: "0",
                color: "#fefefe",
                textShadow:
                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              }}
            >
              {replaceHyphenWithSpace(pokemon.name)}
            </h2>
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
        </div>

        <Nav name={pokemon.name} textColor={"#fefefe"} location={location} />
        <section
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
          {children}
        </section>
      </motion.div>
    </Layout>
  )
}

export default PokemonLayout
