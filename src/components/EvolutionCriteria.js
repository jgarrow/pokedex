/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"

import {
  capitalizeFirstLetter,
  replaceHyphenWithSpace,
} from "../utils/stringParsing"

import { BsArrowRight } from "react-icons/bs"

const evolutionTriggerPhrases = {
  min_happiness: happiness => `with ${happiness} happiness`,
  min_affection: affection => `with ${affection} affection`,
  min_beauty: beauty => `with ${beauty} beauty`,
  held_item: holdItem => `while holding ${holdItem}`,
  item: item => `use ${item}`,
  known_move: moveName => `while knowing ${moveName}`,
  known_move_type: moveType => `while knowing a ${moveType} type move`,
  location: location => `at ${location}`,
  needs_overworld_rain: "while raining",
  time_of_day: time => `during ${time}time`,
  turn_upside_down: "while upside down",
  gender: gender => `${gender}`,
  evolution_item: item => `use ${item}`,
}

const locationEvolutions = {
  glaceon: "Level up near an Icy Rock",
  leafeon: "Level up near a Mossy Rock",
  vikavolt: "Level up in a Magnetic Field Area",
  crabrawler: "Level up at Mount Lanakila",
  magnezone: "Level up in a Magnetic Field Area",
  probopass: "Level up in a Magnetic Field Area",
}

const EvolutionCriteria = ({ trigger, criteria, tier }) => {
  const [phrase, setPhrase] = useState("")

  useEffect(() => {
    let criteriaString = trigger ? replaceHyphenWithSpace(trigger) : ""

    if (trigger && criteria) {
      // handle 6 pokemon who evolve based on leveling up at a certain location
      if (
        Object.keys(locationEvolutions).includes(
          tier.pokemon[tier.selected].name
        )
      ) {
        criteriaString = locationEvolutions[tier.pokemon[tier.selected].name]
      } else if (trigger === "level-up") {
        if (criteria.length > 1) {
          //   if the trigger is level up and there are multiple other criteria that need to be met
          const criteriaArrayStrings = criteria.map(criterium => {
            const val = criterium.value ? criterium.value : criterium.name

            return evolutionTriggerPhrases[criterium.evolution_criteria_name](
              val
            )
          })

          criteriaString = `Level up ` + criteriaArrayStrings.join(", ")
        } else if (
          criteria.length === 1 &&
          criteria[0].evolution_criteria_name !== "min_level"
        ) {
          //   if the trigger is level up, but there is also one other criteria that must be met
          const val = criteria[0].name ? criteria[0].name : criteria[0].value

          criteriaString = `Level up ${evolutionTriggerPhrases[
            criteria[0].evolution_criteria_name
          ](val)}`
        } else {
          criteriaString = `Level ${criteria[0].value}`
        }
      } else if (trigger === "use-item") {
        if (criteria.length > 1) {
          const criteriaArrayStrings = criteria.map(criterium => {
            const val = criterium.value ? criterium.value : criterium.name
            return evolutionTriggerPhrases[criterium.evolution_criteria_name](
              val
            )
          })

          criteriaArrayStrings[0] = capitalizeFirstLetter(
            criteriaArrayStrings[0]
          )

          criteriaString = criteriaArrayStrings.join(", ")
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
    }

    setPhrase(criteriaString)
  }, [trigger, criteria, tier])

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
