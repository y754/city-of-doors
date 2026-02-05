import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const RenderBanner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const banner = fileData.frontmatter?.banner
  if (banner) {
    return <img class={classNames(displayClass, "banner")} src={banner} />
  } else {
    return null
  }
}

RenderBanner.css = `
.banner {
  margin: 2rem 0 0 0;
  width: 100%;
}
`

export default (() => RenderBanner) satisfies QuartzComponentConstructor
