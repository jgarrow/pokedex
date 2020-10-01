/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion } from "framer-motion"

import { FiChevronUp, FiChevronDown } from "react-icons/fi"

const EvolutionTier = ({ tier, tierIndex, handleTap }) => {
  const tierArray = tier.pokemon

  return (
    <div>
      {tierArray.length > 1 && (
        <motion.div onTap={() => handleTap("up", tierIndex)}>
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
        }}
      >
        {tierArray.map((mon, index) => (
          <motion.img
            key={`tier-${tierIndex}-evolution-${index}`}
            src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${mon.id}.png`}
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
        <motion.div onTap={() => handleTap("down", tierIndex)}>
          <FiChevronDown sx={{ fontSize: "1.5rem" }} />
        </motion.div>
      )}
    </div>
  )
}

export default EvolutionTier
