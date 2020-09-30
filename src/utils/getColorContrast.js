export const getContrast = (r, g, b) => {
  const yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? "rgb(1,1,1)" : "rgb(254, 254, 254)"
}
