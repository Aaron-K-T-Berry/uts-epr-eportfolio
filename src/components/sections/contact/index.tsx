import * as React from "react"

import * as styles from "./styles.module.css"

import { useFormik } from "formik"
import * as yup from "yup"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileWord,
  faFilePdf,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons"
import { faMedium } from "@fortawesome/free-brands-svg-icons"

export const Contact: React.FunctionComponent<{
  headingId: string
}> = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div>
          <a className={styles.headingLink} id={props.headingId}></a>
          <h2>Contact</h2>
        </div>

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
  const [submitStatus, setSubmitStatus] = React.useState<
    undefined | "success" | "error"
  >(undefined)

  const onFormSubmit = async (values) => {
    const response = await fetch(
      "https://getform.io/f/a361de67-80ff-49a4-9c86-81fe26c6fcd0",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      }
    )

    if (response.status == 200) {
      setSubmitStatus("success")
    } else {
      setSubmitStatus("error")
    }
  }

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  })

  const WithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        onFormSubmit(values)
      },
    })

    return (
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          className={styles.formInput}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          // type="email"
          className={styles.formInput}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          fullWidth
          id="message"
          name="message"
          label="Message"
          type="text"
          multiline
          rows={6}
          maxRows={10}
          className={styles.formInput}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <div className={styles.buttonWrapper}>
          <Button
            className={styles.submitButton}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    )
  }

  const WithSuccessMessage = () => {
    return (
      <div>
        <p>
          Thanks for your message, i'll get back to you as soon as possible. 😀
        </p>
      </div>
    )
  }

  const WithErrorMessage = () => {
    return (
      <div>
        <p>Message could not be submitted, please try again another time. 😥</p>
      </div>
    )
  }

  return (
    <div className={styles.form}>
      {submitStatus == undefined && <WithMaterialUI />}
      {submitStatus == "success" && <WithSuccessMessage />}
      {submitStatus == "error" && <WithErrorMessage />}
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
