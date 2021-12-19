import * as React from "react"

// TODO dynamically create links to sections of the page
export const Nav: React.FunctionComponent<NavProps> = (props) => {
  return (
    <nav style={styles.navigation}>
      {props.children}

      <ul style={styles.list}>
        {props.sections.map((section) => {
          const link = `#${section.toLowerCase()}`
          const text = section

          return (
            <li>
              <a href={link} style={styles.link}>
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

// TODO add some kind of transitions when hovering over the links
// TODO style the links so they look less like the default text links
const styles = {
  navigation: {
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 1rem",
    backgroundColor: "white",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
  },
  list: {
    display: "flex",
    gap: "1.9rem",
    "list-style-type": "none",
  },
  link: {
    "text-decoration": "none",
  },
}

interface NavProps {
  sections: string[]
}
