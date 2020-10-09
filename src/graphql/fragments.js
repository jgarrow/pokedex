import { graphql } from "gatsby"

export const pokemonBannerFragment = graphql`
  fragment PokemonBannerFragment on Pokeapi_Pokemon {
    nat_dex_num
    types {
      name
    }
  }
`

export const pokemonFragment = graphql`
  fragment PokemonFragment on Pokeapi_Pokemon {
    pokedex_entries {
      description
      game {
        name
      }
    }

    genus
    abilities {
      name
      is_hidden
    }
    height
    weight

    egg_groups {
      name
    }
    hatch_counter
    gender_rate

    capture_rate
    base_experience
    growth_rate
    base_happiness

    locations {
      name
      games {
        name
      }
    }

    games {
      name
      generation
      regions {
        name
      }
    }
  }
`

export const pokemonStatsFragment = graphql`
  fragment PokemonStatsFragment on Pokeapi_Pokemon {
    base_stats {
      hp
      attack
      defense
      special_attack
      special_defense
      speed
    }
    types {
      name
      double_damage_from {
        name
      }
      half_damage_from {
        name
      }
      no_damage_from {
        name
      }
    }
  }
`

export const pokemonEvolutionFragment = graphql`
  fragment PokemonEvolutionFragment on Pokeapi_Pokemon {
    evolves_to {
      ...PokemonEvolutionDataFragment
      evolves_from {
        ...PokemonEvolutionDataFragment
      }
      evolves_to {
        ...PokemonEvolutionDataFragment
        evolves_from {
          ...PokemonEvolutionDataFragment
        }
        evolves_to {
          ...PokemonEvolutionDataFragment
          evolves_from {
            ...PokemonEvolutionDataFragment
          }
          evolves_to {
            ...PokemonEvolutionDataFragment
          }
        }
      }
    }
    evolves_from {
      ...PokemonEvolutionDataFragment
      evolves_to {
        ...PokemonEvolutionDataFragment
        evolves_to {
          ...PokemonEvolutionDataFragment
          evolves_to {
            ...PokemonEvolutionDataFragment
          }
        }
      }
      evolves_from {
        ...PokemonEvolutionDataFragment
        evolves_to {
          ...PokemonEvolutionDataFragment
          evolves_to {
            ...PokemonEvolutionDataFragment
            evolves_to {
              ...PokemonEvolutionDataFragment
            }
          }
        }
        evolves_from {
          ...PokemonEvolutionDataFragment
          evolves_to {
            ...PokemonEvolutionDataFragment
            evolves_to {
              ...PokemonEvolutionDataFragment
              evolves_to {
                ...PokemonEvolutionDataFragment
              }
            }
          }
          evolves_from {
            ...PokemonEvolutionDataFragment
          }
        }
      }
    }
  }
`

export const pokemonEvolutionDataFragment = graphql`
  fragment PokemonEvolutionDataFragment on Pokeapi_Pokemon {
    id
    name
    generation
    evolution_trigger
    evolution_criteria {
      ... on Pokeapi_Move {
        evolution_criteria_name
        name
      }
      ... on Pokeapi_Item {
        id
        evolution_criteria_name
        name
        cost
        bag_pocket
        effect
        description
      }
      ... on Pokeapi_Type {
        evolution_criteria_name
        name
      }
      ... on Pokeapi_Location {
        evolution_criteria_name
        name
        region {
          name
        }
        games {
          name
        }
      }
      ... on Pokeapi_Gender {
        evolution_criteria_name
        name
      }
      ... on Pokeapi_OtherEvolutionCriteria {
        evolution_criteria_name
        value
      }
    }
  }
`

export const pokemonMovesFragment = graphql`
  fragment PokemonMovesFragment on Pokeapi_Pokemon {
    yellow: moves(game: "yellow") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    red: moves(game: "red") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    blue: moves(game: "blue") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    gold: moves(game: "gold") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    silver: moves(game: "silver") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    crystal: moves(game: "crystal") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    ruby: moves(game: "ruby") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    sapphire: moves(game: "sapphire") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    emerald: moves(game: "emerald") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    firered: moves(game: "firered") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    leafgreen: moves(game: "leafgreen") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    diamond: moves(game: "diamond") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    pearl: moves(game: "pearl") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    platinum: moves(game: "platinum") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    heartgold: moves(game: "heartgold") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    soulsilver: moves(game: "soulsilver") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    black: moves(game: "black") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    white: moves(game: "white") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    colosseum: moves(game: "colosseum") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    xd: moves(game: "xd") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    black_2: moves(game: "black-2") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    white_2: moves(game: "white-2") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    x: moves(game: "x") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    y: moves(game: "y") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    omega_ruby: moves(game: "omega-ruby") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    alpha_sapphire: moves(game: "alpha-sapphire") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    sun: moves(game: "sun") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    moon: moves(game: "moon") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    ultra_sun: moves(game: "ultra-sun") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    ultra_moon: moves(game: "ultra-moon") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    lets_go_pikachu: moves(game: "lets-go-pikachu") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    lets_go_eevee: moves(game: "lets-go-eevee") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    sword: moves(game: "sword") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
    shield: moves(game: "shield") {
      name
      power
      accuracy
      pp
      priority
      ailment
      type {
        name
      }
      damage_class
      effect_chance
      effect
      description
      learn_methods {
        method
        level_learned_at
      }
    }
  }
`
