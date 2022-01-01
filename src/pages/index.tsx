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
        summary: "Modern full stack web development",
        extras: [
          "✅ Latest Javascript, Typescript and ReactJs standards and practices",
          "✅ Focus on testing for a maintainable and scalable codebase",
          "✅ Building custom internal and external user focused solutions",
        ],
      },
      {
        summary: "Developing scalable data engineering pipelines ",
        extras: [
          "✅ Maintaining and developing a dockerized Airflow environment",
          "✅ Developing custom Airflow operators and plugins to support  data ingestion",
          "✅ Using DBT and liquidbase for scalable data warehouse object management",
        ],
      },
      {
        summary: "Building scalable and automated devops solutions",
        extras: [
          "✅ Scalable applications and deployments with tools like docker and kubernetes",
          "✅ Implementing infrastructure as code through tools like ansible and terraform",
          "✅ Building generic and maintainable CICD infrastructure on Jenkins and Github Actions",
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
          "Worked as a software engineer on a data engineering team to develop custom software and data pipelines to analyse private markets asset data. The platform consisted primarily of Airflow on AWS ECS, Snowflake for a Data warehouse and other tools like DBT and Liquid base for warehouse administration.",
          "The data platform i worked on encompassed the ingesting of multiple different external providers from excel files, external vendor apis, existing databases etc ingesting all of the data into the Snowflake platform. The work on this team focused on developing solutions that could be efficiently scaled and still be effectively managed with a small team to not require as much maintenance through a focuses on testing and interfaces in the pipeline. whilst leveraging the features of the AWS platforms services where possible"
        ],
        achievements: [
          "Developing custom plugins and operators on the Airflow platform to integrate new features and tools",
          "Administering a Snowflake data warehouse scalably with many tenant business units and use cases",
          "Integrating DevOps best practices into a Data engineering stack",
          "Monitoring and logging of data engineering workflows with Datadog",
        ],
      },
      {
        title: "Building react applications as tableau extensions",
        summary: [
          "Within my time on the data engineering team we had to support the use of multiple analytic platforms by the tenant users such as tableau. The team wanted to support more effective inputting of data commentary directly inside platforms like tableau and through the use of its extensions feature i developed a full stack application to allow business users to select data in their dashboards and to apply commentary on that data that could be stored in an external system.",
          "The web application was built using React for the frontend and express js for the api layer with data being pushed into a Snowflake data layer. Through this project I and the team where able to demonstrate how a modern web application stack can be introduced to a business and how through the investment into testing and automation it can be supported by a small team whilst still being able to effectively address new features and use cases."
        ],
        achievements: [
          "10k Requests a month from internal business users",
          "Integrated a custom web app experience inside another application (tableau) in a managed workload for the data engineering team",
        ],
      },
    ],
    publicProjects: [
      {
        title: "packer-ubuntu-proxmox-template",
        summary: [
          "Using packer i developed a template to allow the easy configuration of KVM images for ubuntu. I used this project also to write an article on how the image can be used with packer to push images to a proxmox hypervisor environment."
        ],
        achievements: [
          "Using linux features to programmatically configure os from base ISO's"
        ],
      },
      {
        title: "jsonresume-theme-spartan-extended",
        summary: [
          "This was originally based of another project that i forked to add new features like better handling of australian date formats and too add new fields for tracking your present education and work as well as automatically calculating working periods."
        ],
        achievements: [
          "Working with responsive CSS best practices",
          "Developing sites with handlebars"
        ],
      },
      {
        title: "proxmox-api-go",
        summary: [
          "For the proxmox-api-go project i have contributed with expanding the API developed in GO to integrate more features that are available in the proxmox API to allow for the easier provisioning of KVM and LXC images in a proxmox environment."
        ],
        achievements: [
          "Learning GO development best practices"
        ],
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
