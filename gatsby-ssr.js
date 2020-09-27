const React = require("react")
const { AnimateSharedLayout } = require("framer-motion")

exports.wrapRootElement = ({ element }) => {
  return <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
}
