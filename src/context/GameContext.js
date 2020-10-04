import { createContext } from "react"

export const GameContext = createContext({
  game: "yellow",
  updateGame: () => {},
})
