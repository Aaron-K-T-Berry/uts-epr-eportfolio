import * as React from "react"

import "../shared.css"

export const Writing: React.FunctionComponent<{
  heading: string
  articles: string[]
}> = (props) => {
  return (
    <div className="section_container">
      <div className="section_heading">
        <h2>{props.heading}</h2>
      </div>

      <div className="section_body">
        <ul>
          {props.articles.map((article) => (
            <li key={article}>{article}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
