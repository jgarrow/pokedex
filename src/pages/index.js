import * as React from "react"
import { Link } from "gatsby"

import styles from "../styles.css"

const Home = () => {
  return (
    <>
      <h1>Welcome to Pokédex!</h1>
      <Link to="/pokemon">Pokémon</Link>
    </>
  )
}

export default Home
