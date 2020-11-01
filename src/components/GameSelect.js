/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState } from "react"
import { GameContext } from "../context/GameContext"
import { motion } from "framer-motion"

import { FiChevronDown } from "react-icons/fi"
import { replaceUnderscoreWithSpace } from "../utils/stringParsing"
// import { getContrast } from "../utils/getColorContrast"

const pStyles = {
  margin: "0",
  scrollSnapAlign: "start",
  padding: "0.5rem",
  borderBottom: "1px solid #f0f0f0",
}

const GameSelect = () => {
  const [open, setOpen] = useState("0")
  const [rotation, setRotation] = useState(0)
  const { game, updateGame } = useContext(GameContext)

  // const contrastColor = getContrast(bgColor)
  // const arrowBgShadow =
  //   contrastColor === "rgb(1,1,1)" ? "rgb(254, 254, 254)" : "rgb(1,1,1)"

  const toggleDropdown = () => {
    const newVal = open === "0" ? "150px" : "0"

    setOpen(newVal)
    setRotation(rotation + 180)
  }

  const handleGameChange = val => {
    updateGame(val)
    toggleDropdown()
  }

  return (
    <div sx={{ position: "absolute", top: "0", right: "0", padding: "1rem" }}>
      <div
        sx={{
          width: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
        onClick={() => toggleDropdown()}
        tabIndex={0}
        onKeyPress={event => {
          if (event.key === "Enter") {
            toggleDropdown()
          }
        }}
      >
        <p
          sx={{
            ...pStyles,
            marginRight: "4px",
            padding: "0",
            borderBottom: "none",
            color: "#fefefe",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          {replaceUnderscoreWithSpace(game)}
        </p>

        <motion.div
          animate={{ rotate: rotation }}
          sx={{
            transformOrigin: "center",
            width: "1.25rem",
            height: "1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "1.5px solid #000",
            bg: "#fefefe66",
          }}
        >
          <FiChevronDown
            sx={{
              fontSize: "1rem",
              color: "#000",
              strokeWidth: "3px",
            }}
          />
        </motion.div>
      </div>
      <motion.div
        sx={{
          overflowY: "scroll",
          bg: "background",
          position: "relative",
          zIndex: "5",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridGap: "4px",
          scrollSnapType: "y proximity",
          borderRadius: "5px",
        }}
        initial={{ height: "0" }}
        animate={{ height: open }}
        transition={{
          duration: 0.15,
          type: "tween",
        }}
      >
        <p
          value="yellow"
          sx={pStyles}
          onClick={() => handleGameChange("yellow")}
        >
          Yellow
        </p>
        <p value="red" sx={pStyles} onClick={() => handleGameChange("red")}>
          Red
        </p>
        <p value="blue" sx={pStyles} onClick={() => handleGameChange("blue")}>
          Blue
        </p>
        <p value="gold" sx={pStyles} onClick={() => handleGameChange("gold")}>
          Gold
        </p>
        <p
          value="silver"
          sx={pStyles}
          onClick={() => handleGameChange("silver")}
        >
          Silver
        </p>
        <p
          value="crystal"
          sx={pStyles}
          onClick={() => handleGameChange("crystal")}
        >
          Crystal
        </p>
        <p value="ruby" sx={pStyles} onClick={() => handleGameChange("ruby")}>
          Ruby
        </p>
        <p
          value="sapphire"
          sx={pStyles}
          onClick={() => handleGameChange("sapphire")}
        >
          Sapphire
        </p>
        <p
          value="emerald"
          sx={pStyles}
          onClick={() => handleGameChange("emerald")}
        >
          Emerald
        </p>
        <p
          value="firered"
          sx={pStyles}
          onClick={() => handleGameChange("firered")}
        >
          Firered
        </p>
        <p
          value="leafgreen"
          sx={pStyles}
          onClick={() => handleGameChange("leafgreen")}
        >
          Leafgreen
        </p>
        <p
          value="diamond"
          sx={pStyles}
          onClick={() => handleGameChange("diamond")}
        >
          Diamond
        </p>
        <p value="pearl" sx={pStyles} onClick={() => handleGameChange("pearl")}>
          Pearl
        </p>
        <p
          value="platinum"
          sx={pStyles}
          onClick={() => handleGameChange("platinum")}
        >
          Platinum
        </p>
        <p
          value="heartgold"
          sx={pStyles}
          onClick={() => handleGameChange("heartgold")}
        >
          Heartgold
        </p>
        <p
          value="soulsilver"
          sx={pStyles}
          onClick={() => handleGameChange("soulsilver")}
        >
          Soulsilver
        </p>
        <p value="black" sx={pStyles} onClick={() => handleGameChange("black")}>
          Black
        </p>
        <p value="white" sx={pStyles} onClick={() => handleGameChange("white")}>
          White
        </p>
        <p
          value="colosseum"
          sx={pStyles}
          onClick={() => handleGameChange("colosseum")}
        >
          Colosseum
        </p>
        <p value="xd" sx={pStyles} onClick={() => handleGameChange("xd")}>
          XD
        </p>
        <p
          value="black2"
          sx={pStyles}
          onClick={() => handleGameChange("black-2")}
        >
          Black 2
        </p>
        <p
          value="white2"
          sx={pStyles}
          onClick={() => handleGameChange("white-2")}
        >
          White 2
        </p>
        <p value="x" sx={pStyles} onClick={() => handleGameChange("x")}>
          X
        </p>
        <p value="y" sx={pStyles} onClick={() => handleGameChange("y")}>
          Y
        </p>
        <p
          value="omegaRuby"
          sx={pStyles}
          onClick={() => handleGameChange("omega-ruby")}
        >
          Omega Ruby
        </p>
        <p
          value="alphaSapphire"
          sx={pStyles}
          onClick={() => handleGameChange("alpha-sapphire")}
        >
          Alpha Sapphire
        </p>
        <p value="sun" sx={pStyles} onClick={() => handleGameChange("sun")}>
          Sun
        </p>
        <p value="moon" sx={pStyles} onClick={() => handleGameChange("moon")}>
          Moon
        </p>
        <p
          value="ultraSun"
          sx={pStyles}
          onClick={() => handleGameChange("ultra-sun")}
        >
          Ultra Sun
        </p>
        <p
          value="ultraMoon"
          sx={pStyles}
          onClick={() => handleGameChange("ultra-moon")}
        >
          Ultra Moon
        </p>
        <p
          value="letsGoPikachu"
          sx={pStyles}
          onClick={() => handleGameChange("lets-go-pikachu")}
        >
          Let's Go Pikachu
        </p>
        <p
          value="letsGoEevee"
          sx={pStyles}
          onClick={() => handleGameChange("lets-go-eevee")}
        >
          Let's Go Eevee
        </p>
        <p value="sword" sx={pStyles} onClick={() => handleGameChange("sword")}>
          Sword
        </p>
        <p
          value="shield"
          sx={pStyles}
          onClick={() => handleGameChange("shield")}
        >
          Shield
        </p>
      </motion.div>
    </div>
  )
}

export default GameSelect
