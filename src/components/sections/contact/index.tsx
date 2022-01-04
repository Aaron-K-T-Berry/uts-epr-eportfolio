import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileWord,
  faFilePdf,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons"
import { faMedium } from "@fortawesome/free-brands-svg-icons"

import * as React from "react"

import * as styles from "./styles.module.css"

export const Contact: React.FunctionComponent<{
  heading: string
  headingId: string
}> = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* Heading */}
        <div>
          <a className={styles.headingLink} id={props.headingId}></a>
          <h2>Contact</h2>
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          <div className={styles.summaryTextWrapper}>
            <p>
              If you wanna reach out about any opportunities or just want to say
              hi about any of my work or writing feel free to use the below form
              and ill get back to you in no time.
            </p>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <ContactForm />
          <Socials />
        </div>
      </div>
    </section>
  )
}

const ContactForm: React.FunctionComponent<{}> = (props) => {
  return (
    <div className={styles.form}>
      <form
        action="https://getform.io/f/a361de67-80ff-49a4-9c86-81fe26c6fcd0"
        method="POST"
      >
        <div className={styles.field}>
          <label>
            Name <span className={styles.required}>*</span>
          </label>
          <input type="text" name="name" />
        </div>

        <div className={styles.field}>
          <label>
            Email <span className={styles.required}>*</span>
          </label>
          <input type="email" name="email" />
        </div>

        <div className={styles.field}>
          <label>
            Message <span className={styles.required}>*</span>
          </label>
          <input type="text" name="message" />
        </div>

        <button type="submit">
          <span>Send</span>
        </button>
      </form>
    </div>
  )
}

const Resume: React.FunctionComponent<{}> = () => {
  const resumeLinks = [
    {
      text: "html",
      fa: faDesktop,
      link: "https://cv.aaron-berry.com/index.html",
    },
    {
      text: "doc",
      fa: faFileWord,
      link: "https://cv.aaron-berry.com/resume.doc",
    },
    {
      text: "pdf",
      fa: faFilePdf,
      link: "https://cv.aaron-berry.com/resume.pdf",
    },
  ]

  return (
    <div className={styles.resume}>
      {/* Resume Summary */}
      <div>
        <h3>Resume</h3>
        <p>
          If you are looking for a copy of my current resume you can find it in
          the following formats!
        </p>
      </div>

      <div className={styles.iconsList}>
        {resumeLinks.map((item) => {
          return (
            <div className={styles.icon}>
              <a href={item.link} target="blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={item.fa} />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Socials: React.FunctionComponent<{}> = () => {
  const socials = [
    {
      link: "linkedin",
      icon: "devicon-linkedin-plain",
    },
    {
      link: "github",
      icon: "devicon-github-plain",
    },
    {
      link: "medium",
      fa: faMedium,
    },
    {
      link: "twitter",
      icon: "devicon-twitter-plain",
    },
  ]

  return (
    <div className={styles.socials}>
      <Resume />

      {/* Social Summary */}
      <div>
        <h3>Socials</h3>
        <p>
          Prefer socials, You can find me in the following online spaces as
          well!
        </p>
      </div>

      {/* Socials list */}
      <div className={styles.iconsList}>
        {socials.map((item) => {
          if (item.fa) {
            return (
              <div className={styles.icon}>
                <FontAwesomeIcon icon={item.fa} />
              </div>
            )
          } else {
            return (
              <div className={styles.icon}>
                <i className={item.icon}></i>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
