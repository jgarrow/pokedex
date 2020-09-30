/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import { graphql } from "gatsby"

import PokemonLayout from "../components/PokemonLayout"
import MoveCard from "../components/MoveCard"
import MoveCardFront from "../components/MoveCardFront"
import MoveCardBack from "../components/MoveCardBack"

// import { BiSliderAlt } from "react-icons/bi"

// TODO -- sorting functionality
// sort alphabetically by name (A-Z, Z-A), by category, by type, by learn method

const Pokemon = ({ data, pageContext: { id, name, dominant_color } }) => {
  const pokemon = { ...data.pokeapi.pokemon, id, name, dominant_color }
  const [filterValue, setFilterValue] = useState("all")
  const [moves, setMoves] = useState([...pokemon.yellow])

  const handleFilterChange = e => {
    setFilterValue(e.target.value)
  }

  useEffect(() => {
    const reduceMethod = method => (acc, move) => {
      const learn_methods = move.learn_methods.filter(
        moveMethod => moveMethod.method === method
      )

      if (learn_methods.length > 0) {
        const newArr = learn_methods.map(learn_method => {
          return {
            ...move,
            learn_methods: [learn_method],
          }
        })
        acc.push(newArr)
      }

      return acc
    }

    const filteredMoves =
      filterValue === "all"
        ? [...pokemon.yellow]
        : [...pokemon.yellow].reduce(reduceMethod(filterValue), []).flat()

    // sort moves by level from lowest to highest
    let sortedMoves = [...filteredMoves]

    if (filterValue === "level-up") {
      sortedMoves = [...filteredMoves].sort((move1, move2) => {
        const { learn_methods: learn_methods1 } = move1
        const { learn_methods: learn_methods2 } = move2

        return learn_methods1[0].level_learned_at >
          learn_methods2[0].level_learned_at
          ? 1
          : -1
      })
    }

    setMoves(sortedMoves)
  }, [filterValue])

  return (
    <PokemonLayout pokemon={pokemon}>
      <div
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <h3 sx={{ textAlign: "start", margin: "0" }}>Moves</h3>
        {/* <BiSliderAlt sx={{ fontSize: "1.5rem" }} /> */}

        <div>
          <select
            name="movesFilter"
            onChange={handleFilterChange}
            sx={{
              padding: "5px",
              width: "90px",
              borderRadius: "5px",
              fontSize: "1rem",
            }}
          >
            Filter by:
            <option value="all">All</option>
            <option value="level-up">Level</option>
            <option value="machine">HM/TM</option>
            <option value="egg">Egg</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>
      </div>

      <ul sx={{ padding: "0", width: "100%", margin: "0" }}>
        {moves.map((move, index) => (
          <MoveCard key={`${move.name}-${pokemon.name}-${index}-yellow`}>
            <MoveCardFront move={move} />
            <MoveCardBack move={move} />
          </MoveCard>
        ))}
      </ul>
    </PokemonLayout>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonMovesFragment
        ...PokemonBannerFragment
      }
    }
  }
`

export default Pokemon
