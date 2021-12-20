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

// TODO add page to download resume if needed

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

const temp =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."

const content = {
  aboutMe: {
    heading: "About me",
    description: [
      "I'm Aaron berry, I'm a software engineering working in the data engineering and DevOps space building and automating software in the cloud.",
      "Ive been in the Banking and Financial services sector for 3 years building solutions ranging from customer facing web applications in the banking sector to scalable data pipelines ingesting millions of rows.",
    ],
  },
  skills: {
    heading: "Technical skills",
    skills: [
      {
        summary: "Web development",
        extras: ["✅ Javascript & Typescript", "✅ ReactJs", "✅ Gatsby"],
      },
      {
        summary: "Data Engineering ",
        extras: ["✅ Python", "✅ Airflow", "✅ Snowflake"],
      },
      {
        summary: "Building scalable and automated devops solutions",
        extras: [
          "✅ Docker",
          "✅ Terraform",
          "✅ Ansible",
          "✅ Jenkins",
          "✅ Github Actions",
        ],
      },
    ],
  },
  // TODO update this data structure so we can add a bit more details about each project ive worked on
  projects: {
    heading: "Development Projects",
    professionalExp: [
      {
        title: "Data engineering with airflow and snowflake",
        summary: temp,
        achievements: [
          "s molestias excepturi sint occaecati cupiditate non provident, similique su",
          "cupiditate non provident, similique su",
          "excepturi sint occaecati cupiditate non provident, similique",
          "s molestias excepturi sint occaecati cupiditate non provident, similique su",
        ],
      },
      {
        title: "Building react applications as tableau extensions",
        summary: temp,
        achievements: [
          "excepturi sint occaecati cupiditate non provident, similique",
          "s molestias excepturi sint occaecati cupiditate non provident, similique su",
          "excepturi sint occaecati cupiditate non provident, similique",
          "cupiditate non provident, similique su",
        ],
      },
    ],
    publicProjects: [
      {
        title: "packer-ubuntu-proxmox-template",
        summary: temp,
        achievements: [],
      },
      {
        title: "proxmox-api-go",
        summary: temp,
        achievements: [],
      },
      {
        title: "terraform-provider-proxmox",
        summary: temp,
        achievements: [],
      },
      {
        title: "generator-ansible-molecule",
        summary: temp,
        achievements: [],
      },
      {
        title: "python-encrypted-rsa-keys-demo ",
        summary: temp,
        achievements: [],
      },
      {
        title: "jsonresume-theme-spartan-extended",
        summary: temp,
        achievements: [],
      },
    ],
  },
  writing: {
    heading: "Technology Writing",
    articles: [
      {
        title: "Airflow DAG and Task Markdown Docs",
        summary:
          "I've recently been developing and operating a lot more on the Airflow platform. While doing this development, there was always the challenge of communicating the parts of your DAG effectively without the developer or operator having to open the DAG code to understand how it functions.",
        url: "",
      },
      {
        title:
          "Generating Swagger API Docs And UI Automatically For Express.js Apps",
        summary:
          "If you are writing your express js API, you might get in a situation where your number of routes is growing, and it’s getting harder to communicate your routes and their inputs and outputs within your team or outside your team, be that publicly or privately.",
        url: "",
      },
      {
        title: "Creating proxmox templates with packer",
        summary:
          "This article will cover how you can easily set up a local or externally accessible Docker registry for hosting your own built Docker images.",
        url: "",
      },
    ],
  },
  contact: {
    heading: "Get in touch!",
    description: "TODO",
    contactLinks: {
      linkedin: "",
      github: "",
      medium: "",
    },
  },
}
