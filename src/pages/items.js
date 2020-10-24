/** @jsx jsx */
import { jsx } from "theme-ui"
// import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"
// import ItemsList from "../components/Items"

const Items = () => {
  // const items = data.pokeapi.allItems
  return (
    <Layout>
      <Header heading="Poké Items" />
      <p sx={{ textAlign: "center" }}>Page under construction</p>
      {/* <ItemsList items={items} /> */}
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     pokeapi {
//       allItems {
//         id
//         name
//         cost
//         description
//         effect
//         bag_pocket
//         sprite
//       }
//     }
//   }
// `

export default Items
