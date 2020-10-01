/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const liStyles = {
  listStyle: "none",
  textAlign: "center",
}

const linkStyles = {
  textDecoration: "none",
  width: "60px",
  height: "60px",
  lineHeight: "3.5",
  textShadow: "1px 1px 0px rgba(0, 0, 0, 0.25)",
}

const navContainer = {
  hidden: { opacity: 0 },
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Nav = ({ name, textColor }) => {
  return (
    <motion.nav
      sx={{
        width: "100%",
        position: "relative",
        // top: "30px",
      }}
      variants={navContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.ul
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "30px",
          gridGap: "8px",
          justifyContent: "center",
          padding: "0",
          marginTop: "0",
        }}
        variants={navContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}`}
            sx={{ ...linkStyles, color: textColor }}
            // state={{ prevPath: pathname }}
          >
            About
          </Link>
        </motion.li>
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}/stats`}
            sx={{ ...linkStyles, color: textColor }}
            // state={{ prevPath: pathname }}
          >
            Stats
          </Link>
        </motion.li>
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}/evolution`}
            sx={{ ...linkStyles, color: textColor }}
            // state={{ prevPath: pathname }}
          >
            Evolution
          </Link>
        </motion.li>
        <motion.li sx={liStyles} variants={link}>
          <Link
            to={`/pokemon/${name}/moves`}
            sx={{ ...linkStyles, color: textColor }}
            // state={{ prevPath: pathname }}
          >
            Moves
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  )
}

export default Nav
