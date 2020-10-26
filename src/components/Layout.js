/** @jsx jsx */
import { jsx } from "theme-ui"

import BottomNav from "./BottomNav"

import "../styles.css"

const Layout = ({ children, header }) => {
  return (
    <div sx={{ position: "relative", width: "100%", height: "100%" }}>
      {header}
      <main
        sx={{
          marginBottom: "75px",
          width: "100%",
          height: `calc(100vh - 75px - 135px)`,
          maxHeight: "calc(100vh - 75px)",
        }}
      >
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

export default Layout
