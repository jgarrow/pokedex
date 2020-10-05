/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment, useState } from "react"

import ItemCard from "./ItemCard"
import ItemModal from "./ItemModal"

const ItemsList = ({ items }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalItem, setModalItem] = useState(items[0])

  const toggleModal = item => {
    console.log("item in toggleModal: ", item)
    setModalItem(item)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Fragment>
      <ul
        sx={{
          padding: "0",
          width: "100%",
          marginBottom: "0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))",
          gridGap: "1rem",
          scrollSnapType: "y mandatory",
        }}
      >
        {items &&
          items.map(item => (
            <ItemCard
              key={`item-${item.id}`}
              item={item}
              toggleModal={toggleModal}
            />
          ))}
      </ul>

      {isModalOpen ? <ItemModal item={modalItem} /> : null}
    </Fragment>
  )
}

export default ItemsList
