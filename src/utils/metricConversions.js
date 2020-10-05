export const decimetersToMeters = dec => {
  return (dec * 0.1).toFixed(1)
}

export const metersToFeet = meters => {
  const feet = meters * 3.28084

  const totalFeet = Math.floor(feet)
  const remainingInches = (feet % 1) * 12

  return `${totalFeet}' ${Math.round(remainingInches)}"`
}

export const hectogramsToKg = hectos => {
  return (hectos * 0.1).toFixed(1)
}

export const kgToPounds = kilos => {
  return (kilos * 2.20462).toFixed(1)
}
