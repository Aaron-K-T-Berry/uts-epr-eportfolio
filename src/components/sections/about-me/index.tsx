import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as AboutMeStyles from "./hero.module.css"

interface AboutMeProps {
  heading: string
  body: string[]
}

export const AboutMe: React.FunctionComponent<AboutMeProps> = (props) => {
  return (
    <div className={AboutMeStyles.hero}>
      <StaticImage
        className={AboutMeStyles.heroImg}
        layout="fullWidth"
        alt="Astronaut boy working on laptop"
        src={"../../../images/astro.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className={AboutMeStyles.bio}>
        <span>
          <h2>{props.heading}</h2>
          <span>
            {props.body.map(line => <p>{line}</p>)}
          </span>
        </span>
      </div>
    </div>
  )
}
