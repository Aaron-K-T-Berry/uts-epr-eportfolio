import * as React from "react"
import icons from "./icons"
import { makeStyles } from "@mui/styles"

export const TechIconList: React.FunctionComponent<TechIconListProps> = (
  props
) => {
  const templateStyles = {
    small: {
      fontSize: "2rem",
      iconWidth: 32,
    },
    medium: {
      fontSize: "2.5rem",
      iconWidth: 40,
    },
    large: {
      fontSize: "3.5rem",
      iconWidth: 57,
    },
  }

  const classes = useStyles({
    ...(props.size ? templateStyles[props.size] : {}),
    spreadItems: props.spreadItems,
    ...props.styles,
  } as StylesProps)

  const techIcons = [
    // Languages
    {
      name: "javascript",
      displayName: "Javascript",
      icon: <i className="devicon-javascript-plain" />,
    },
    {
      name: "typescript",
      displayName: "Typescript",
      icon: <i className="devicon-typescript-plain" />,
    },
    {
      name: "python",
      displayName: "Python",
      icon: <i className="devicon-python-plain" />,
    },
    {
      name: "java",
      displayName: "Java",
      icon: <i className="devicon-java-plain" />,
    },
    {
      name: "bash",
      displayName: "Bash",
      icon: <i className="devicon-bash-plain" />,
    },
    {
      name: "markdown",
      displayName: "Markdown",
      icon: <i className="devicon-markdown-original" />,
    },

    // Frameworks
    {
      name: "react",
      displayName: "React",
      icon: <i className="devicon-react-original" />,
    },
    {
      name: "express",
      displayName: "ExpressJs",
      icon: <i className="devicon-express-original" />,
    },
    {
      name: "jest",
      displayName: "Jest",
      icon: <i className="devicon-jest-plain" />,
    },
    {
      name: "gatsby",
      displayName: "Gatsby",
      icon: <i className="devicon-gatsby-plain" />,
    },
    {
      name: "materialui",
      displayName: "Material Ui",
      icon: <i className="devicon-materialui-plain" />,
    },
    {
      name: "dbt",
      displayName: "Dbt",
      icon: <icons.DbtSvg />,
    },
    {
      name: "liquidbase",
      displayName: "LiquidbaseSvg",
      icon: <icons.LiquidbaseSvg />,
    },

    // Cloud providers
    {
      name: "aws",
      displayName: "AWS",
      icon: <i className="devicon-amazonwebservices-plain" />,
    },
    {
      name: "azure",
      displayName: "Azure",
      icon: <i className="devicon-azure-plain" />,
    },
    {
      name: "digitalocean",
      displayName: "Digital Ocean",
      icon: <i className="devicon-digitalocean-plain" />,
    },
    {
      name: "firebase",
      displayName: "Firebase",
      icon: <i className="devicon-firebase-plain" />,
    },
    { name: "lambda", displayName: "Lambda", icon: <icons.AWSLambdaSvg /> },
    {
      name: "gcp",
      displayName: "GCP",
      icon: <i className="devicon-googlecloud-plain" />,
    },

    // Operating system and tools
    {
      name: "docker",
      displayName: "Docker",
      icon: <i className="devicon-docker-plain" />,
    },
    {
      name: "linux",
      displayName: "Linux",
      icon: <i className="devicon-linux-plain" />,
    },
    {
      name: "git",
      displayName: "Git",
      icon: <i className="devicon-git-plain" />,
    },

    // Other
    {
      name: "linkedin",
      displayName: "LinkedIn",
      icon: <i className="devicon-linkedin-plain" />,
    },
    {
      name: "github",
      displayName: "Github",
      icon: <i className="devicon-github-plain" />,
    },
    {
      name: "twitter",
      displayName: "Twitter",
      icon: <i className="devicon-twitter-plain" />,
    },
    {
      name: "medium",
      displayName: "",
      icon: <icons.FontAwesomeIcon icon={icons.faMedium} />,
    },
    {
      name: "computer",
      displayName: "",
      icon: <icons.FontAwesomeIcon icon={icons.faDesktop} />,
    },
    {
      name: "word",
      displayName: "",
      icon: <icons.FontAwesomeIcon icon={icons.faFileWord} />,
    },
    {
      name: "pdf",
      displayName: "",
      icon: <icons.FontAwesomeIcon icon={icons.faFilePdf} />,
    },
    { name: "packer", displayName: "", icon: <icons.PackerSvg /> },
    { name: "terraform", displayName: "", icon: <icons.TerraformSvg /> },
    { name: "proxmox", displayName: "", icon: <icons.ProxmoxSvg /> },
    { name: "swagger", displayName: "", icon: <icons.SwaggerSvg /> },
    { name: "airflow", displayName: "", icon: <icons.AirflowSvg /> },
    { name: "datadog", displayName: "Datadog", icon: <icons.DatadogSvg /> },
    {
      name: "snowflake",
      displayName: "Snowflake",
      icon: <icons.SnowflakeSvg />,
    },
    {
      name: "mysql",
      displayName: "mysql",
      icon: <i className="devicon-mysql-plain" />,
    },
  ]

  return (
    <div className={classes.list}>
      {props.technologies.map((tech) => {
        const iconDetails = techIcons.filter((value) => value.name == tech)[0]
        if (iconDetails) {
          return (
            <div className={classes.icon}>
              {iconDetails.icon}
              {props.displayName && <p>{iconDetails.displayName}</p>}
            </div>
          )
        }
      })}
    </div>
  )
}

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    padding: (props: StylesProps) => props.listPadding || "10px 0 0 0",
  },
  icon: (props: StylesProps) => ({
    width: props.spreadItems ? "30%" : null,
    padding: props.iconPadding || "0 10px 10px 0",
    "& i, svg": {
      width: props.iconWidth || 40,
      height: props.iconWidth || 40,
      color: props.color || "black",
      fontSize: props.fontSize || "2.5rem",
    },
    "& p": {
      lineHeight: "1.55",
      fontSize: "1rem",
      padding: "20px 0",
    },
  }),

  ["@media (min-width: 600px)"]: {
    icon: {
      width: (props: StylesProps) => (props.spreadItems ? "20%" : null),
    },
  },
  ["@media (min-width: 1024px)"]: {
    icon: {
      width: (props: StylesProps) => (props.spreadItems ? "12.5%" : null),
    },
  },
})

export interface TechIconListProps {
  technologies: string[]
  styles?: StylesProps
  displayName?: boolean
  spreadItems?: boolean
  size?: "small" | "medium" | "large"
}

export interface StylesProps {
  color?: string
  listPadding?: string
  iconPadding?: string
  fontSize?: string
  iconWidth?: number
  spreadItems?: boolean
}
