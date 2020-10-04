/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { useState, useEffect, useContext } from "react"
import { GameContext } from "../context/GameContext"

import GameSelect from "./GameSelect"
import MoveCard from "./MoveCard"
import MoveCardFront from "./MoveCardFront"
import MoveCardBack from "./MoveCardBack"
// import { BiSliderAlt } from "react-icons/bi"

const Moves = ({ pokemon }) => {
  const { game } = useContext(GameContext)

  const [filterValue, setFilterValue] = useState("all")
  const [moves, setMoves] = useState(
    pokemon[game] && pokemon[game].length ? [...pokemon[game]] : []
  )

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

    let filteredMoves = []

    if (pokemon[game] && pokemon[game].length) {
      filteredMoves =
        filterValue === "all"
          ? [...pokemon[game]]
          : [...pokemon[game]].reduce(reduceMethod(filterValue), []).flat()
    }

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
  }, [filterValue, game, pokemon])

  return (
    <motion.section
      initial={{
        x: 40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { delay: 0.4 },
      }}
    >
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
            onBlur={handleFilterChange}
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

          <GameSelect />
        </div>
      </div>

      <ul
        sx={{ padding: "0", width: "100%", marginBottom: "0" }}
        key={`${pokemon.name}-moves`}
      >
        {moves.length > 0 ? (
          moves.map((move, index) => (
            <MoveCard key={`${move.name}-${pokemon.name}-${index}-${game}`}>
              <MoveCardFront move={move} />
              <MoveCardBack move={move} />
            </MoveCard>
          ))
        ) : (
          <p sx={{ textAlign: "center" }}>No moves available for {game}</p>
        )}
      </ul>
    </motion.section>
  )
}
export default Moves
