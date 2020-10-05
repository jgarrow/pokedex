/** @jsx jsx */
import { jsx } from "theme-ui"

const ItemCard = ({ item, toggleModal }) => {
  return (
    <li
      sx={{
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
        padding: "0.5rem",
        width: "100%",
        height: "60px",
        perspective: `1000px`,
        background: `transparent`,
        borderRadius: `12px`,
        scrollSnapAlign: `center`,
        boxSizing: `border-box`,
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        bg: "background",
      }}
      onClick={() => toggleModal(item)}
    >
      <div sx={{ height: "45px" }}>
        <img src={item.sprite} alt={item.name} sx={{ height: "100%" }} />
      </div>
      <p sx={{ margin: "0" }}>{item.name}</p>
    </li>
  )
}

export default ItemCard
