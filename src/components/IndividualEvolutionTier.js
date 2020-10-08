/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"
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
        {tierArray.map((mon, index) => (
          <motion.img
            key={`tier-${tierIndex}-evolution-${index}`}
            src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/src/img/${mon.id}.png`}
            alt={`${mon.name}`}
            animate={{
              y: `${tier.selected * -100}%`,
            }}
            sx={{
              height: `100px`,
              width: `100px`,
            }}
          />
        ))}
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
        {tierArray.map((mon, index) => (
          <motion.p
            sx={{
              margin: "0",
              textAlign: "center",
            }}
            key={`tier-${tierIndex}-evolution-name-${index}`}
            animate={{
              y: `${tier.selected * -100}%`,
            }}
          >
            {replaceHyphenWithSpace(mon.name)}
          </motion.p>
        ))}
      </div>
    </div>
  )
}

export default EvolutionTier
