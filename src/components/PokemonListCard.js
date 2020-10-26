/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link, navigate } from "gatsby"
import { motion } from "framer-motion"
import { Fragment } from "react"

import pokeball from "../images/pokeball-bg-sm.svg"
import { GiMale, GiFemale } from "react-icons/gi"

import { replaceHyphenWithSpace } from "../utils/stringParsing"

const nameStyles = {
  textDecoration: "none",
  color: "#fefefe",
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
  margin: "0",
  marginLeft: "4px",
  letterSpacing: "1px",
  fontSize: "1.1rem",
}

const NidoranName = ({ name }) => {
  return (
    <Fragment>
      {name === "nidoran-f" ? (
        <p sx={{ ...nameStyles, display: "flex", alignItems: "center" }}>
          Nidoran{" "}
          <GiFemale
            sx={{
              stroke: "#000",
              strokeWidth: "20px",
              fontSize: "1.15rem",
            }}
          />
        </p>
      ) : (
        <p sx={{ ...nameStyles, display: "flex", alignItems: "center" }}>
          Nidoran{" "}
          <GiMale
            sx={{
              stroke: "#000",
              strokeWidth: "20px",
              fontSize: "1.15rem",
            }}
          />
        </p>
      )}
    </Fragment>
  )
}

// Probably can delete most of this one
const PokemonListCardOld = ({ pokemon, variant, style, ...rest }) => {
  const bgColor =
    pokemon.dominant_color &&
    pokemon.dominant_color.light &&
    pokemon.dominant_color.dark
      ? `linear-gradient(135deg, ${pokemon.dominant_color.light}, ${pokemon.dominant_color.dark})`
      : `linear-gradient(135deg, #fefefe, #000000)`

  return (
    <li
      // <motion.li
      id={`${pokemon.name}`}
      layoutId={`pokemon-${pokemon.name}`}
      // variants={variant}
      // sx={{
      //   listStyle: "none" }}
      {...rest}
    >
      <Link
        // layoutId={`pokemon-${pokemon.name}`}
        to={`/pokemon/${pokemon.name}`}
        sx={{
          textDecoration: "none",
          background: bgColor,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          boxSizing: "border-box",
          padding: `1rem 0`,
          paddingLeft: "4px",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* <div
            sx={{
              position: "relative",
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <motion.img
              src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/server/src/img/${pokemon.id}.png`}
              alt={`${pokemon.name}`}
              layoutId={`${pokemon.name}-image`}
              sx={{
                width: "45px",
                height: "45px",
                backgroundImage: `url(${pokeball})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "90%",
                backgroundPosition: "center",
                filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
          </div> */}
          {pokemon.name.includes("nidoran") ? (
            <NidoranName name={pokemon.name} />
          ) : (
            <motion.p layoutId={`${pokemon.name}-name`} sx={nameStyles}>
              {replaceHyphenWithSpace(pokemon.name)}
            </motion.p>
          )}
        </div>
        <motion.p
          layout={true}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          }}
          sx={{
            position: "absolute",
            right: "4px",
            color: "rgb(254 254 254 / 0.3)",
            fontSize: "64px",
            margin: "0",
          }}
        >
          {pokemon.nat_dex_num}
        </motion.p>
      </Link>
      {/* </motion.li> */}
    </li>
  )
}

const PokemonListCard = ({ pokemon, variant, style, ...rest }) => {
  const bgColor =
    pokemon.dominant_color &&
    pokemon.dominant_color.light &&
    pokemon.dominant_color.dark
      ? `linear-gradient(135deg, ${pokemon.dominant_color.light}, ${pokemon.dominant_color.dark})`
      : `linear-gradient(135deg, #fefefe, #000000)`

  return (
    <motion.li
      layoutId={`pokemon-${pokemon.name}`}
      sx={{
        ...style,
        background: bgColor,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        boxSizing: "border-box",
        padding: `1rem 0`,
        paddingLeft: "4px",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        marginBottom: "1rem",
      }}
      onClick={() => navigate(`/pokemon/${pokemon.name}`)}
      {...rest}
    >
      <Link
        to={`/pokemon/${pokemon.name}`}
        sx={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            sx={{
              position: "relative",
              width: "45px",
              height: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.img
              src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/server/src/img/${pokemon.id}.png`}
              alt={`${pokemon.name}`}
              layoutId={`${pokemon.name}-image`}
              sx={{
                width: "45px",
                height: "45px",
                backgroundImage: `url(${pokeball})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "90%",
                backgroundPosition: "center",
                filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
          </div>
          <motion.p layoutId={`${pokemon.name}-name`} sx={nameStyles}>
            {replaceHyphenWithSpace(pokemon.name)}
          </motion.p>
          <motion.p
            layout={true}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.25,
              },
            }}
            sx={{
              position: "absolute",
              right: "4px",
              color: "rgb(254 254 254 / 0.3)",
              fontSize: "64px",
              margin: "0",
            }}
          >
            {pokemon.nat_dex_num}
          </motion.p>
        </div>
      </Link>
    </motion.li>
  )
}

export default PokemonListCard
