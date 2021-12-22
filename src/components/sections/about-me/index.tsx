import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as AboutMeStyles from "./hero.module.css"

interface AboutMeProps {
  heading: string
  headingId: string
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
        <div className="section_heading">
          <a className={AboutMeStyles.headingLink} id={props.headingId}></a>
          <h2>{props.heading}</h2>
        </div>

        <div>
          <span>
            {props.body.map((line) => (
              <p>{line}</p>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}
