/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"

import { GiMale, GiFemale } from "react-icons/gi"

const title = {
  textAlign: "start",
}

const dataGrid = {
  display: "grid",
  gridTemplateColumns: "120px 1fr",
  gridColumnGap: "15px",
  alignItems: "baseline",
  width: "100%",
}

const labelStyles = {
  color: "#737373",
  justifySelf: "flex-start",
  textAlign: "initial",
}

const gridContent = {
  justifySelf: "flex-start",
  textAlign: "initial",
}

const rowUnderline = {
  gridColumn: "1 / span 2",
  height: "0",
  width: "100%",
  borderBottom: "1px solid #f0f0f0",
}

const About = ({ pokemon }) => {
  return (
    <>
      <p sx={{ marginBottom: `0`, textAlign: `center` }}>
        {pokemon.pokedex_entries[0].description}
      </p>
      <section>
        <h3 sx={title}>Pokémon Data</h3>
        <div sx={dataGrid}>
          <label htmlFor={`${pokemon.name}-species`} sx={labelStyles}>
            Species
          </label>
          <p id={`${pokemon.name}-species`} sx={gridContent}>
            {pokemon.genus}
          </p>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-abilities`} sx={labelStyles}>
            Abilities
          </label>
          <div id={`${pokemon.name}-abilities`} sx={gridContent}>
            {pokemon.abilities.map((ability, index) => (
              <p key={`${ability.name}-${index}`}>{ability.name}</p>
            ))}
          </div>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-height`} sx={labelStyles}>
            Height
          </label>
          <p id={`${pokemon.name}-height`} sx={gridContent}>
            {pokemon.height}
          </p>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-weight`} sx={labelStyles}>
            Weight
          </label>
          <p id={`${pokemon.name}-weight`} sx={gridContent}>
            {pokemon.weight}
          </p>

          <span sx={rowUnderline} />
        </div>
      </section>

      <section>
        <h3 sx={title}>Breeding</h3>
        <div sx={dataGrid}>
          <label htmlFor={`${pokemon.name}-egg-groups`} sx={labelStyles}>
            Egg Groups
          </label>
          <div id={`${pokemon.name}-egg-groups`} sx={gridContent}>
            {pokemon.egg_groups.map((group, index) => (
              <p key={`${group.name}-${index}`}>{group.name}</p>
            ))}
          </div>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-gender-rate`} sx={labelStyles}>
            Gender
          </label>
          <p
            id={`${pokemon.name}-gender-rate`}
            sx={{ ...gridContent, display: "flex", alignItems: "center" }}
          >
            {100 - pokemon.gender_rate}% <GiMale sx={{ marginLeft: "2px" }} />,{" "}
            {pokemon.gender_rate}
            % <GiFemale />
          </p>

          <span sx={rowUnderline} />
        </div>
      </section>

      <section sx={{ marginBottom: `1rem` }}>
        <h3 sx={title}>Training</h3>
        <div sx={dataGrid}>
          <label htmlFor={`${pokemon.name}-catch-rate`} sx={labelStyles}>
            Catch Rate
          </label>
          <p id={`${pokemon.name}-catch-rate`} sx={gridContent}>
            {pokemon.capture_rate}
          </p>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-base-experience`} sx={labelStyles}>
            Base Exp.
          </label>
          <p id={`${pokemon.name}-base-experience`} sx={gridContent}>
            {pokemon.base_experience}
          </p>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-growth-rate`} sx={labelStyles}>
            Growth Rate
          </label>
          <p id={`${pokemon.name}-growth-rate`} sx={gridContent}>
            {pokemon.growth_rate}
          </p>

          <span sx={rowUnderline} />

          <label htmlFor={`${pokemon.name}-base-happiness`} sx={labelStyles}>
            Base Happiness
          </label>
          <p id={`${pokemon.name}-base-happiness`} sx={gridContent}>
            {pokemon.base_happiness}
          </p>
        </div>
      </section>
    </>
  )
}

export default About