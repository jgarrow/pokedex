/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import { RiArrowGoBackFill } from "react-icons/ri"

import pokeball from "../images/header-pokeball.svg"

// Link positioned absolutely so that h1's across all pages fall in the same place regardless of whether or not the arrow is showing

const Header = ({ showArrow, heading }) => {
  return (
    <header
      sx={{
        width: "100%",
        height: "120px",
        padding: "1rem 0.5rem 0",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      {showArrow && (
        <Link to="/" sx={{ color: "text", position: "absolute", top: "16px" }}>
          <RiArrowGoBackFill sx={{ fontSize: "1.5rem" }} />
        </Link>
      )}
      <h1
        sx={{
          fontSize: "2.5rem",
          margin: "0",

          "::before": {
            content: '""',
            position: "absolute",
            top: "-6px",
            right: "0",
            backgroundImage: `url(${pokeball})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "175px",
            height: "190px",
            width: "175px",
          },
        }}
      >
        {heading}
      </h1>
    </header>
  )
}

export default Header
