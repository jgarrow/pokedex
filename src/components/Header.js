/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import { RiArrowGoBackFill } from "react-icons/ri"

const Header = ({ name }) => {
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
      <Link to={`/pokemon#${name}`} sx={{ color: "text" }}>
        <RiArrowGoBackFill sx={{ fontSize: "1.5rem" }} />
      </Link>
    </header>
  )
}

export default Header
