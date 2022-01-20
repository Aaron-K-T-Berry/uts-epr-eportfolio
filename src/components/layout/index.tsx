import React from "react"
import "./global.css"
import "./shared.css"
import "./transitions.css"
import { Helmet } from "react-helmet"

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <meta
          charSet="utf-8"
        />
        <meta
          name="theme-color"
          content="#cdeeff"
        />
        <meta
          name="description"
          content="I am a software engineer who is passionate about building applications that are easy to understand and automated to save developers time. I do this by keeping an eye on the details and implementing best practice wherever I go to keeping it simple as i believe modern software should produce tangible outputs for people without all the complexity."
        />
      </Helmet>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      {children}
    </div>
  )
}
