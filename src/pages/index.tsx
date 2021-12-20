import * as React from "react"
import { PageProps } from "gatsby"

import { Layout } from "../components/layout"
import { LayoutBody } from "../components/layout/body"
import { Nav } from "../components/layout/nav"
import { AboutMe } from "../components/sections/about-me"
import { Skills } from "../components/sections/skills"
import { Projects } from "../components/sections/projects"
import { Writing } from "../components/sections/writing"
import { Contact } from "../components/sections/contact"

export default (props: PageProps) => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <Nav sections={["About", "Skills", "Projects", "Writing", "Contact"]}>
          <span>Aaron Berry </span>
          {"  ePortfolio"}
        </Nav>

        <AboutMe
          heading={content.aboutMe.heading}
          body={content.aboutMe.description}
        />

        <LayoutBody>
          <Skills
            heading={content.skills.heading}
            skills={content.skills.skills}
          />

          <Projects
            heading={content.projects.heading}
            professionalProjects={content.projects.professionalExp}
            publicProjects={content.projects.publicProjects}
          />

          <Writing
            heading={content.writing.heading}
            articles={content.writing.articles}
          />

          <Contact heading={content.contact.heading} />
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
    heading: "Technical skills",
    skills: [
      {
        summary: "Web development",
        extras: ["Javascript & Typescript", "ReactJs", "Gatsby"],
      },
      {
        summary: "Data Engineering ",
        extras: ["Python", "Airflow", "Snowflake"],
      },
      {
        summary: "Devops",
        extras: ["Docker", "Terraform", "Ansible", "Jenkins", "Github Actions"],
      },
    ],
  },
  // TODO update this data structure so we can add a bit more details about each project ive worked on
  projects: {
    heading: "Development Projects",
    professionalExp: [
      "Data engineering with airflow and snowflake",
      "Building react applications as tableau extensions",
    ],
    publicProjects: [
      "packer-ubuntu-proxmox-template",
      "proxmox-api-go",
      "terraform-provider-proxmox",
      "generator-ansible-molecule",
      "python-encrypted-rsa-keys-demo ",
      "jsonresume-theme-spartan-extended",
    ],
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
