/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"

import { replaceHyphenWithSpace } from "../utils/stringParsing"

import { BsArrowRight } from "react-icons/bs"

const evolutionTriggerPhrases = {
  min_happiness: happiness => `happiness of ${happiness}`,
  min_affection: affection => `affection of ${affection}`,
  min_beauty: beauty => `beauty of ${beauty}`,
  held_item: holdItem => `while holding ${holdItem}`,
  item: item => `use ${item}`,
  known_move: moveName => `while knowing ${moveName}`,
  known_move_type: moveType => `while knowing a ${moveType} type move`,
  location: location => `at ${location}`,
  needs_overworld_rain: "while raining",
  time_of_day: time => `at ${time}`,
  turn_upside_down: "while upside down",
}

const locationEvolutions = {
  glaceon: "Lvl up near an Icy Rock",
  leafeon: "Lvl up near a Mossy Rock",
  vikavolt: "Lvl up in a Magnetic Field Area",
  crabrawler: "Lvl up at Mount Lanakila",
  magnezone: "Lvl up in a Magnetic Field Area",
  probopass: "Lvl up in a Magnetic Field Area",
}

const EvolutionCriteria = ({ trigger, criteria, tier }) => {
  const [phrase, setPhrase] = useState("")

  useEffect(() => {
    let criteriaString = replaceHyphenWithSpace(trigger)

    // handle 6 pokemon who evolve based on leveling up at a certain location
    if (
      Object.keys(locationEvolutions).includes(tier.pokemon[tier.selected].name)
    ) {
      criteriaString = locationEvolutions[tier.pokemon[tier.selected].name]
    } else if (trigger === "level-up") {
      if (criteria.length > 1) {
        //   if the trigger is level up and there are multiple other criteria that need to be met
        const criteriaArrayStrings = criteria.map(criterium => {
          const val = criterium.value ? criterium.value : criterium.name

          return evolutionTriggerPhrases[criterium.evolution_criteria_name](val)
        })

        criteriaString = `Lvl up ` + criteriaArrayStrings.join(", ")
      } else if (
        criteria.length === 1 &&
        criteria[0].evolution_criteria_name !== "min_level"
      ) {
        //   if the trigger is level up, but there is also one other criteria that must be met
        const val = criteria[0].name ? criteria[0].name : criteria[0].value

        criteriaString = `Lvl up ${evolutionTriggerPhrases[
          criteria[0].evolution_criteria_name
        ](val)}`
      } else {
        criteriaString = `Lvl ${criteria[0].value}`
      }
    } else if (trigger === "use-item") {
      if (criteria.length > 1) {
      } else {
        criteriaString = `Use ${criteria[0].name}`
      }
    } else if (
      criteria.length === 1 &&
      criteria[0].evolution_criteria_name !== "min_level"
    ) {
      const val = criteria[0].name ? criteria[0].name : criteria[0].value

      criteriaString = `${replaceHyphenWithSpace(
        trigger
      )} ${evolutionTriggerPhrases[criteria[0].evolution_criteria_name](val)}`
    }

    setPhrase(criteriaString)
  }, [trigger, criteria])

  return (
    <div
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BsArrowRight sx={{ fontSize: "3rem" }} />
      <p sx={{ textAlign: "center", margin: "0" }}>{phrase}</p>
    </div>
  )
}

export default EvolutionCriteria
