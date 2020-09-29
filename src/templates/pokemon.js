/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

// import Header from "../components/Header"
// import Nav from "../components/PokemonNav"
import About from "../components/About"
import PokemonLayout from "../components/PokemonLayout"

// import pokeball from "../images/pokeball-bg-sm.svg"

// import styles from "../styles.css"

const Pokemon = ({
  data,
  pageContext: {
    id,
    name,
    dominant_color,
    allPokemon,
    prevPokemonId, // getting used in the graphql query below
    nextPokemonId, // getting used in the graphql query below
  },
}) => {
  const pokemon = {
    ...data.pokeapi.pokemon,
    id: id,
    dominant_color: dominant_color,
    name,
  }

  // const prevPokemon = data.pokeapi.prevPokemon
  // const nextPokemon = data.pokeapi.nextPokemon

  return (
    <PokemonLayout pokemon={pokemon}>
      <About pokemon={pokemon} />
    </PokemonLayout>
    // <motion.div
    //   layoutId={`pokemon-${pokemon.name}`}
    //   sx={{
    //     backgroundColor: dominant_color,
    //     position: "relative",
    //     width: "100%",
    //     height: "100vh",
    //     zIndex: 1000,
    //   }}
    // >
    //   <Header name={name} />
    //   <motion.div
    //     transition={{ duration: 0.4 }}
    //     sx={{
    //       height: "75%",
    //       width: "75%",
    //       maxWidth: "250px",
    //       maxHeight: "250px",
    //       position: "relative",
    //       margin: "0 auto",
    //     }}
    //   >
    //     <motion.img
    //       src={`https://raw.githubusercontent.com/jgarrow/graphql-server-pokeapi/master/img/official-artwork/${id}.png`}
    //       alt={`${pokemon.name}`}
    //       layoutId={`${pokemon.name}-image`}
    //       sx={{
    //         width: "100%",
    //         position: "relative",
    //         backgroundImage: `url(${pokeball})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundSize: "80%",
    //         backgroundPosition: "center",
    //       }}
    //     />
    //   </motion.div>

    //   <Nav name={name} />
    //   <motion.section
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
    //     initial={{
    //       opacity: 0,
    //       y: 40,
    //     }}
    //     animate={{
    //       opacity: 1,
    //       y: 0,
    //       transition: { delay: 0.5 },
    //     }}
    //   >
    //     <About pokemon={pokemon} />
    //   </motion.section>
    // </motion.div>
  )
}

export const query = graphql`
  query($id: Int!, $prevPokemonId: Int!, $nextPokemonId: Int!) {
    pokeapi {
      pokemon(id: $id) {
        ...PokemonFragment
      }
      prevPokemon: pokemon(id: $prevPokemonId) {
        id
        name
      }
      nextPokemon: pokemon(id: $nextPokemonId) {
        id
        name
      }
    }
  }
`

export default Pokemon
