/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const liStyles = {
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
}

const linkStyles = {
  textDecoration: "none",
  width: "60px",
  height: "60px",
  lineHeight: "3.5",
  color: "#fefefe",
  textShadow: "1px 1px 0px rgba(0, 0, 0, 0.25)",
}

const Nav = ({ name }) => {
  return (
    <nav
      sx={{
        width: "100%",
        position: "relative",
        top: "30px",
      }}
    >
      <ul
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "8px",
          justifyContent: "center",

          padding: "0",
        }}
      >
        <li sx={liStyles}>
          <Link to={`/pokemon/${name}`} sx={linkStyles}>
            About
          </Link>
        </li>
        <li sx={liStyles}>
          <Link to={`/pokemon/${name}/stats`} sx={linkStyles}>
            Stats
          </Link>
        </li>
        <li sx={liStyles}>
          <Link to={`/pokemon/${name}/evolution`} sx={linkStyles}>
            Evolution
          </Link>
        </li>
        <li sx={liStyles}>
          <Link to={`/pokemon/${name}/moves`} sx={linkStyles}>
            Moves
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
