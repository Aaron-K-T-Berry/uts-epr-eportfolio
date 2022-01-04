import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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

const Socials = () => {
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
      {/* Summary */}
      <div>
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
