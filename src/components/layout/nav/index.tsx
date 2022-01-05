import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "./styles.css"

export const Nav: React.FunctionComponent<NavProps> = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState<Boolean>(false)
  const [screenWidth, setScreenWidth] = React.useState<number>(
    window.innerWidth
  )

  const toggleNav = () => setToggleMenu(!toggleMenu)

  React.useEffect(() => {
    const changeWidth = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", changeWidth)
    return () => window.removeEventListener("resize", changeWidth)
  })

  return (
    <div>
      <nav>
        {(toggleMenu || screenWidth > 900) && (
          <ul className="list">
            {props.sections.map((section, index) => {
              const link = `#${section.id}`
              const text = section.title

              return (
                <li className="items" key={`${text}-${index}`}>
                  <a href={link} onClick={toggleNav}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        )}
        {screenWidth < 900 && (
          <button className="btn" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </nav>
    </div>
  )
}

interface NavProps {
  sections: { title: string; id: string }[]
}
