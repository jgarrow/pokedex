/** @jsx jsx */
import { jsx } from "theme-ui"

import { getTypeEffectiveness } from "../utils/getTypeEffectiveness"

import TypeGroup from "./TypeIconGroup"

const labelStyles = {
  width: "100%",
  maxWidth: "60px",
  height: "2rem",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  borderRadius: "6px",
  boxSizing: "border-box",
  padding: "4px",
  color: "#fefefe",
}

const TypeEffectiveness = ({ name, types }) => {
  const type1 = types[0]
  const type2 = types[1] ? types[1] : null
  const typeEffects = getTypeEffectiveness(type1, type2)
  const underlines = []
  // to know how many "RowUnderlines" we need in the type effectiveness chart
  const numOfRows = Object.keys(typeEffects).reduce((acc, curr) => {
    if (typeEffects[curr].length > acc) {
      acc = typeEffects[curr].length
    }

    return acc
  }, 0)

  console.log("typeEffects: ", typeEffects)
  console.log("numOfRows: ", numOfRows)

  for (let i = 0; i < numOfRows - 1; i++) {
    underlines.push(
      <span
        key={`underline-row-${i + 3}`}
        sx={{
          gridColumn: "1 / span 5",
          height: "0",
          width: "100%",
          borderBottom: "1px solid #f0f0f0",
          gridRowStart: i + 3,
        }}
      />
    )
  }

  return (
    <div sx={{ marginBottmo: "1rem" }}>
      <h3 sx={{ textAlign: "start" }}>Type Effectiveness</h3>
      <p sx={{ textAlign: "start" }}>
        Effectiveness of each type on{" "}
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </p>

      <div
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "[no-effect] minmax(45px, 1fr) [quarter]minmax(45px, 1fr) [half] minmax(45px, 1fr) [double] minmax(45px, 1fr) [four] minmax(45px, 1fr)",
          gridColumnGap: "10px",
          gridRowGap: "5px",
          gridTemplateRows: `repeat(${numOfRows + 1}, 45px)`,
        }}
      >
        <p style={{ ...labelStyles, backgroundColor: `#2E3436` }}>0</p>
        <p style={{ ...labelStyles, backgroundColor: `#7C0000` }}>1/4x</p>
        <p style={{ ...labelStyles, backgroundColor: `#A40000` }}>1/2x</p>
        <p style={{ ...labelStyles, backgroundColor: `#4E9A06` }}>2x</p>
        <p style={{ ...labelStyles, backgroundColor: `#73D216` }}>4x</p>

        {underlines.map(unline => unline)}

        <TypeGroup
          pokemonName={name}
          typeArray={typeEffects.zero}
          damageAmount="no"
          column="no-effect"
        />
        <TypeGroup
          pokemonName={name}
          typeArray={typeEffects.quarter}
          damageAmount="quarter"
          column="quarter"
        />
        <TypeGroup
          pokemonName={name}
          typeArray={typeEffects.half}
          damageAmount="half"
          column="half"
        />
        <TypeGroup
          pokemonName={name}
          typeArray={typeEffects.two}
          damageAmount="double"
          column="double"
        />
        <TypeGroup
          pokemonName={name}
          typeArray={typeEffects.four}
          damageAmount="four"
          column="four"
        />
      </div>
    </div>
  )
}

export default TypeEffectiveness
