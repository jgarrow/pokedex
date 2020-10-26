/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"

import { motion } from "framer-motion"
import search from "../images/bx-search.svg"

export const Search = ({ pokemonList, searchResults, setSearchResults }) => {
  const [searchBar, setSearchBar] = useState({ width: 0, opacity: 0 })
  const [inputValue, setInputValue] = useState("")

  const handleChange = e => {
    let newResults = [...pokemonList]
    let list = searchResults
    const newValue = e.target.value.toLowerCase()
    setInputValue(e.target.value.toLowerCase())

    if (e.target.value !== "") {
      newResults = list.filter(mon => mon.name.includes(newValue))
    }

    setSearchResults(newResults)
  }

  return (
    <div
      sx={{
        width: "50%",
        maxWidth: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.img
        src={search}
        alt="Search icon"
        sx={{ marginRight: "0.5rem" }}
        onClick={() => {
          const newStyles = { ...searchBar }

          if (newStyles.width === 0 && newStyles.opacity === 0) {
            newStyles.width = "100%"
            newStyles.opacity = 1
          } else {
            newStyles.width = 0
            newStyles.opacity = 0
          }

          setSearchBar(newStyles)
        }}
      />

      <motion.label
        htmlFor="search-bar"
        sx={{ width: "100%" }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: searchBar.width, opacity: searchBar.opacity }}
        transition={{
          duration: 0.15,
          type: "tween",
        }}
      >
        <motion.input
          id="search-bar"
          name="search-bar"
          type="text"
          value={inputValue}
          onChange={handleChange}
          sx={{
            width: "100%",
            padding: "5px",
            borderRadius: "4px",
            border: "1px solid gray",
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: searchBar.width, opacity: searchBar.opacity }}
          transition={{
            duration: 0.15,
            type: "tween",
          }}
        />
      </motion.label>
    </div>
  )
}
