/** @jsx jsx */
import { jsx } from "theme-ui"

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

const MoveCardBack = ({ move }) => {
  return (
    <div
      sx={{
        position: "absolute",
        WebkitBackfaceVisibility: "hidden", // for Safari
        backfaceVisibility: "hidden",
        bg: "background",
        transform: "rotateY(180deg)",
        height: "100%",
        width: "100%",
        borderRadius: "8px",
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
        <label htmlFor="power" sx={labelStyles}>
          Power
        </label>
        <p id="power" sx={pStyles}>
          {move.power}
        </p>

        <label htmlFor="pp" sx={labelStyles}>
          PP
        </label>
        <p id="pp" sx={pStyles}>
          {move.pp}
        </p>

        <span sx={rowUnderline} />

        <label htmlFor="accuracy" sx={labelStyles}>
          Acc.
        </label>
        <p id="accuracy" sx={pStyles}>
          {move.accuracy}
        </p>

        <label htmlFor="effect" sx={labelStyles}>
          Effect
        </label>
        <p id="effect" sx={pStyles}>
          {move.effect_chance ? `${move.effect_chance}%` : "--"}
        </p>

        <span sx={rowUnderline} />
      </div>

      {/* get game name from Context to use here */}
      <p sx={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0" }}>
        {move.description ? move.description : `No description for yellow`}
      </p>
    </div>
  )
}

export default MoveCardBack
