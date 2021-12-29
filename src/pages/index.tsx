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

        <Nav
          sections={[
            { title: "About", id: "about-me" },
            { title: "Skills", id: "skills" },
            { title: "Projects", id: "projects" },
            { title: "Writing", id: "writing" },
            { title: "Contact", id: "contact" },
          ]}
        >
          <span>Aaron Berry </span>
          {"  ePortfolio"}
        </Nav>

        <AboutMe
          heading={content.aboutMe.heading}
          headingId="about-me"
          body={content.aboutMe.description}
        />

        <LayoutBody>
          <Skills
            heading={content.skills.heading}
            headingId="skills"
            skills={content.skills.skills}
          />

          <Projects
            heading={content.projects.heading}
            headingId="projects"
            professionalProjects={content.projects.professionalExp}
            publicProjects={content.projects.publicProjects}
          />

          <Writing
            heading={content.writing.heading}
            headingId="writing"
            articles={content.writing.articles}
          />

          <Contact heading={content.contact.heading} headingId="contact" />
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
  projects: {
    heading: "Development Projects",
    professionalExp: [
      {
        title: "Data engineering with airflow and snowflake",
        summary: [
          "As part of the data platform i develop on the data engineering team i have developed DAG's and custom operators built on the Apache Airflow platform. Doing this i have leveraged the building of generic python tooling on the platform to make the ongoing operation and management of the platform easier",
          "The data platform i worked on encompassed the ingesting of multiple different external providers from excel files, external vendor apis, existing databases etc ingesting all of the data into the Snowflake platform.",
          "The work on this team focused on developing solutions that could be efficiently scaled and still be effectively managed with a small team to not require as much maintenance through a focuses on testing and interfaces in the pipeline. whilst leveraging the features of the AWS platforms services where possible",
        ],
        achievements: [
          "Developing custom but scalable solutions utilizing python to create common interfaces for interacting with aspects of the data pipeline",
          "Build custom web applications using React to support the better ingesting of internal user data and reporting of that data",
        ],
      },
      {
        title: "Building react applications as tableau extensions",
        summary: [temp],
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
        summary: [temp],
        achievements: [],
      },
      {
        title: "jsonresume-theme-spartan-extended",
        summary: [temp],
        achievements: [],
      },
      {
        title: "proxmox-api-go",
        summary: [temp],
        achievements: [],
      },
      {
        title: "terraform-provider-proxmox",
        summary: [temp],
        achievements: [],
      },
    ],
  },
  writing: {
    heading: "Technology Writing",
    articles: [
      {
        title: "Airflow DAG and Task Markdown Docs",
        summary: [
          "I've recently been developing and operating a lot more on the Airflow platform. While doing this development, there was always the challenge of communicating the parts of your DAG effectively without the developer or operator having to open the DAG code to understand how it functions.",
        ],
        url: "https://levelup.gitconnected.com/airflow-dag-and-task-markdown-docs-2c00c72152b4",
        imageUrl:
          "https://miro.medium.com/max/1400/1*bFZ6qSsSNTLayT0Vr1tqXw.png",
      },
      {
        title:
          "Generating Swagger API Docs And UI Automatically For Express.js Apps",
        summary: [
          "If you are writing your express js API, you might get in a situation where your number of routes is growing, and it's getting harder to communicate your routes and their inputs and outputs within your team or outside your team, be that publicly or privately.",
        ],
        url: "https://levelup.gitconnected.com/generating-swagger-api-docs-and-ui-automatically-for-express-js-apps-2ea1436a0f59",
        imageUrl:
          "https://miro.medium.com/max/1400/1*7ZKm-fPKuGkr8UG-jbqfWQ.png",
      },
      {
        title: "Creating proxmox templates with packer",
        summary: [
          "This article will cover how you can easily set up a local or externally accessible Docker registry for hosting your own built Docker images.",
        ],
        url: "https://aaron-kt-berry.medium.com/creating-proxmox-templates-with-packer-7ada62474c44",
        imageUrl:
          "https://miro.medium.com/max/700/1*NRt0va8zdrfVflJL6ZLN1A.jpeg",
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
