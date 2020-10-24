/** @jsx jsx */
import { jsx } from "theme-ui"

import pokeball from "../images/header-pokeball.svg"

const Header = ({ children, heading }) => {
  return (
    <header
      sx={{
        width: "100%",
        padding: "1rem 0.5rem 0",
        marginBottom: "1.5rem",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
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
      </div>
      {children}
    </header>
  )
}

export default Header
