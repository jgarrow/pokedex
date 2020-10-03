/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { Link } from "gatsby"

import PokemonList from "../components/PokemonList"
import { RiArrowGoBackFill } from "react-icons/ri"

import pokeball from "../images/header-pokeball.svg"

const Home = ({ pageContext: { allPokemon } }) => {
  return (
    <Fragment>
      <header
        sx={{
          width: "100%",
          padding: "1rem 0.5rem 0",
          marginBottom: "1.5rem",
        }}
      >
        <Link to="/" sx={{ color: "text" }}>
          <RiArrowGoBackFill sx={{ fontSize: "1.5rem" }} />
        </Link>
        <h1
          sx={{
            margin: "0",
            fontSize: "2.5rem",

            "::after": {
              content: '""',
              position: "absolute",
              top: "0",
              right: "0",
              backgroundImage: `url(${pokeball})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "175px",
              height: "175px",
              width: "175px",
            },
          }}
        >
          Pokédex
        </h1>
        {/* <svg
          width="137"
          height="147"
          viewBox="0 0 137 147"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M87.4997 146.047C43.6738 146.018 7.36105 114.258 0.835266 72.7674L45.4102 72.6861C51.1047 90.2824 67.7937 103.021 87.4997 103.031C107.174 103.008 123.84 90.2907 129.556 72.7257L174.116 72.6861C167.636 114.202 131.332 145.993 87.4997 146.047ZM87.4997 87.6918C71.6526 87.6918 58.8057 75.0015 58.8057 59.3476C58.8057 43.6938 71.6526 31.0035 87.4997 31.0035C103.347 31.0035 116.194 43.6938 116.194 59.3476C116.194 75.0015 103.347 87.6918 87.4997 87.6918ZM0.883794 46.0092C7.36316 4.49339 43.6675 -27.2979 87.4997 -27.3521C131.326 -27.3229 167.638 4.43712 174.164 45.9279L129.589 46.0092C123.895 28.4129 107.206 15.6747 87.4997 15.6643C67.8253 15.6872 51.1596 28.4046 45.444 45.9696L0.883794 46.0092Z"
              fill="#D0C6C6"
              fill-opacity="0.3"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="175"
                height="175"
                fill="white"
                transform="matrix(1 0 0 -1 0 147)"
              />
            </clipPath>
          </defs>
        </svg> */}
      </header>
      <PokemonList pokemonList={allPokemon} />
    </Fragment>
  )
}

export default Home
