export const getTypeEffectiveness = (type1, type2) => {
  const effects = {
    four: [],
    two: [],
    half: [],
    quarter: [],
    zero: [],
  }

  // just get list of strings with type names
  const type1Double = type1.double_damage_from.map(type => type.name)
  const type1Half = type1.half_damage_from.map(type => type.name)
  const type1Zero = type1.no_damage_from.map(type => type.name)

  if (type2) {
    // just get list of strings with type names
    const type2Double = type2.double_damage_from.map(type => type.name)
    const type2Half = type2.half_damage_from.map(type => type.name)
    const type2Zero = type2.no_damage_from.map(type => type.name)

    // concat type1 and type2 arrays into 1
    const allDoubles = type1Double.concat(type2Double)
    const allHalves = type1Half.concat(type2Half)
    const allZeros = type1Zero.concat(type2Zero)

    // not really "deduping" doubles -- grabbing all of doubles that occur in both types and pushing them to the four times damage array
    // otherwise it gets pushed into the two times array, unless it gets negated by a 1/2 or zero damage from the other type
    const allDoublesDeduped = allDoubles.reduce((acc, curr) => {
      // check if second type is half or zero and negates it
      if (!allHalves.includes(curr) && !allZeros.includes(curr)) {
        if (!acc.includes(curr)) {
          acc.push(curr)
        } else {
          // if there's more than 1 of same type in allDoubles, that means both types had it and it should be bumped to four
          effects.four.push(curr)
        }
      }

      return acc
    }, [])

    // get rid of any types in two that are in four
    effects.two = allDoublesDeduped.filter(type => !effects.four.includes(type))

    // not really "deduping" halves -- grabbing all of halves that occur in both types and pushing them to the quarter times damage array
    // otherwise it gets pushed into the half array, unless it gets negated by a double or zero damage from the other type
    const allHalvesDeduped = allHalves.reduce((acc, curr) => {
      // check if second type is double or zero and negates it
      if (!allDoubles.includes(curr) && !allZeros.includes(curr)) {
        if (!acc.includes(curr)) {
          acc.push(curr)
        } else {
          // if there's more than 1 of same type in allHalves, that means both types had it and it should be bumped to quarter
          effects.quarter.push(curr)
        }
      }

      return acc
    }, [])

    // get rid of any types in half that are in quarter
    effects.half = allHalvesDeduped.filter(
      type => !effects.quarter.includes(type)
    )

    // get rid of any duplicates in allZeros
    effects.zero = [...new Set(allZeros)]
  } else {
    effects.two = type1Double
    effects.half = type1Half
    effects.zero = type1Zero
  }

  return effects
}
