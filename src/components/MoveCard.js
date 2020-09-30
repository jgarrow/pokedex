/** @jsx jsx */
import { jsx } from "theme-ui"
import { motion, useCycle } from "framer-motion"

const MoveCard = ({ children }) => {
  const [animate, cycleMoveCard] = useCycle(
    {
      card: { transform: `rotateY(0deg)` },
    },
    {
      card: { transform: `rotateY(180deg)` },
    }
  )

  return (
    <motion.li
      sx={{
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        // borderRadius: "8px",
        padding: "0.5rem 1rem",
        width: "100%",
        height: "190px",
        marginBottom: "1.5rem",
        perspective: `1000px`,
        background: `transparent`,
        borderRadius: `12px`,
        scrollSnapAlign: `center`,
        boxSizing: `border-box`,
        listStyle: "none",
      }}
      onTap={() => {
        cycleMoveCard()
      }}
    >
      <motion.div
        animate={animate.card}
        sx={{
          transformStyle: `preserve-3d`,
          width: `100%`,
          minWidth: `100%`,
          height: "100%",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {children}
      </motion.div>
    </motion.li>
  )
}

export default MoveCard
