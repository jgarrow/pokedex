/** @jsx jsx */
import { jsx } from "theme-ui"

import pokeDollar from "../images/poke-dollar.png"

const rowUnderline = {
  gridColumn: "1 / span 4",
  height: "0",
  width: "100%",
  borderBottom: "1px solid #f0f0f0",
}

const pStyles = {
  margin: "0.5rem 0",
}

const labelStyles = {
  color: "#737373",
  justifySelf: "flex-start",
  textAlign: "initial",
  margin: "0.5rem 0",
}

const ItemModal = ({ item }) => {
  return (
    <div
      sx={{
        bg: "background",
        padding: "0.5rem",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        width: "90%",
        height: "auto",
        maxHeight: "300px",
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translate(-50%, 50%)",
        overflowY: "scroll",
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 60px 1fr)",
          gridColumnGap: "15px",
          alignItems: "baseline",
        }}
      >
        <label htmlFor="name" sx={labelStyles}>
          Name
        </label>
        <p id="name" sx={pStyles}>
          {item.name}
        </p>

        <label htmlFor="cost" sx={labelStyles}>
          Cost
        </label>
        <p id="cost" sx={{ ...pStyles, display: "flex", alignItems: "center" }}>
          <img src={pokeDollar} alt={item.name} sx={{ height: "1rem" }} />
          {item.cost}
        </p>

        <span sx={rowUnderline} />

        <label htmlFor="bagPocket" sx={labelStyles}>
          Bag Pocket
        </label>
        <p id="bagPocket" sx={pStyles}>
          {item.bag_pocket}
        </p>

        <label htmlFor="effect" sx={labelStyles}>
          Effect
        </label>
        <p id="effect" sx={pStyles}>
          {item.name}
        </p>

        <span sx={rowUnderline} />
      </div>
      <p
        sx={{
          textAlign: "center",
          marginTop: "0.5rem",
          marginBottom: "0",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {item.effect ? item.effect : `No effect for ${item.name}`}
      </p>
      <p sx={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0" }}>
        {item.description
          ? item.description
          : `No description for ${item.name}`}
      </p>
    </div>
  )
}

export default ItemModal
