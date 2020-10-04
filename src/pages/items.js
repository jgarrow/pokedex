/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"

const Home = () => {
  return (
    <Layout>
      <Header showArrow={true} heading="Poké Items" />
    </Layout>
  )
}

export default Home
