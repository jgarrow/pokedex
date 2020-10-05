/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/MainHeader"
import ItemsList from "../components/Items"

// import pokeDollar from "../images/poke-dollar.png"

const Items = ({ data }) => {
  console.log("items data: ", data)
  const items = data.pokeapi.allItems
  return (
    <Layout>
      <Header showArrow={true} heading="Poké Items" />
      {/* <p sx={{ textAlign: "center" }}>Page under construction</p> */}
      <ItemsList items={items} />

      {/* <ul sx={{ padding: "0" }}>
        {items &&
          items.map(item => (
            <li
              key={`item-${item.id}`}
              sx={{
                listStyle: "none",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                padding: "0.5rem 1rem",
              }}
            >
              <p>Name: {item.name}</p>
              <p sx={{ display: "flex", alignItems: "center" }}>
                Cost:{" "}
                <img
                  src={pokeDollar}
                  alt="Poké Dollar symbol"
                  sx={{ height: "1rem" }}
                />
                {item.cost}
              </p>
              <p>Effect: {item.effect}</p>
              <p>Description: {item.description}</p>
              <p>Bag pocket: {item.bag_pocket}</p>
              <div>
                <img src={item.sprite} alt={item.name} />
              </div>
            </li>
          ))}
      </ul> */}
    </Layout>
  )
}

export const query = graphql`
  query {
    pokeapi {
      allItems {
        id
        name
        cost
        description
        effect
        bag_pocket
        sprite
      }
    }
  }
`

export default Items
