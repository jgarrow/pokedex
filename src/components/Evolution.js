/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useState } from "react"

import { BsArrowRight } from "react-icons/bs"
import EvolutionTier from "./IndividualEvolutionTier"

import { getTiers } from "../utils/getEvolutionTiers"

const title = {
  textAlign: "start",
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

const Evolution = ({ pokemon, evolutionTiers }) => {
  const [newTiers, setNewTiers] = useState(evolutionTiers)
  console.log("evolutionTiers: ", evolutionTiers)

  const handleTap = (direction, tierIndex) => {
    console.log("in handletap")
    const mon = { ...newTiers[tierIndex] }
    const numOfPokemon = mon.pokemon.length

    if (direction === "down") {
      // increment current tier .selected
      // update position to be -100
      ++mon.selected

      // if you try to click "down" past the last image, loop to the "top" of the images
      // if the updated position / -100 >= numOfPokemon
      // set updated position to 0
      // set current tier .selected to 0
      if (mon.selected >= numOfPokemon) {
        mon.selected = 0
      }
    } else if (direction === "up") {
      // decrement current tier .selected
      // update position to be +100
      --mon.selected

      // if you try to click "up" past the first image, loop to the "bottom" of the images
      // if the updated position > 0
      // set updated position to (numOfPokemon - 1) * -100
      // set current tier .selected to mon[numOfPokemon - 1]
      if (mon.selected < 0) {
        mon.selected = numOfPokemon - 1
      }
    }

    setNewTiers(getTiers(pokemon, mon.selected))
  }

  return (
    <section>
      <h3 sx={title}>Evolution Chain</h3>

      <div
        sx={{
          display: "grid",
          gridRowGap: "20px",
          gridTemplateRows: `repeat(${
            newTiers.length - 1
          }, minmax(100px, 150px) auto)`,
        }}
      >
        {newTiers &&
          newTiers.map((tier, index) =>
            newTiers[index + 1] ? (
              <div
                key={`evolution-chain-${pokemon.name}-${index}`}
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(80px, 100px) minmax(50px, 1fr) minmax(80px, 100px)",
                  gridColumnGap: "10px",
                  alignItems: "center",
                }}
              >
                <EvolutionTier
                  tier={tier}
                  tierIndex={index}
                  handleTap={handleTap}
                />

                {newTiers[index + 1] && (
                  <Fragment>
                    <BsArrowRight
                      sx={{ fontSize: "2rem", justifySelf: "center" }}
                    />

                    <EvolutionTier
                      tier={newTiers[index + 1]}
                      tierIndex={index + 1}
                      handleTap={handleTap}
                    />

                    {newTiers[index + 2] ? <span sx={rowUnderline} /> : null}
                  </Fragment>
                )}
              </div>
            ) : null
          )}
      </div>
    </section>
  )
}

export default Evolution
