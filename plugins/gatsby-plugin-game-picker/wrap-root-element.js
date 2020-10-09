import React, { useState } from "react"
import { GameContext } from "../../src/context/GameContext"

import { replaceHyphenWithUnderscore } from "../../src/utils/stringParsing"

const GameProvider = ({ children }) => {
  const [game, setGame] = useState("yellow")

  const updateGame = gameName => {
    setGame(replaceHyphenWithUnderscore(gameName))
  }

  const gameState = { game, updateGame }

  return (
    <GameContext.Provider value={gameState}>{children}</GameContext.Provider>
  )
}

export const wrapRootElement = ({ element }) => (
  <GameProvider>{element}</GameProvider>
)
