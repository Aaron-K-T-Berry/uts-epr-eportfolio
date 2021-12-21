exports.githubApiQuery = `
query($github_login: String!) {
    user(login: $github_login) {
        login
        name
        repositories(
            privacy: PUBLIC,
            first: 100,
            orderBy: {field: STARGAZERS, direction: DESC},
            isLocked: false
        ) {
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
                languages(first: 10) {
                    nodes {
                        name
                        color
                    }
                }
            }
        }
    }
}`
