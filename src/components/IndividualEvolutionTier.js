/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
import { Fragment } from "react"
import { Link } from "gatsby"
import { replaceHyphenWithSpace } from "../utils/stringParsing"

import { FiChevronUp, FiChevronDown } from "react-icons/fi"

const EvolutionTier = ({ tier, tierIndex, handleTap }) => {
  const tierArray = tier.pokemon

  return (
    <div
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {tierArray.length > 1 && (
        <motion.div
          onTap={() => handleTap("up", tierIndex)}
          sx={{ textAlign: "center", height: "1.5rem", width: "100%" }}
        >
          <FiChevronUp sx={{ fontSize: "1.5rem" }} />
        </motion.div>
      )}

      <div
        sx={{
          display: "grid",
          gridTemplateRows: `repeat(${tierArray.length}, 100%)`,
          height: "100px",
          maxHeight: "100px",
          overflowY: "hidden",
          marginTop: tierArray.length > 1 ? "0" : "1.5rem",
        }}
      >
        {tierArray.map((mon, index) => {
          return (
            <Fragment key={`tier-${tierIndex}-evolution-img-${index}`}>
              {mon.name.includes("-mega") ? (
                <motion.img
                  // src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/server/src/img/${mon.id}.png`}
                  src={`https://dex-images.s3-us-west-1.amazonaws.com/img/${mon.id}.png`}
                  alt={`${mon.name}`}
                  animate={{
                    y: `${tier.selected * -100}%`,
                  }}
                  sx={{
                    height: `100px`,
                    width: `100px`,
                  }}
                />
              ) : (
                <Link to={`/pokemon/${mon.name}`}>
                  <motion.img
                    // src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/server/src/img/${mon.id}.png`}
                    src={`https://dex-images.s3-us-west-1.amazonaws.com/img/${mon.id}.png`}
                    alt={`${mon.name}`}
                    animate={{
                      y: `${tier.selected * -100}%`,
                    }}
                    sx={{
                      height: `100px`,
                      width: `100px`,
                    }}
                  />
                </Link>
              )}
            </Fragment>
          )
        })}
      </div>

      {tierArray.length > 1 && (
        <motion.div
          onTap={() => handleTap("down", tierIndex)}
          sx={{ textAlign: "center", height: "1.5rem", width: "100%" }}
        >
          <FiChevronDown sx={{ fontSize: "1.5rem" }} />
        </motion.div>
      )}

      <div
        sx={{
          width: "100%",
          height: "3rem",
          overflowY: "hidden",
          display: "grid",
          gridTemplateRows: `repeat(${tierArray.length}, 100%)`,
          marginTop: tierArray.length > 1 ? "0" : "1.5rem",
        }}
      >
        {tierArray.map((mon, index) => {
          return (
            <Fragment key={`tier-${tierIndex}-evolution-name-${index}`}>
              {mon.name.includes("-mega") ? (
                <motion.p
                  sx={{
                    margin: "0",
                    textAlign: "center",
                  }}
                  animate={{
                    y: `${tier.selected * -100}%`,
                  }}
                >
                  {replaceHyphenWithSpace(mon.name)}
                </motion.p>
              ) : (
                <Link
                  to={`/pokemon/${mon.name}`}
                  sx={{ textDecoration: "none", color: "text" }}
                >
                  <motion.p
                    sx={{
                      margin: "0",
                      textAlign: "center",
                    }}
                    animate={{
                      y: `${tier.selected * -100}%`,
                    }}
                  >
                    {replaceHyphenWithSpace(mon.name)}
                  </motion.p>
                </Link>
              )}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default EvolutionTier
