/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { locationIsFromIndPokemon } from "../utils/stringParsing"

const liStyles = {
  listStyle: "none",
  textAlign: "center",
}

const linkStyles = {
  textDecoration: "none",
  width: "60px",
  height: "60px",
  lineHeight: "3.5",
  color: "#fefefe",
  textShadow:
    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
}

const Nav = ({ name, textColor, location: { pathname, state } }) => {
  const fromIndPokemonPage = locationIsFromIndPokemon(state)

  const navContainer = {
    hidden: { opacity: !fromIndPokemonPage ? 0 : 1 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.5,
      },
    },
  }

  const link = {
    hidden: {
      y: !fromIndPokemonPage ? 20 : 0,
      opacity: !fromIndPokemonPage ? 0 : 1,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <nav
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <motion.ul
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "30px",
          gridGap: "8px",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          marginBottom: "0",
        }}
        variants={navContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}`}
            sx={{ ...linkStyles, color: textColor }}
            state={{ prevPath: pathname }}
          >
            About
          </Link>
        </motion.li>
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}/stats`}
            sx={{ ...linkStyles, color: textColor }}
            state={{ prevPath: pathname }}
          >
            Stats
          </Link>
        </motion.li>
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}/evolution`}
            sx={{ ...linkStyles, color: textColor }}
            state={{ prevPath: pathname }}
          >
            Evolution
          </Link>
        </motion.li>
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}/moves`}
            sx={{ ...linkStyles, color: textColor }}
            state={{ prevPath: pathname }}
          >
            Moves
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  )
}

export default Nav
