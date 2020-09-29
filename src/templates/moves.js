/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import PokemonLayout from "../components/PokemonLayout"
import MoveCard from "../components/MoveCard"
import MoveCardFront from "../components/MoveCardFront"
import MoveCardBack from "../components/MoveCardBack"

const Pokemon = ({ data, pageContext: { id, name, dominant_color } }) => {
  const pokemon = { ...data.pokeapi.pokemon, id, name, dominant_color }
  console.log(pokemon)

  // loop through moves
  // for each move, loop through learn_methods
  // if at least one of the learn_methods.method is "level-up", we want that move

  const filterMethod = method => move => {
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
      return newArr
    }
  }

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

  const filteredMoves = [...pokemon.yellow]
    .reduce(reduceMethod("level-up"), [])
    .flat()

  console.log("filteredMoves: ", filteredMoves)

  // sort moves by level from lowest to highest
  const sortedMoves = filteredMoves.sort((move1, move2) => {
    const { learn_methods: learn_methods1 } = move1
    const { learn_methods: learn_methods2 } = move2

    return learn_methods1[0].level_learned_at >
      learn_methods2[0].level_learned_at
      ? 1
      : -1
  })

  console.log("sortedMoves: ", sortedMoves)

  return (
    <PokemonLayout pokemon={pokemon}>
      <h3 sx={{ textAlign: "start", marginBottom: "0" }}>Moves</h3>

      <ul sx={{ padding: "0", width: "100%", margin: "0" }}>
        {sortedMoves.map((move, index) => (
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
