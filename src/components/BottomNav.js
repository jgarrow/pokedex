/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import news from "../images/bx-news.svg"
import backpack from "../images/bxs-backpack.svg"
import chart from "../images/bxs-bar-chart-alt-2.svg"
import capsule from "../images/bxs-capsule.svg"
import Search from "./Search"

const listStyles = {
  listStyle: "none",
  width: "100%",
  height: "100%",
}

const linkStyles = {
  textDecoration: "none",
  color: "text",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}

const imgStyles = {
  width: "2rem",
}

const Pokeball = () => {
  return (
    <svg
      width="2rem"
      height="2rem"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M99.9997 1.10791C49.9129 1.14126 8.41263 37.4384 0.95459 84.8565L51.8974 84.9494C58.4054 64.8393 77.4785 50.2814 99.9997 50.2695C122.485 50.2957 141.531 64.8298 148.063 84.9041L198.989 84.9494C191.584 37.5027 150.094 1.16984 99.9997 1.10791ZM99.9997 67.8C81.8887 67.8 67.2065 82.3031 67.2065 100.193C67.2065 118.083 81.8887 132.587 99.9997 132.587C118.111 132.587 132.793 118.083 132.793 100.193C132.793 82.3031 118.111 67.8 99.9997 67.8ZM1.01005 115.437C8.41505 162.884 49.9057 199.217 99.9997 199.279C150.087 199.245 191.587 162.948 199.045 115.53L148.102 115.437C141.594 135.547 122.521 150.105 99.9997 150.117C77.5147 150.091 58.4681 135.557 51.936 115.482L1.01005 115.437Z"
        fill="#000000"
        fillOpacity="1"
      />
    </svg>
  )
}

const BottomNav = () => {
  return (
    <nav
      sx={{
        width: "100%",
        height: "100%",
        margin: "0",
        height: "75px",
        position: "fixed",
        bottom: "0",
        bg: "background",
        boxShadow: "0px -3px 8px -5px rgba(0, 0, 0, 0.25)",
        zIndex: "1000",
      }}
    >
      <ul
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        <li sx={listStyles}>
          <Link to="/news" sx={linkStyles}>
            <img src={news} alt="News icon" sx={imgStyles} />
            News
          </Link>
        </li>
        <li sx={listStyles}>
          <Link to="/items" sx={linkStyles}>
            <img src={backpack} alt="Backpack icon" sx={imgStyles} />
            Items
          </Link>
        </li>
        <li sx={listStyles}>
          <Link to="/" sx={linkStyles}>
            <Pokeball />
            Pokédex
          </Link>
        </li>
        <li sx={listStyles}>
          <Link to="/type-charts" sx={linkStyles}>
            <img src={chart} alt="Bar chart icon" sx={imgStyles} />
            Types
          </Link>
        </li>
        <li sx={listStyles}>
          <Link to="/abilities" sx={linkStyles}>
            <img src={capsule} alt="Capsule icon" sx={imgStyles} />
            Abilities
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default BottomNav
