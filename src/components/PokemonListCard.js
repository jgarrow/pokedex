/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { lightenDarkenColor, getRGB } from "../utils/colors"
import { getContrast } from "../utils/getColorContrast"

import pokeball from "../images/pokeball-bg-sm.svg"

const PokemonListCard = ({ pokemon, variant }) => {
  const rgb = getRGB(pokemon.dominant_color)
  //   console.log("rgb: ", rgb)
  const newColor = lightenDarkenColor(pokemon.dominant_color, -60)
  //   const textColor = getContrast(rgb.r, rgb.g, rgb.b)

  return (
    <Link to={`/pokemon/${pokemon.name}`} sx={{ textDecoration: "none" }}>
      <motion.li
        id={`${pokemon.name}`}
        sx={{
          background: `linear-gradient(135deg, ${lightenDarkenColor(
            pokemon.dominant_color,
            60
          )}, ${newColor})`,
          width: "100%",
          height: "100%",
          display: "flex",
          //   flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          //   zIndex: 1000,
          boxSizing: "border-box",
          padding: `1rem 0`,
          paddingLeft: "4px",
          borderRadius: "8px",
          listStyle: "none",
        }}
        layoutId={`pokemon-${pokemon.name}`}
        variants={variant}
        aria-label={`Link to ${pokemon.name}'s page`}
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
          <motion.div
            sx={{
              position: "relative",
              // height: "75%",
              // width: "75%",
              width: "45px",
              height: "45px",
              // margin: "0 auto",
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
                backgroundSize: "90%",
                backgroundPosition: "center",
                filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))",
              }}
            />
          </motion.div>
          <p
            sx={{
              textDecoration: "none",
              color: "#fefefe",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
              margin: "0",
              marginLeft: "4px",
              letterSpacing: "1px",
            }}
          >
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </p>
        </div>
        <p
          sx={{
            position: "absolute",
            right: "4px",
            color: "rgb(254 254 254 / 0.3)",
            fontSize: "4rem",
            margin: "0",
          }}
        >
          {pokemon.nat_dex_num}
        </p>
      </motion.li>
    </Link>
  )
}

export default PokemonListCard
