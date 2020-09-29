/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"

import { getTiers } from "../utils/getEvolutionTiers"

// import Header from "../components/Header"
// import Nav from "../components/PokemonNav"
import Evolution from "../components/Evolution"
import PokemonLayout from "../components/PokemonLayout"

// import pokeball from "../images/pokeball-bg-sm.svg"

// import styles from "../styles.css"

const PokemonEvolution = ({
  data,
  pageContext: { id, name, dominant_color },
}) => {
  const pokemon = { ...data.pokeapi.pokemon, name, id, dominant_color }
  console.log(pokemon)
  const tiers = getTiers(pokemon)

  return (
    <PokemonLayout pokemon={pokemon}>
      <Evolution pokemon={pokemon} evolutionTiers={tiers} />
    </PokemonLayout>
    // <div
    //   sx={{
    //     backgroundColor: dominant_color,
    //     position: "relative",
    //     width: "100%",
    //     height: "100vh",
    //     zIndex: 1000,
    //   }}
    // >
    //   <Header name={name} />
    //   <div
    //     sx={{
    //       height: "75%",
    //       width: "75%",
    //       maxWidth: "250px",
    //       maxHeight: "250px",
    //       position: "relative",
    //       margin: "0 auto",
    //     }}
    //   >
    //     <img
    //       src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${id}.png`}
    //       alt={`${pokemon.name}`}
    //       sx={{
    //         width: "100%",
    //         position: "relative",
    //         backgroundImage: `url(${pokeball})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundSize: "80%",
    //         backgroundPosition: "center",
    //       }}
    //     />
    //   </div>

    //   <Nav name={name} />
    //   <section
    //     sx={{
    //       borderTopLeftRadius: "12px",
    //       borderTopRightRadius: "12px",
    //       display: "grid",
    //       gridGap: "15px",
    //       gridTemplateColumns: "1fr",
    //       padding: "1rem",
    //       overflowY: "scroll",
    //       bg: "background",
    //     }}
    //   >
    //     <Evolution pokemon={pokemon} evolutionTiers={tiers} />
    //   </section>
    // </div>
  )
}

export const query = graphql`
  query($id: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonEvolutionDataFragment
        ...PokemonEvolutionFragment
        ...PokemonBannerFragment
      }
    }
  }
`

export default PokemonEvolution
