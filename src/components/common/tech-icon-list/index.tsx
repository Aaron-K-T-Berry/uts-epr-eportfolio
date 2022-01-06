import * as React from "react"
import icons from "../../sections/contact/icons"
import SvgIcons from "./icons"
import { makeStyles } from '@mui/styles';

export const TechIconList: React.FunctionComponent<TechIconListProps> = (props) => {
  const templateStyles = {
    small: {
      fontSize: "2rem",
      iconWidth: 32,
    },
    medium: {
      fontSize: "2.5rem",
      iconWidth: 40,
    }
  }

  const classes = useStyles({
    ...(props.size ? templateStyles[props.size] : {}), ...props.styles
  })

  const techIcons = [
    { name: "javascript", icon: <i className="devicon-javascript-plain" /> },
    { name: "typescript", icon: <i className="devicon-typescript-plain" /> },
    { name: "react", icon: <i className="devicon-react-original" /> },
    { name: "materialui", icon: <i className="devicon-materialui-plain" /> },
    { name: "express", icon: <i className="devicon-express-original" /> },
    { name: "jest", icon: <i className="devicon-jest-plain" /> },
    { name: "docker", icon: <i className="devicon-docker-plain" /> },
    { name: "python", icon: <i className="devicon-python-plain" /> },
    { name: "aws", icon: <i className="devicon-amazonwebservices-plain" /> },
    { name: "linkedin", icon: <i className="devicon-linkedin-plain" /> },
    { name: "github", icon: <i className="devicon-github-plain" /> },
    { name: "twitter", icon: <i className="devicon-twitter-plain" /> },
    { name: "linux", icon: <i className="devicon-linux-plain" /> },
    { name: "bash", icon: <i className="devicon-bash-plain" /> },
    { name: "medium", icon: <icons.FontAwesomeIcon icon={icons.faMedium} /> },
    { name: "computer", icon: <icons.FontAwesomeIcon icon={icons.faDesktop} /> },
    { name: "word", icon: <icons.FontAwesomeIcon icon={icons.faFileWord} /> },
    { name: "pdf", icon: <icons.FontAwesomeIcon icon={icons.faFilePdf} /> },
    { name: "packer", icon: <SvgIcons.PackerSvg /> },
    { name: "terraform", icon: <SvgIcons.TerraformSvg /> },
    { name: "proxmox", icon: <SvgIcons.ProxmoxSvg /> },
    { name: "swagger", icon: <SvgIcons.SwaggerSvg /> },
    { name: "airflow", icon: <SvgIcons.AirflowSvg /> },
    { name: "snowflake", icon: <SvgIcons.SnowflakeSvg /> },
  ]

  return <div className={classes.list}>
    {props.technologies.map((tech) => {
      const iconDetails = techIcons.filter((value) => value.name == tech)[0]
      if (iconDetails) {
        return <div className={classes.icon}>
          {iconDetails.icon}
        </div>
      }
    })}
  </div >
}

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: (props: StylesProps) => props.listPadding || "10px",
  },
  icon: {
    paddingRight: (props: StylesProps) => props.iconPadding || "10px",
    "& i": {
      width: (props: StylesProps) => props.iconWidth || 40,
      height: (props: StylesProps) => props.iconWidth || 40,
      color: (props: StylesProps) => props.color || "black",
      fontSize: (props: StylesProps) => props.fontSize || "2.5rem"
    },
    "& svg": {
      width: (props: StylesProps) => props.iconWidth || 40,
      height: (props: StylesProps) => props.iconWidth || 40,
      color: (props: StylesProps) => props.color || "black",
      fontSize: (props: StylesProps) => props.fontSize || "2.5rem"
    }
  },
});

export interface TechIconListProps {
  technologies: ("typescript" | "python" | string)[]
  styles?: StylesProps
  size?: "small" | "medium"
}

export interface StylesProps {
  color?: string
  listPadding?: string
  iconPadding?: string
  fontSize?: string
  iconWidth?: number
}
