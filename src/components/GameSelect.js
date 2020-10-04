/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext } from "react"
import { GameContext } from "../context/GameContext"

const GameSelect = () => {
  const { updateGame } = useContext(GameContext)

  const handleGameChange = e => {
    updateGame(e.target.value)
  }

  return (
    <select
      name="games"
      onBlur={handleGameChange}
      onChange={handleGameChange}
      sx={{
        padding: "5px",
        width: "90px",
        borderRadius: "5px",
        fontSize: "1rem",
      }}
    >
      Game:
      <option value="yellow">Yellow</option>
      <option value="diamond">Diamond</option>
    </select>
  )
}

export default GameSelect
