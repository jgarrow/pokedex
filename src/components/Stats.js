/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import TypeEffectiveness from "./TypeEffectiveness"

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

const Stats = ({ pokemon }) => {
  const total =
    pokemon.base_stats.hp &&
    pokemon.base_stats.attack &&
    pokemon.base_stats.defense &&
    pokemon.base_stats.special_attack &&
    pokemon.base_stats.special_defense &&
    pokemon.base_stats.speed
      ? pokemon.base_stats.hp +
        pokemon.base_stats.attack +
        pokemon.base_stats.defense +
        pokemon.base_stats.special_attack +
        pokemon.base_stats.special_defense +
        pokemon.base_stats.speed
      : "--"

  return (
    <motion.div
      // layoutId={`${pokemon.name}-info`}
      initial={{
        x: 40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { delay: 0.4 },
      }}
      exit={{
        x: -40,
        opacity: 0,
      }}
    >
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
            {pokemon.base_stats.hp ? pokemon.base_stats.hp : "--"}
          </p>
          <Bar
            stat={pokemon.base_stats.hp ? pokemon.base_stats.hp : 0}
            total={total}
          />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-attack`} sx={labelStyles}>
          Attack
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-attack`}>
            {pokemon.base_stats.attack ? pokemon.base_stats.attack : "--"}
          </p>
          <Bar
            stat={pokemon.base_stats.attack ? pokemon.base_stats.attack : 0}
            total={total}
          />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-defense`} sx={labelStyles}>
          Defense
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-defense`}>
            {pokemon.base_stats.defense ? pokemon.base_stats.defense : "--"}
          </p>
          <Bar
            stat={pokemon.base_stats.defense ? pokemon.base_stats.defense : 0}
            total={total}
          />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-special-attack`} sx={labelStyles}>
          Sp. Atk
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-special-attack`}>
            {pokemon.base_stats.special_attack
              ? pokemon.base_stats.special_attack
              : "--"}
          </p>
          <Bar
            stat={
              pokemon.base_stats.special_attack
                ? pokemon.base_stats.special_attack
                : 0
            }
            total={total}
          />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-special-defense`} sx={labelStyles}>
          Sp. Def
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-special-defense`}>
            {pokemon.base_stats.special_defense
              ? pokemon.base_stats.special_defense
              : "--"}
          </p>
          <Bar
            stat={
              pokemon.base_stats.special_defense
                ? pokemon.base_stats.special_defense
                : 0
            }
            total={total}
          />
        </div>

        <span sx={rowUnderline} />
        <label htmlFor={`${pokemon.name}-speed`} sx={labelStyles}>
          Speed
        </label>
        <div sx={{ ...gridChildren, ...statContainer }}>
          <p id={`${pokemon.name}-speed`}>
            {pokemon.base_stats.speed ? pokemon.base_stats.speed : "--"}
          </p>
          <Bar
            stat={pokemon.base_stats.speed ? pokemon.base_stats.speed : 0}
            total={total}
          />
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
    </motion.div>
  )
}

export default Stats
