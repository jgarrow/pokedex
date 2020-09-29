/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import PokemonLayout from "../components/PokemonLayout"
import TypeEffectiveness from "../components/TypeEffectiveness"

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

const PokemonStats = ({ data, pageContext: { id, name, dominant_color } }) => {
  const pokemon = { ...data.pokeapi.pokemon, name, id, dominant_color }
  const total =
    pokemon.base_stats.hp +
    pokemon.base_stats.attack +
    pokemon.base_stats.defense +
    pokemon.base_stats.special_attack +
    pokemon.base_stats.special_defense +
    pokemon.base_stats.speed
  console.log("pokemon in stats: ", pokemon)

  return (
    <PokemonLayout pokemon={pokemon}>
      <h3 sx={{ textAlign: "start" }}>Base Stats</h3>

      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "100px 1fr",
          gridColumnGap: "15px",
          alignItems: "baseline",
          width: "100%",
        }}
      >
        <label htmlFor={`${pokemon.name}-hp`} sx={labelStyles}>
          HP
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-hp`} sx={gridChildren}>
            {pokemon.base_stats.hp}
          </p>
          <Bar stat={pokemon.base_stats.hp} total={total} />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-attack`} sx={labelStyles}>
          Attack
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-attack`}>{pokemon.base_stats.attack}</p>
          <Bar stat={pokemon.base_stats.attack} total={total} />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-defense`} sx={labelStyles}>
          Defense
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-defense`}>{pokemon.base_stats.defense}</p>
          <Bar stat={pokemon.base_stats.defense} total={total} />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-special-attack`} sx={labelStyles}>
          Sp. Atk
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-special-attack`}>
            {pokemon.base_stats.special_attack}
          </p>
          <Bar stat={pokemon.base_stats.special_attack} total={total} />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-special-defense`} sx={labelStyles}>
          Sp. Def
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-special-defense`}>
            {pokemon.base_stats.special_defense}
          </p>
          <Bar stat={pokemon.base_stats.special_defense} total={total} />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-speed`} sx={labelStyles}>
          Speed
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-speed`}>{pokemon.base_stats.speed}</p>
          <Bar stat={pokemon.base_stats.speed} total={total} />
        </div>

        <span sx={rowUnderline} />

        <label
          htmlFor={`${pokemon.name}-stat-total`}
          style={{ fontWeight: `600`, color: `black` }}
          sx={labelStyles}
        >
          Total
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-stat-total`} style={{ fontWeight: `600` }}>
            {total}
          </p>
        </div>

        <span sx={rowUnderline} />
      </div>
      <TypeEffectiveness name={pokemon.name} types={pokemon.types} />
    </PokemonLayout>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonStatsFragment
      }
    }
  }
`

export default PokemonStats
