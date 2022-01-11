import * as React from "react"
import { TechIconList } from "../../common/tech-icon-list"
import * as styles from "./styles.module.css"

export const Academic: React.FunctionComponent<IAcademicSectionProps> = (
  props
) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.headingWrapper}>
          <a className={styles.headingLink} id={props.headingId}></a>
          <h2>Academic Experience and Projects</h2>
          <p>
            I am currently studying at the University of Technology Sydney
            completing a Bachelors of Engineering Majoring in Software
            Engineering expecting to finish my degree in mid 2024. The program
            is thankfully very practical providing me an opportunity to build
            many cool projects highlighted below;
          </p>
        </div>

        <div className={styles.acaProjSummary}>
          <AcademicProjectsSummary />
        </div>
      </div>
    </section>
  )
}

export const AcademicProjectsSummary = () => {
  const sectionClass = styles.academicSection
  const subSectionClass = [sectionClass, styles.academicSectionItem].join(" ")
  const projects = [
    <div className={subSectionClass}>
      <span>
        <h4>2019 - 2021 Software Studio</h4>
        <p>
          During the 6 classes involved in this course I was tasked with working
          in a group with 6 to 12 other students to emulate a scrum team and to
          build a software solution for the provided product specification. Each
          semesters class the teams would iterate and create their solutions
          producing all the sprint artefact expected like retrospectives and
          client feedback to continually integrate their feedback into an ideal
          product. Some of the best projects I participated in included;
        </p>
        <p>
          Building a drag and drop quantum equation calculator which was an
          interesting challenge of working out whats the best way to abstract
          the open source quantum computing libraries we found and how we would
          visualize the data structures they used to build the equations into
          something the end user would be able to use. This project was
          presented to a lecturer from the University of Queensland with it
          working well to allow for basic quantum equations to be calculated and
          demonstrated to others showing how the bits in the equation are turned
          through each of the revolutions in the equation. This resulted in a
          perfect mark for the team of 12 involved in this project and the
          solution we built.
        </p>
      </span>
      {/* TODO find an image for firebase */}
      {/* TODO find an image for lambda */}
      <TechIconList
        technologies={["typescript", "react", "express", "jest", "docker"]}
        size="small"
      />
    </div>,
    <div className={subSectionClass}>
      <span>
        <h4>2021 - Data Engineering</h4>
        <p>
          This class offered by UTS outlined how a modern data engineering
          pipeline is constructed focusing on how to build ETL pipelines using
          tools like Python and Apache Airflow. At the time I took this class I
          was already working as a software engineer in a data engineering team
          who was building out custom software for an Airflow stack. Naturally
          going into this class I had a lot of pre-existing knowledge from the
          professional space but this class provided me an excellent opportunity
          in a team of 5 to build an ETL stack with Airflow from scratch to see
          how I could improve the setup within the course restrictions.
        </p>
        <p>
          Whilst building out this project I learned a lot in the area of how to
          effectively manage a team whilst building software particularly in the
          areas of how to effectively manage team members and the required tasks
          to be completed. How to manage async communication was also important
          for me to manage effectively as all the team members all had to work
          remotely due to the COVID-19 lockdowns over the 2021 year.
        </p>
        <p>
          The Airflow stack we built integrated with the Twitter API to extract
          tweet data about selected topics to be monitored. This data was then
          enriched with analytics and sentiment analysis on the tweet contents
          to try and build an analytical and sentiment picture for a particular
          topic being discussed on Twitter. Once assessed on this built solution
          the team achieved full marks on meeting the project specification as
          well as our demonstration of how the data can be used for marketing
          analysis with some simple dashboards using Google data studio.
        </p>
      </span>
      {/* TODO find icon for mysql */}
      {/* TODO find icon for google */}
      <TechIconList
        technologies={["python", "airflow", "docker", "twitter"]}
        size="small"
      />
    </div>,
  ]

  return (
    <>
      {projects}
    </>
  )
}

interface IAcademicSectionProps {
  headingId: string
}
