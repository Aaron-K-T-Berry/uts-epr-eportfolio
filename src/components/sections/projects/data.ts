import { graphql, useStaticQuery } from "gatsby"
import { ProfessionalProject, PublicProject } from "./index"

export const useRepoData = (): IGithubReposData[] => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allGithubData {
          nodes {
            data {
              user {
                repositories {
                  nodes {
                    name
                    forkCount
                    stargazerCount
                    description
                    isPrivate
                    isLocked
                    isEmpty
                    isDisabled
                    isArchived
                    isFork
                    isTemplate
                    url
                    primaryLanguage {
                      name
                      color
                    }
                    languages {
                      nodes {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allGithubData.nodes[0].data.user.repositories
    .nodes as IGithubReposData[]
}

interface IGithubReposData {
  name: string
  forkCount: number
  stargazerCount: number
  description: string
  url: string
  primaryLanguage: {
    name: string
    color: string
  }
  languages: {
    name: string
    color: string
  }[]
}

export const data: {
  professionalExp: ProfessionalProject[]
  publicProjects: PublicProject[]
} = {
  professionalExp: [
    {
      title: "Data engineering with airflow and snowflake",
      summary: [
        "Worked as a software engineer on a data engineering team to develop custom software and data pipelines to analyse private markets asset data. The platform consisted primarily of Airflow on AWS ECS, Snowflake for a Data warehouse and other tools like DBT and Liquidbase for warehouse administration.",
        "The data platform encompassed ingesting of multiple different external providers from excel files, external vendor apis and existing databases into the Snowflake platform to provide a unified analytics view of the business data. The team and I focused on developing solutions prepared for scaling whilst minimizing the need for maintenance so that it could be effectively managed by this small team efficiently. This was achieved by a focus on testing and standard interfaces in the pipeline, whilst leveraging the features of the AWS platforms services where possible such as ECS.",
      ],
      achievements: [
        "Developing plugins and operators on the Airflow platform to integrate custom features and integrations.",
        "Administering a Snowflake data warehouse scalably with many tenant business units and use cases.",
        "Using tools like DBT and Liquidbase to effectively manage a Snowflake data warehouse",
        "Integrating DevOps best practices into a data engineering stack.",
        "Monitoring and logging of data engineering workflows with Datadog.",
      ],
      technologies: [
        "python",
        "airflow",
        "snowflake",
        "dbt",
        "liquidbase",
        "docker",
        "aws",
        "datadog",
      ],
    },
    {
      title: "Using React applications  for custom Tableau extensions",
      summary: [
        "Within my time on the data engineering team we had to support the use of multiple analytic platforms by the tenant users such as Tableau. The team wanted to support more effective inputting of data commentary directly inside platforms like Tableau which had a feature to create and integrate custom application in dashboards.",
        "I developed a full stack application to allow business users to select data in their dashboards and to apply commentary on that data that could be stored in an external system. The web application was built using React for the frontend and express js for the api layer with data being pushed into a Snowflake data layer.",
        "The team and I and the team where able to demonstrate how a modern web application stack can be introduced to a business and how through the investment into testing and automation it can be supported by a small team whilst still being able to effectively address new features and use cases.",
      ],
      achievements: [
        "Introducing a new modern web application stack to the business",
        "10k Requests a month from internal business users",
        "Successfully initial release with no major defects",
        "Integrated a custom web app experience inside another application (Tableau)",
      ],
      technologies: [
        "typescript",
        "react",
        "materialui",
        "express",
        "jest",
        "snowflake",
        "docker",
        "aws",
      ],
    },
  ],
  publicProjects: [
    {
      title: "packer-ubuntu-proxmox-template",
      summary: [
        "Using packer I developed a template to allow the easy configuration of KVM images for a Ubuntu 18.04 iso image. During this project i learning a lot about some of the common linux setup tooling that is available for doing image pre configuration with tools like packer.",
        "After struggling with making the setup configurable with packer I decided to publish my project for others to see how i was able to configure the image as i did not find many examples for the version of Ubuntu. After the repo had been published it has been one of myh most popular projects on my github account. I used this project also to write an article on how the image can be used with packer to push images to a proxmox hypervisor environment.",
      ],
      achievements: [
        "Using linux features to programmatically configure os from base ISO's",
      ],
    },
    {
      title: "jsonresume-theme-spartan-extended",
      summary: [
        "This project was made so that I could have a custom them to export my resume into a HTML site and to word docs. It was originally forked from one of the jsonresume projects example themes so that I could learn  static site generation better with HandlebarsJs.",
        "To the theme I added new features like better handling of australian date formats and too add new fields for tracking your present education and work as well as automatically calculating working periods.",
      ],
      achievements: [
        "Working with responsive CSS best practices",
        "Developing sites with handlebars",
      ],
    },
    {
      title: "proxmox-api-go",
      summary: [
        "For the proxmox-api-go project I have contributed with expanding the API developed in GO to integrate more features that are available in the proxmox API to allow for the easier provisioning of KVM and LXC images in a proxmox environment.",
        "Working on this project was a great opportunity to expand my skills further with a more strict language like Go and how that effects the structure and management of large collaborative projects like the proxmox-api-go project.",
      ],
      achievements: ["Learning GO development best practices"],
    },
  ],
}
