/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import { Timeline } from "react-twitter-widgets"
import Header from "../components/MainHeader"

const News = () => {
  return (
    <Layout>
      <Header
        showArrow={true}
        heading="Poké News"
        pokemonList={[]}
        setSearchResults={() => {}} // don't do anything right now
      />

      <div sx={{ position: "relative" }}>
        <Timeline
          dataSource={{
            sourceType: "list",
            id: "1312148331984904192",
          }}
          options={{
            chrome: ["noheader", "nofooter"],
          }}
        />
      </div>
    </Layout>
  )
}

export default News
