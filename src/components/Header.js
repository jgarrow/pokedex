/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import { RiArrowGoBackFill } from "react-icons/ri"
import GameSelect from "./GameSelect"

const Header = ({ name, bgColor }) => {
  return (
    <header
      sx={{
        width: "100%",
        height: "60px",
        boxSizing: "border-box",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        to={`/pokemon#${name}`}
        sx={{
          borderRadius: "50%",
          border: "1.5px solid #000",
          bg: "#fefefe",
          width: "1.75rem",
          height: "1.75rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RiArrowGoBackFill
          sx={{
            fontSize: "1.25rem",
            color: "#000",

            "path:last-of-type": {
              strokeWidth: "0.5px",
            },
          }}
        />
      </Link>
      <GameSelect bgColor={bgColor} />
    </header>
  )
}

export default Header
