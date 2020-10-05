/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"

import Footer from "../components/Footer"

import "../styles.css"

const Layout = ({ children, setSearchResults, pokemonList }) => {
  return (
    <Fragment>
      <main sx={{ marginBottom: "calc(2rem + 60px)" }}>{children}</main>
      <Footer setSearchResults={setSearchResults} pokemonList={pokemonList} />
    </Fragment>
  )
}

export default Layout
