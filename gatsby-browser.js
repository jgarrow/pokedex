const React = require("react")
require("typeface-ubuntu")
const { AnimateSharedLayout } = require("framer-motion")

exports.wrapRootElement = ({ element }) => {
  return <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
}
