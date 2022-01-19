import * as React from "react"
import { makeStyles } from "@mui/styles"
import data from "./data"

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

  return (
    <div className={classes.list}>
      {props.technologies.map((tech) => {
        const iconDetails = data.filter((value) => value.name == tech)[0]
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
    padding: (props: StylesProps) => props.listPadding || "10px 0 10px 0",
  },
  icon: (props: StylesProps) => ({
    width: props.spreadItems ? "30%" : null,
    padding: props.iconPadding || "0 10px 0 0",
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
