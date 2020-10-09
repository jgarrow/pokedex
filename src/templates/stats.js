/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import PokemonLayout from "../components/PokemonLayout"
import Stats from "../components/Stats"
// import TypeEffectiveness from "../components/TypeEffectiveness"

const labelStyles = {
  color: "#737373",
  justifySelf: "flex-start",
  textAlign: "initial",
}

const gridChildren = {
  justifySelf: "flex-start",
  textAlign: "initial",
}

const statContainer = {
  display: "grid",
  gridTemplateColumns: "30px 1fr",
  gridColumnGap: "15px",
  alignItems: "center",
  width: "100%",
}

const rowUnderline = {
  gridColumn: "1 / span 2",
  height: "0",
  width: "100%",
  borderBottom: "1px solid #f0f0f0",
}

const statBar = {
  justifySelf: "unset",
  display: "inline-block",
  borderRadius: "6px",
  height: "1rem",
}

const Bar = ({ stat }) => {
  const widthRatio = (stat / 255) * 100
  const bg = stat >= 100 ? `#a0e515` : `#FFDD57`

  return (
    <div
      stat={stat}
      sx={{ ...statBar, width: `${widthRatio}%`, backgroundColor: `${bg}` }}
    />
  )
}

const PokemonStats = ({
  data,
  pageContext: { id, name, dominant_color },
  location,
}) => {
  const pokemon = { ...data.pokeapi.pokemon, name, id, dominant_color }
  // const total =
  //   pokemon.base_stats.hp +
  //   pokemon.base_stats.attack +
  //   pokemon.base_stats.defense +
  //   pokemon.base_stats.special_attack +
  //   pokemon.base_stats.special_defense +
  //   pokemon.base_stats.speed

  return (
    <PokemonLayout
      pokemon={pokemon}
      location={location}
      idLayout={`pokemon-${pokemon.name}-stats`}
      imgIdLayout={`${pokemon.name}-image-moves`}
    >
      <Stats pokemon={pokemon} />
    </PokemonLayout>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonStatsFragment
        ...PokemonBannerFragment
      }
    }
  }
`

export default PokemonStats
