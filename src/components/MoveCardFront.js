/** @jsx jsx */
import { jsx } from "theme-ui"

const labelStyles = {
  color: "#737373",
  justifySelf: "flex-start",
  textAlign: "initial",
  margin: "0.5rem 0",
}

const gridContent = {
  justifySelf: "flex-start",
  textAlign: "initial",
  margin: "0",
}

const rowUnderline = {
  gridColumn: "1 / span 2",
  height: "0",
  width: "100%",
  borderBottom: "1px solid #f0f0f0",
}

const CategoryIcon = ({ category }) => {
  const imgSrc = require(`../images/attack-${category}.svg`)

  return <img src={imgSrc} alt={`${category} attack`} sx={{ width: "100%" }} />
}

const TypeIcon = ({ type }) => {
  const imgSrc = require(`../images/type-icons/${type}_icon_SwSh.png`)

  return <img src={imgSrc} alt={`${type} type`} sx={{ width: "100%" }} />
}

const MoveCardFront = ({ move }) => {
  console.log("move: ", move)
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gridColumnGap: "15px",
        alignItems: "baseline",
        width: "100%",
        height: "100%",
        bg: "background",
        position: "absolute",
        WebkitBackfaceVisibility: "hidden", // for Safari
        backfaceVisibility: "hidden",
        borderRadius: "8px",
      }}
    >
      <label htmlFor="level" sx={labelStyles}>
        Level
      </label>
      <p sx={gridContent} id="level">
        {move.learn_methods[0].level_learned_at}
      </p>

      <span sx={rowUnderline} />

      <label htmlFor="name" sx={labelStyles}>
        Name
      </label>
      <p sx={gridContent} id="name">
        {move.name}
      </p>

      <span sx={rowUnderline} />

      <label htmlFor="category" sx={labelStyles}>
        Category
      </label>
      <div
        id="category"
        sx={{
          ...gridContent,
          width: "2rem",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <CategoryIcon category={move.damage_class} />
      </div>

      <span sx={rowUnderline} />

      <label htmlFor="type" sx={labelStyles}>
        Type
      </label>
      <div
        id="type"
        sx={{
          ...gridContent,
          width: "1.5rem",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <TypeIcon type={move.type.name} />
      </div>
    </div>
  )
}

export default MoveCardFront
