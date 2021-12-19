import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const Hero: React.FunctionComponent = (props) => {
  return (
    <div style={styles.section}>
      <StaticImage
        style={styles.img}
        layout="fullWidth"
        alt="Astronaut boy working on laptop"
        src={"../images/astro.jpg"}
        formats={["auto", "webp", "avif"]}
      />

      {/* Hero text */}
      {/* TODO Move the hero text slightly to the right */}
      <div style={styles.text}>{props.children}</div>
    </div>
  )
}

const styles = {
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2.5rem",
    maxWidth: "68.75rem",
    margin: "auto",
  },
  img: {
    height: "37.5rem",
    width: "37.5rem",
  },
  text: {
    width: "25rem",
    padding: "0.625rem",
    borderRadius: "6px",
    boxShadow: "0px 2px 15px 2px #8b8eaf;",
  },
}
