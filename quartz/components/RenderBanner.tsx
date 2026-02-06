import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const RenderBanner: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const banner = fileData.frontmatter?.banner
  const bannerCitation = fileData.frontmatter?.bannerCitation
  if (banner) {
    return <div class="bannerContainer"><img class={classNames(displayClass, "banner")} src={banner} /><span class="bannerCite">Banner from: {bannerCitation}</span></div>
  } else {
    return null
  }
}

RenderBanner.css = `
.bannerContainer {
  margin: 2rem 0 0 0;
  width: 100%;
  padding: 0;
  height: 250px;
  max-height:250px;
}
.banner {
  mask-image: linear-gradient(to bottom, rgb(0, 0, 0),rgba(0,0,0,0));
  height:250px;
  width: 100%;
  object-fit: cover;
  object-position: 0px -50px;
}
.bannerCite {
  position: relative;
  right: 0vw;
  bottom: 2em;
  text-align: right;
  font-size: 0.7em;
  width: 100%;
  display: block;
}
`

export default (() => RenderBanner) satisfies QuartzComponentConstructor
