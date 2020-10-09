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

export const replaceUnderscoreWithSpace = string => {
  const replacedWithSpaces = string.replace(/_/g, " ")

  const allWordsCapitalized = replacedWithSpaces
    .toLowerCase()
    .split(" ")
    .map(s => capitalizeFirstLetter(s))
    .join(" ")

  return allWordsCapitalized
}

export const replaceHyphenWithUnderscore = string => {
  return string.replace(/-/g, "_")
}

export const replaceUnderscoreWithHyphen = string => {
  return string.replace(/_/g, "-")
}

export const locationIsFromIndPokemon = locationState => {
  if (locationState && locationState.prevPath) {
    let pathArr = locationState.prevPath.split("/")
    pathArr = pathArr.filter(str => str !== "") // removes empty strings where the `/` were in the original string

    if (pathArr[0] === "pokemon" && pathArr.length > 1) {
      return true
    } else {
      return false
    }
  }

  return false
}
