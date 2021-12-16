import * as React from "react"
import { PageProps } from "gatsby"

const links = [
  {
    text: "Intro about me",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "I'm Aaron, I'm a software engineering working in the data engineering and DevOps space building and automating software in the cloud.",
    color: "#E95800",
  },
  {
    text: "Some skills I have",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description: "TODO",
    skills: [
      "Web development Javascript, Typescript using tools like React and express JS and serverless ",
      "Data Engineering with Python, Apache Airflow and Snowflake",
      "DevOps using Terraform and Ansible in the cloud",
    ],
    color: "#1099A8",
  },
  {
    text: "Projects I've worked on",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description: "TODO",
    projects: [
      "Data engineering with airflow and snowflake",
      "Building react applications as tableau extensions",
    ],
    color: "#BC027F",
  },
  {
    text: "Writing I have done",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description: "TODO",
    projects: ["article 1", "article 2", "article 3"],
    color: "#0D96F2",
  },
  {
    text: "Get in contact with me",
    url: "https://www.gatsbyjs.com/plugins",
    description: "TODO",
    contactLinks: {
      linkedin: "",
      github: "",
      medium: "",
    },
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    description: "TODO",
    color: "#663399",
  },
]

export default (props: PageProps) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Portfolio
        <br />
        <span style={headingAccentStyles}>— Aaron Berry </span>
      </h1>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const headingAccentStyles = {
  color: "#663399",
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}
