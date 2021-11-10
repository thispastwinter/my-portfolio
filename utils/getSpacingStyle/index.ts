import { defaultValues } from "~~/theme"
import { Spacing } from "~~/types"

interface Args {
  pt?: Spacing
  pr?: Spacing
  pb?: Spacing
  pl?: Spacing
  py?: Spacing
  px?: Spacing
}

const getSpacingStyle = ({ pt, pr, pb, pl, py, px }: Args) => {
  const getPadding = (spacing?: Spacing) =>
    spacing ? defaultValues.spacing[spacing] : "0px"

  const paddingTop = getPadding(pt)
  const paddingRight = getPadding(pr)
  const paddingBottom = getPadding(pb)
  const paddingLeft = getPadding(pl)
  const paddingVertical = getPadding(py)
  const paddingHorizontal = getPadding(px)

  if (!py && !px) {
    return {
      padding: `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
    }
  } else if (py && !px) {
    return {
      padding: `${paddingVertical} ${paddingRight} ${paddingVertical} ${paddingLeft}`,
    }
  } else if (px && !py) {
    return {
      padding: `${paddingTop} ${paddingHorizontal} ${paddingBottom} ${paddingHorizontal}`,
    }
  } else {
    return {
      padding: `${paddingVertical} ${paddingHorizontal} ${paddingVertical} ${paddingHorizontal}`,
    }
  }
}

export default getSpacingStyle
