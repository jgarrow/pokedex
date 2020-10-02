/** @jsx jsx */
import { jsx } from "theme-ui"

import { BsInfoCircle } from "react-icons/bs"

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
  // capitalize first letter of move learn method
  let learnMethod =
    move.learn_methods[0].method.charAt(0).toUpperCase() +
    move.learn_methods[0].method.slice(1)

  // if learn method is not level-up, we just need an empty string
  let level = ""

  if (learnMethod === "Level-up") {
    level = move.learn_methods[0].level_learned_at
    learnMethod = "Lvl"

    // if the level is 1 or 0, it's an inherited move
    // we're not interested in the actual level since a pokemon can only be at level 1 if they're from an egg
    // in which case, the learn method would be egg, if it applies to the pokemon
    if (level < 2) {
      level = "--"
      learnMethod = ""
    }
  }

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
      <label htmlFor="learnMethod" sx={labelStyles}>
        Learn
      </label>
      <p sx={gridContent} id="learnMethod">
        {`${learnMethod} ${level}`}
        {/* {move.learn_methods[0].level_learned_at < 2
          ? "--"
          : `Lvl ${move.learn_methods[0].level_learned_at}`} */}
      </p>

      <span sx={rowUnderline} />

      <label htmlFor="name" sx={labelStyles}>
        Name
      </label>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p sx={gridContent} id="name">
          {move.name}
        </p>
        <BsInfoCircle sx={{ marginLeft: "4px" }} />
      </div>

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
