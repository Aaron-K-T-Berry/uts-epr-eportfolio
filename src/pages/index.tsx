import * as React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { Nav } from "../components/nav"
import { Hero } from "../components/hero"
import { LayoutBody } from "../components/layout-body"

export default (props: PageProps) => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <Nav sections={["About", "Skills", "Projects", "Writing", "Contact"]}>
          <span>Aaron Berry </span>
          {"  ePortfolio"}
        </Nav>

        {/* About Me */}
        <Hero
          heading={content.aboutMe.heading}
          body={content.aboutMe.description}
        />

        <LayoutBody>
          {/* Skills */}
          <span>
            <h2>{content.skills.heading}</h2>
            <ul>
              {content.skills.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </span>

          {/* Projects */}
          <span>
            <h2>{content.projects.heading}</h2>
            <ul>
              {content.projects.professionalExp.map((project) => (
                <li>{project}</li>
              ))}
            </ul>
            <ul>
              {content.projects.publicProjects.map((project) => (
                <li>{project}</li>
              ))}
            </ul>
          </span>

          {/* Writing */}
          <span>
            <h2>{content.writing.heading}</h2>
            <ul>
              {content.writing.articles.map((article) => (
                <li>{article}</li>
              ))}
            </ul>
          </span>

          {/* Contact */}
          <span>
            <h2>{content.contact.heading}</h2>
          </span>
        </LayoutBody>
      </main>
    </Layout>
  )
}

const content = {
  aboutMe: {
    heading: "About me",
    description:
      "I'm Aaron, I'm a software engineering working in the data engineering and DevOps space building and automating software in the cloud.",
  },
  skills: {
    heading: "Skills",
    skills: [
      "Web development Javascript, Typescript using tools like React and express JS and serverless ",
      "Data Engineering with Python, Apache Airflow and Snowflake",
      "DevOps using Terraform and Ansible in the cloud",
    ],
  },
  projects: {
    heading: "Projects",
    professionalExp: [
      "Data engineering with airflow and snowflake",
      "Building react applications as tableau extensions",
    ],
    publicProjects: ["packer ubuntu"],
  },
  writing: {
    heading: "Writing",
    articles: ["article 1", "article 2", "article 3"],
  },
  contact: {
    heading: "Contact",
    description: "TODO",
    contactLinks: {
      linkedin: "",
      github: "",
      medium: "",
    },
  },
}
