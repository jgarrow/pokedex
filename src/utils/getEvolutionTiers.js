export const getTiers = (currentPokemon, newSelected) => {
  console.log("currentPokemon : ", currentPokemon)
  const tiers = []

  // get to lowest evolution tier pokemon, regardless of whose page we're on
  const getLowerTier = mon => {
    if (mon.evolves_from) {
      return getLowerTier(mon.evolves_from)
    }
    tiers.push({
      pokemon: [mon],
      selected: 0,
      // pos: 0
    })
  }

  getLowerTier(currentPokemon)

  // get all of the evolution tiers above the lowest
  const getHigherTiers = mon => {
    // if the pokemon can evolve
    if (mon.evolves_to && mon.evolves_to.length > 0) {
      // selected will be -1 if the tier we're currently getting does not include our currentPokemon
      const selected = mon.evolves_to.findIndex(
        ({ id }) => id === currentPokemon.id
      )

      if (mon.evolves_to.length > 1 && newSelected) {
        tiers.push({
          pokemon: [...mon.evolves_to],
          selected: newSelected,
          // pos: newSelected >= 0 ? newSelected * 100 : 0,
        })
      } else {
        tiers.push({
          pokemon: [...mon.evolves_to],
          selected: selected >= 0 ? selected : 0,
          // pos: selected >= 0 ? newSelected * 100 : 0,
        })
      }

      // if the tier we're currently getting has our currentPokemon,  get the next tier for just our currentPokemon
      if (mon.evolves_to.length > 1 && newSelected) {
        getHigherTiers(mon.evolves_to[newSelected])
      } else if (selected >= 0) {
        getHigherTiers(mon.evolves_to[selected])

        // else keep going and getting the next tier
      } else {
        getHigherTiers(mon.evolves_to[0])
      }
    }
  }

  getHigherTiers(tiers[0].pokemon[0])

  return tiers
}
