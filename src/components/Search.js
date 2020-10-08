/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import search from "../images/bx-search.svg"

const Search = ({ pokemonList, setSearchResults }) => {
  const [inputValue, setInputValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState("0px")
  const [opaque, setOpaque] = useState(0)

  const handleChange = e => {
    setInputValue(e.target.value.toLowerCase())
  }

  const toggleSearchBar = () => {
    let newSize = size
    let newOpacity = opaque
    if (!isOpen) {
      newSize = "0px"
      newOpacity = 0
    } else {
      newSize = "100px"
      newOpacity = 1
    }
    setSize(newSize)
    setOpaque(newOpacity)
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    let newResults = [...pokemonList]

    if (inputValue !== "") {
      newResults = newResults.filter(mon => mon.name.includes(inputValue))
    }

    setSearchResults(newResults)
  }, [setSearchResults, inputValue, pokemonList])

  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <motion.label
        htmlFor="search"
        initial={{ width: 0, x: "0", zIndex: "-1", opacity: 0 }}
        animate={{ width: size, x: "-70%", zIndex: "1", opacity: opaque }}
        transition={{
          duration: 0.15,
          type: "tween",
        }}
        sx={{
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <input
          id="search"
          name="search"
          value={inputValue}
          type="text"
          onChange={handleChange}
          sx={{
            width: "100%",
            padding: "5px",
            border: "none",
            borderRadius: "5px",
            height: "2rem",
            boxSizing: "border-box",
            fontSize: "1rem",
            boxShadow: "2px 2px 4px rgba(0,0,0,0.15)",
            backgroundColor: "rgb(240 238 238)",
          }}
        />
      </motion.label>

      <div
        sx={{
          width: "2rem",
          cursor: "pointer",
          bg: "background",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => toggleSearchBar()}
      >
        <img
          src={search}
          alt="Search icon"
          sx={{ width: "100%", fill: "text", zIndex: "5" }}
        />
      </div>
    </div>
  )
}

export default Search
