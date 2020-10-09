/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"

import BottomNav from "./BottomNav"

import "../styles.css"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main
        sx={{
          marginBottom: "calc(2rem + 60px)",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </main>
      <BottomNav />
    </Fragment>
  )
}

export default Layout
