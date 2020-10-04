/** @jsx jsx */
import { jsx } from "theme-ui"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import { Timeline } from "react-twitter-widgets"
import Header from "../components/MainHeader"

// import pokeball from "../images/header-pokeball.svg"

// const cardStyles = {
//   borderRadius: "8px",
//   listStyle: "none",
//   backgroundColor: "rgb(227, 53, 13)",
//   width: "100%",
//   height: "100%",
// }

// const linkStyles = {
//   textDecoration: "none",
//   color: "#fefefe",
//   textShadow:
//     "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
//   borderRadius: "8px",
//   padding: "0.5rem",
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   alignItems: "center",
//   position: "relative",
//   overflow: "hidden", // to "cut off" parts of pokeball image that spill over

//   "::after": {
//     position: "absolute",
//     content: "''",
//     right: "0",
//     top: "0",
//     backgroundImage: `url(${pokeball})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "100%",
//     height: "60px",
//     width: "60px",
//   },
// }

const Home = () => {
  return (
    <Layout>
      <Header showArrow={true} heading="Poké News" />

      {/* <ul
        sx={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(130px, 1fr))",
          gridTemplateRows: `repeat(2, 50px)`,
          gridGap: "1rem",
          padding: "0 0.5rem",
          marginTop: "0",
          position: "relative", // puts header pokeball image behind cards
        }}
      >
        <li sx={cardStyles}>
          <Link to="/pokemon" sx={linkStyles}>
            Pokédex
          </Link>
        </li>
        <li sx={cardStyles}>
          <Link to="/" sx={linkStyles}>
            Items
          </Link>
        </li>
        <li sx={cardStyles}>
          <Link to="/" sx={linkStyles}>
            Abilities
          </Link>
        </li>
        <li sx={cardStyles}>
          <Link to="/" sx={linkStyles}>
            Type Charts
          </Link>
        </li>
      </ul> */}

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

export default Home
