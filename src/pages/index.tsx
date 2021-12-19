import * as React from "react"
import { PageProps } from "gatsby"
import { Layout } from "../components/layout"
import { Nav } from "../components/nav"
import { Hero } from "../components/hero"

const links = [
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

const content = {
  aboutMe: {
    text: "About me",
    description:
      "I'm Aaron, I'm a software engineering working in the data engineering and DevOps space building and automating software in the cloud.",
    color: "#E95800",
  },
}

export default (props: PageProps) => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>

        <Nav sections={["About", "Skills", "Projects", "Writing", "Contact"]}>
          <span>Aaron Berry </span>
          {"  ePortfolio"}
        </Nav>

        <Hero
          heading={content.aboutMe.text}
          body={content.aboutMe.description}
        />

        <div style={styles.page}>
          <ul style={styles.listStyles}>
            {links.map((link) => (
              <li
                key={link.url}
                style={{ ...styles.listItemStyles, color: link.color }}
              >
                <span>
                  <a
                    style={styles.linkStyle}
                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                  >
                    {link.text}
                  </a>
                  <p style={styles.descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  )
}

const styles = {
  page: {
    color: "#232129",
    padding: 96,
  },
  listStyles: {
    marginBottom: 96,
    paddingLeft: 0,
  },
  listItemStyles: {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
  },
  linkStyle: {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  },
  descriptionStyle: {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  },
}
