/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { useState } from "react"
import { motion } from "framer-motion"

import { RiArrowGoBackFill } from "react-icons/ri"

import pokeball from "../images/header-pokeball.svg"
import search from "../images/bx-search.svg"

// Link positioned absolutely so that h1's across all pages fall in the same place regardless of whether or not the arrow is showing

const useCachedResults = () => {
  const [results, setResults] = useState({})

  const updateResults = (key, value) => {
    setResults({ ...results, [key]: value })
  }

  return { results, updateResults }
}

const Header = ({ showArrow, heading, pokemonList, setSearchResults }) => {
  const [searchBar, setSearchBar] = useState({ width: 0, opacity: 0 })
  const [inputValue, setInputValue] = useState("")
  const { results, updateResults } = useCachedResults()

  console.log("results", results)

  const handleChange = e => {
    console.log("inputValue", inputValue)
    let newResults = [...pokemonList]
    // let list = searchResults
    const newValue = e.target.value.toLowerCase()
    const list = results[newValue] ? results[newValue] : [...pokemonList]
    setInputValue(e.target.value.toLowerCase())

    // if (!newValue.includes(inputValue)) {
    //   list = pokemonList
    // }

    console.log("list", list)

    if (e.target.value !== "") {
      console.log("i'm filtering")
      // newResults = newResults.filter(mon =>
      //   mon.name.includes(e.target.value.toLowerCase())
      // )
      newResults = list.filter(mon => mon.name.includes(newValue))
    }

    updateResults(newValue, newResults)
    setSearchResults(newResults)
  }

  return (
    <header
      sx={{
        width: "100%",
        height: "130px",
        padding: "1rem 0.5rem 0",
        marginBottom: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {showArrow && (
          <Link
            to="/"
            sx={{ color: "text", position: "absolute", top: "16px" }}
          >
            <RiArrowGoBackFill sx={{ fontSize: "1.5rem" }} />
          </Link>
        )}
        <h1
          sx={{
            fontSize: "2.5rem",
            margin: "0",

            "::before": {
              content: '""',
              position: "absolute",
              top: "-6px",
              right: "0",
              backgroundImage: `url(${pokeball})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "175px",
              height: "190px",
              width: "175px",
            },
          }}
        >
          {heading}
        </h1>
      </div>

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
              // newStyles.border = "1px solid gray"
            } else {
              newStyles.width = 0
              // newStyles.border = "none"
              newStyles.opacity = 0
            }

            setSearchBar(newStyles)
          }}
        />

        <motion.label
          htmlFor="search-bar"
          sx={{ width: "100%" }}
          // initial={{ width: 0 }}
          // animate={{ width: searchBar.width, border: searchBar.border }}
          // transition={{
          //   duration: 0.15,
          //   type: "tween",
          // }}
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
            animate={{ width: searchBar.width, opacity: searchBar.opacity }}
            transition={{
              duration: 0.15,
              type: "tween",
            }}
          />
        </motion.label>
      </div>
    </header>
  )
}

export default Header
