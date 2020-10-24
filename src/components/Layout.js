/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"

import BottomNav from "./BottomNav"

import "../styles.css"

const Layout = ({ children }) => {
  return (
    <div sx={{ position: 'relative', width: "100%",
    height: "100%", }}>
      <main
        sx={{
          marginBottom: "75px",
          width: "100%",
          height: "100%",
          maxHeight: "calc(100vh - 75px)",
          overflowY: 'scroll'
        }}
      >
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

export default Layout
