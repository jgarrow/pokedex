/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"

const Home = () => {
  return (
    <Layout>
      <Header showArrow={true} heading="Type Charts" />
    </Layout>
  )
}

export default Home
