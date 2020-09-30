/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { lightenDarkenColor } from "../utils/colors"

import pokeball from "../images/pokeball-bg-sm.svg"

const PokemonListCard = ({ pokemon, variant }) => {
  const newColor = lightenDarkenColor(pokemon.dominant_color, -60)

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
        layoutId={`pokemon-${pokemon.name}`}
        variants={variant}
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
              filter: "drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.5))",
            }}
          />
        </motion.div>
        <p sx={{ textDecoration: "none", color: "text", margin: "0" }}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
      </motion.li>
    </Link>
  )
}

export default PokemonListCard
