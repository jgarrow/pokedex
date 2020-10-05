/** @jsx jsx */
import { jsx } from "theme-ui"
import { useContext, useState } from "react"
import { GameContext } from "../context/GameContext"
import { motion } from "framer-motion"

import { FiChevronDown } from "react-icons/fi"
import { replaceUnderscoreWithSpace } from "../utils/stringParsing"

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
      >
        <p
          sx={{
            ...pStyles,
            marginRight: "4px",
            padding: "0",
            borderBottom: "none",
          }}
        >
          {replaceUnderscoreWithSpace(game)}
        </p>

        <motion.div
          animate={{ rotate: rotation }}
          sx={{
            transformOrigin: "center",
            width: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FiChevronDown sx={{ fontSize: "1.5rem" }} />
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
          onClick={() => handleGameChange("black_2")}
        >
          Black 2
        </p>
        <p
          value="white2"
          sx={pStyles}
          onClick={() => handleGameChange("white_2")}
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
          onClick={() => handleGameChange("omega_ruby")}
        >
          Omega Ruby
        </p>
        <p
          value="alphaSapphire"
          sx={pStyles}
          onClick={() => handleGameChange("alpha_sapphire")}
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
          onClick={() => handleGameChange("ultra_sun")}
        >
          Ultra Sun
        </p>
        <p
          value="ultraMoon"
          sx={pStyles}
          onClick={() => handleGameChange("ultra_moon")}
        >
          Ultra Moon
        </p>
        <p
          value="letsGoPikachu"
          sx={pStyles}
          onClick={() => handleGameChange("lets_go_pikachu")}
        >
          Let's Go Pikachu
        </p>
        <p
          value="letsGoEevee"
          sx={pStyles}
          onClick={() => handleGameChange("lets_go_eevee")}
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

{
  /* <select
        id="game-select"
        name="game-select"
        onBlur={handleGameChange}
        onChange={handleGameChange}
        sx={{
          padding: "5px",
          paddingRight: "1.5rem", // gives room for the bg image arrow
          width: "fit-content",
          border: "none",
          fontSize: "1rem",
          boxSizing: "border-box",
          appearance: "none", // hides the default arrow
          fontFamily: "inherit",
          cursor: "pointer",
          lineHeight: "inherit",
          bg: "transparent",
          backgroundImage: `url(${downArrow})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "1.5rem",
          textAlignLast: "right", // does not work on iOS :(
        }}
      >
        <option value="yellow">Yellow</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
        <option value="crystal">Crystal</option>
        <option value="ruby">Ruby</option>
        <option value="sapphire">Sapphire</option>
        <option value="emerald">Emerald</option>
        <option value="firered">Firered</option>
        <option value="leafgreen">Leafgreen</option>
        <option value="diamond">Diamond</option>
        <option value="pearl">Pearl</option>
        <option value="platinum">Platinum</option>
        <option value="heartgold">Heartgold</option>
        <option value="soulsilver">Soulsilver</option>
        <option value="black">Black</option>
        <option value="white">White</option>
        <option value="colosseum">Colosseum</option>
        <option value="xd">XD</option>
        <option value="black2">Black 2</option>
        <option value="white2">White 2</option>
        <option value="x">X</option>
        <option value="y">Y</option>
        <option value="omegaRuby">Omega Ruby</option>
        <option value="alphaSapphire">Alpha Sapphire</option>
        <option value="sun">Sun</option>
        <option value="moon">Moon</option>
        <option value="ultraSun">Ultra Sun</option>
        <option value="ultraMoon">Ultra Moon</option>
        <option value="letsGoPikachu">Let's Go Pikachu</option>
        <option value="letsGoEevee">Let's Go Eevee</option>
        <option value="sword">Sword</option>
        <option value="shield">Shield</option>
      </select> */
}
