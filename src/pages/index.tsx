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

        {/* TODO add way to download current resume */}

        <LayoutBody>
          {/* TODO need to add a bit more summaries   */}
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
          "Developing Devops tooling and infrastructure code to support continues integration of the data engineering stack.",
          "Monitoring and logging of data engineering workflows with Datadog",
          "Developing custom but scalable solutions utilizing python to create common interfaces for interacting with aspects of the data pipeline",
          "Build custom web applications using React to support the better ingesting of internal user data and reporting of that data",
          "Maintaining and administering a snowflake data warehouse using modern devops principles for defining and maintaining tenant database rearouses",
        ],
      },
      {
        title: "Building react applications as tableau extensions",
        summary: [
          "Within the business unit the data engineering team i worked in supported we needed to ingest commentary data on assets under management by the business.",
          "This project was implemented as a embedded web application that could be installed on the business users tableau dashboards to allow for them to input commentaries data in their existing dashboards",
          "The web application was built using React for the frontend and express js for the api layer with data being pushed into a Snowflake data layer utilizing materialized views to enable less apu logic to manage",
        ],
        achievements: [
          "Introduced an example production application with React + Express Js stack",
          "10k Requests a month from internal business users",
          "Integrated a custom web app experience inside another application (tableau) in a managed workload for the data engineering team",
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
    ],
  },
  writing: {
    heading: "Technology Writing",
    articles: [
      {
        title: "Airflow DAG and Task Markdown Docs",
        summary: [
          "I have been developing a lot of operators and pipelines on the airflow platform where the workflows may be used by other operators who may not necessarily understand the source code for that workflow. In this article i looked at how you can used inline documentation of Airflow DAGs and tasks in common formats like markdown so operators can have an easier view and understanding of how it works.",
          "As an ongoing theme in the writing and projects i have been looking at how you can build and operate on Airflow easier has been a key idea i have been exploring as i think it is a powerful platform that can be confusing to initially begin using for many Data Engineers.",
        ],
        url: "https://levelup.gitconnected.com/airflow-dag-and-task-markdown-docs-2c00c72152b4",
        imageUrl:
          "https://miro.medium.com/max/1400/1*bFZ6qSsSNTLayT0Vr1tqXw.png",
      },
      {
        title:
          "Generating Swagger API Docs And UI Automatically For Express.js Apps",
        summary: [
          "Whilst developing a React and Express Js web application i explored some scalable ways that API documentation can be maintained in the long term. Through this project I integrated automatic swagger API doc generation onto the Express Js routes",
          "Through this project developers now could maintain the API documentation inline with the routes themselves encouraging dev's to keep the api documentation up to date when they are working on the project in the future.",
        ],
        url: "https://levelup.gitconnected.com/generating-swagger-api-docs-and-ui-automatically-for-express-js-apps-2ea1436a0f59",
        imageUrl:
          "https://miro.medium.com/max/1400/1*7ZKm-fPKuGkr8UG-jbqfWQ.png",
      },
      {
        title: "Creating proxmox templates with packer",
        summary: [
          "In my own time i enjoy playing with virtualization technologies like proxmox for my personal Homelab for software development. In this article i talk about how you can use a tool like Packer to automatically build and publish a KVM image onto a proxmox cluster",
          "Projects like this are great fun to explore how you can implement devops best practices and learn more about how virtualization works when running it on hardware to find the most effective way to run things like disks and networking and a secure and scalable way.",
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
