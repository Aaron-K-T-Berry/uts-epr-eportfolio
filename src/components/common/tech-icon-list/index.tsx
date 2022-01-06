import * as React from "react"
import icons from "../../sections/contact/icons"
import SvgIcons from "./icons"
import { makeStyles } from '@mui/styles';

export const TechIconList: React.FunctionComponent<TechIconListProps> = (props) => {
  const classes = useStyles({ ...props.styles })

  const techIcons = [
    { name: "typescript", icon: <i className="devicon-typescript-plain" /> },
    { name: "react", icon: <i className="devicon-react-original" /> },
    { name: "materialui", icon: <i className="devicon-materialui-plain" /> },
    { name: "express", icon: <i className="devicon-express-original" /> },
    { name: "jest", icon: <i className="devicon-jest-plain" /> },
    { name: "docker", icon: <i className="devicon-docker-plain" /> },
    { name: "python", icon: <i className="devicon-python-plain" /> },
    { name: "aws", icon: <i className="devicon-amazonwebservices-plain" /> },
    { name: "medium", icon: <icons.FontAwesomeIcon icon={icons.faMedium} /> },
    { name: "airflow", icon: <SvgIcons.AirflowSvg /> },
    { name: "snowflake", icon: <SvgIcons.SnowflakeSvg /> },
    { name: "linkedin", icon: <i className="devicon-linkedin-plain" /> },
    { name: "github", icon: <i className="devicon-github-plain" /> },
    { name: "twitter", icon: <i className="devicon-twitter-plain" /> },
    { name: "computer", icon: <icons.FontAwesomeIcon icon={icons.faDesktop} /> },
    { name: "word", icon: <icons.FontAwesomeIcon icon={icons.faFileWord} /> },
    { name: "pdf", icon: <icons.FontAwesomeIcon icon={icons.faFilePdf} /> },
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
  list: (props: StylesProps) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",
    paddingTop: props.listPadding || "10px"
  }),
  icon: (props: StylesProps) => ({
    paddingRight: props.iconPadding || "10px",
    "& i": {
      height: 41,
      width: 40,
      color: props.color || "black",
      fontSize: props.fontSize || "2.5rem"
    },
    "& svg": {
      height: 41,
      width: 40,
      color: props.color || "black",
      fontSize: props.fontSize || "2.5rem"
    }
  }),
});

interface TechIconListProps {
  technologies: ("typescript" | "python" | string)[]
  styles?: StylesProps
}

interface StylesProps {
  color?: string
  listPadding?: string
  iconPadding?: string
  fontSize?: string
}
