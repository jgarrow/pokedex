import { funk } from "@theme-ui/presets"
import { lighten } from "@theme-ui/color"

console.log(lighten("rgb(207, 147, 98)", 0.2))

export default {
  ...funk,
  styles: {
    ...funk.styles,
  },
}
