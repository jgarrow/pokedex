// From https://css-tricks.com/snippets/javascript/lighten-darken-color/
export const lightenDarkenColor = (color, amt) => {
  let col = color
  if (col.includes("rgb")) {
    const { r, g, b } = getRGB(col)
    col = rgbToHex(r, g, b)
  }
  let usePound = true

  if (col[0] === "#") {
    col = col.slice(1)
    usePound = true
  }

  let num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}

// From https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#answer-39077686
export const rgbToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? "0" + hex : hex
    })
    .join("")

export const getRGB = rgb => {
  // remove rgb
  const withoutRgb = rgb.replace("rgb", "")

  // remove parents
  const withoutParens = withoutRgb.replace("(", "").replace(")", "")

  // remove spaces
  const withoutSpaces = withoutParens.replaceAll(" ", "")

  // split values
  const values = withoutSpaces.split(",")

  return {
    r: Number(values[0]),
    g: Number(values[1]),
    b: Number(values[2]),
  }
}
