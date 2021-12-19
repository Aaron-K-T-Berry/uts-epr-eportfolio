import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as heroStyles from "./hero.module.css"

interface HeroProps {
  heading: string
  body: string
}

export const Hero: React.FunctionComponent<HeroProps> = (props) => {
  return (
    <div className={heroStyles.hero}>
      <StaticImage
        className={heroStyles.heroImg}
        layout="fullWidth"
        alt="Astronaut boy working on laptop"
        src={"../../../images/astro.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className={heroStyles.bio}>
        <span>
          <h2>{props.heading}</h2>
          <p>{props.body}</p>
        </span>
      </div>
    </div>
  )
}
