import * as React from "react"
import { PageProps } from "gatsby"

import { Layout } from "../components/layout"
import { Footer } from "../components/common/footer"
import { Nav } from "../components/common/nav"
import { AboutMe } from "../components/sections/about-me"
import { Skills } from "../components/sections/skills"
import { Projects } from "../components/sections/projects"
import { Academic } from "../components/sections/academic"
import { Writing } from "../components/sections/writing"
import { Contact } from "../components/sections/contact"

export default (props: PageProps) => {
  return (
    <Layout>
      <main>
        <title>Aaron Berry - Portfolio</title>

        <Nav
          sections={[
            { title: "About", id: "about-me" },
            { title: "Skills", id: "skills" },
            { title: "Projects", id: "projects" },
            { title: "Academic", id: "academic" },
            { title: "Writing", id: "writing" },
            { title: "Contact", id: "contact" },
          ]}
        />

        <AboutMe headingId="about-me" />
        <div className="angle angle1" />

        <Skills headingId="skills" />
        <div className="angle angle2" />

        <Projects headingId="projects" />
        <div className="angle angle3" />

        <Academic headingId="academic" />
        <div className="angle angle4" />

        <Writing headingId="writing" />
        <div className="angle angle5" />

        <Contact headingId="contact" />

        <Footer />
      </main>
    </Layout>
  )
}
