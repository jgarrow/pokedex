/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import AutoSizer from "react-virtualized-auto-sizer"

export const List = ({
  children,
  columns,
  data,
  gap = 0,
  height,
  itemHeight,
  itemRenderer,
  outerElementType = "div",
  width,
  ...rest
}) => {
  const [scrollTop, setScrollTop] = React.useState(() => 0)
  const gridRef = React.useRef(null)
  const onScroll = e =>
    setScrollTop(e.currentTarget.scrollTop < 0 ? 0 : e.currentTarget.scrollTop)
  return (
    <AutoSizer style={{ height: "100%", width: "100%" }}>
      {({ height: availableHeight, width: availableWidth }) => {
        let outerHeight = height
        if (typeof height === "string" && outerHeight.includes("%")) {
          const parsedHeight = parseInt(height)
          console.log(height)
          console.log(parsedHeight)
          outerHeight = Math.ceil((availableHeight * parsedHeight) / 100)
        }

        console.log(outerHeight)
        const Component = outerElementType

        const numItems = data.length
        const numVisibleRows = Math.ceil(outerHeight / itemHeight)
        const totalRows = Math.ceil(numItems / columns)
        const innerHeight = totalRows * itemHeight

        const startIndex = Math.min(
          numItems - numVisibleRows * columns,
          Math.floor(scrollTop / itemHeight) * columns
        )
        const endIndex = Math.min(
          numItems - 1,
          startIndex + numVisibleRows * columns + columns - 1
        )

        const gridHeight =
          Math.ceil((endIndex - startIndex) / columns) * itemHeight
        const gridTop = (startIndex / columns) * itemHeight

        const items = []
        for (let i = startIndex; i <= endIndex; i++) {
          const item = data[i]
          const row = Math.ceil((i - startIndex + 1) / columns)
          const col = ((i - startIndex) % columns) + 1

          const props = {
            key: item.id,
            item,
            style: {
              gridRow: row,
              gridColumn: col,
              width: "100%",
              backgroundColor: item.color,
            },
          }
          items.push(children(props))
        }

        return (
          <div
            className="scroll"
            style={{
              overflowY: "scroll",
              height: outerHeight,
              width,
              position: "relative",
            }}
            onScroll={onScroll}
          >
            <div
              style={{
                width: "100%",
                height: innerHeight,
                maxHeight: innerHeight,
              }}
            >
              <Component
                className="inner"
                ref={gridRef}
                style={{
                  position: "relative",
                  top: gridTop,
                  width: "100%",
                  height: `${gridHeight}px`,
                  display: `grid`,
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
                  gridTemplateRows: `repeat(${
                    numVisibleRows + 1
                  }, ${itemHeight}px)`,
                }}
                {...rest}
              >
                {items}
              </Component>
            </div>
          </div>
        )
      }}
    </AutoSizer>
  )
}
