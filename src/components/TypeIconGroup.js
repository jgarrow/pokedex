/** @jsx jsx */
import { jsx } from "theme-ui"

const columnGrid = {
  display: "grid",
  // gridTemplateRows: `repeat(${numRows}, 45px)`,
  // gridColumnStart: column,
  gridRowStart: "2",
  gridGap: "5px",
  marginTop: "5px",
  alignItems: "center",
}

const TypeIcon = ({ type, column, row }) => {
  console.log("type: ", type)
  const imgSrc = require(`../images/type-icons/${type}_icon_SwSh.png`)

  return (
    <div
      sx={{
        width: "80%",
        height: "80%",
        maxHeight: "45px",
        maxWidth: "45px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
        gridColumnStart: column,
        gridRowStart: row,
      }}
    >
      <img src={imgSrc} alt={type} sx={{ height: "100%" }} />
    </div>
  )
}

const TypeGroup = ({ pokemonName, typeArray, damageAmount, column }) => {
  return (
    <div
      sx={{
        ...columnGrid,
        gridTemplateRows: `repeat(${typeArray.length}, 45px)`,
        gridColumnStart: column,
      }}
    >
      {typeArray.map((type, index) => (
        <TypeIcon
          key={`${pokemonName}-${type}-${damageAmount}-damage-${index}`}
          type={type}
        />
      ))}
    </div>
  )
}

export default TypeGroup
