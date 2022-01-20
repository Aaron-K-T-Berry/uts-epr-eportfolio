import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./styles.module.css"

interface AboutMeProps {
  headingId: string
}

export const AboutMe: React.FunctionComponent<AboutMeProps> = (props) => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.sectionWrapper}>
        <div className={styles.headingWrapper}>
          <span className={styles.headingLink} id={props.headingId}></span>
          <h2>About</h2>
          <h3>Who is Aaron Berry?</h3>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.imageWrapper}>
            <StaticImage
              className={styles.heroImg}
              layout="fullWidth"
              alt="Astronaut boy working on laptop"
              src={"../../../images/astro.jpg"}
              formats={["auto", "webp", "avif"]}
            />
          </div>

          <div className={styles.contentTextWrapper}>
            {/* My moto */}
            <div className={styles.moto}>
              <h3>
                {
                  "I build scalable and automated software solutions in the cloud ☁️"
                }
              </h3>
            </div>
            {/* Self motivation sumary */}
            <p>
              I am a software engineer who is passionate about building
              applications that are easy to understand and automated to save
              developers time. I do this by keeping an eye on the details and
              implementing best practice wherever I go to{" "}
              <a href="https://www.wikiwand.com/en/KISS_principle">
                keeping it simple
              </a>{" "}
              as i believe modern software should produce tangible outputs for
              people without all the complexity.
            </p>

            {/* Eduction summary */}
            <p>
              I am currently studying at the University of Technology Sydney
              completing a Bachelors of Engineering, Majoring in Software
              Engineering whilst solving problems in the professional sector as
              a Software Engineer.
            </p>

            {/* Professional summary */}
            <p>
              Over the last 3 years i have been working in the banking and
              financial services sector as a full stack engineer building
              customer facing web apps and in a data engineering team building
              devops automation and software application in pursuit of the
              business' data engineering goals.
            </p>

            {/* Career / Future goals */}
            <div className={styles.goalsSection}>
              <h3>Goals and the future</h3>
              <p>
                Over the next few years I aim to further my work in the DevOps
                space through certification in Azure to support running multi
                cloud workloads across Azure and AWS and support migrations of
                existing cloud workloads to Azure.
              </p>
              <p>
                Over the last 2 years developing workloads to run on containers
                has been a key part of my everyday work and expertise. I aim to
                further build on this skill through building out more
                distributed applications and workloads on the Kubernetes
                platform running in both AWS and Azure.
              </p>
              <p>
                I am currently working with AMP Capital building solutions
                across the data and analytics strategy and am not currently
                looking for any further work. But feel free to reach out and say
                hi!
              </p>
              <p>
                <b>
                  <a href={"#contact"}>Get in touch! 👋</a>
                </b>
                {" or "}
                <b>
                  <a href={"#contact"}>Checkout my Resume 📝</a>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
