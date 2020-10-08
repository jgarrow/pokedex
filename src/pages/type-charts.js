/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"

const TypeCharts = () => {
  return (
    <Layout>
      <Header
        showArrow={true}
        heading="Type Charts"
        pokemonList={[]}
        setSearchResults={() => {}} // don't do anything right now
      />
      <p sx={{ textAlign: "center" }}>Page under construction</p>
    </Layout>
  )
}

export default TypeCharts
