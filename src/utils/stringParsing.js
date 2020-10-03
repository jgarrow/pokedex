export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.substring(1)
}

export const replaceHyphenWithSpace = string => {
  const replacedWithSpaces = string.replace(/-/g, " ")

  const allWordsCapitalized = replacedWithSpaces
    .toLowerCase()
    .split(" ")
    .map(s => capitalizeFirstLetter(s))
    .join(" ")

  return allWordsCapitalized
}
