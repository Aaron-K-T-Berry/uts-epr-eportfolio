import { graphql, useStaticQuery } from "gatsby"

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
