import * as React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

export const Link: React.FunctionComponent<LinkProps> = (props) => {
  if (props.outbound) {
    return <OutboundLink href={props.href} target="blank" rel="noopener noreferrer">
      {props.chevron ? (<>{props.text} <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" /></>) : (<>{props.text}</>)}
    </OutboundLink>
  } else {
    return <a href={props.href}>
      {props.text}
    </a>

  }
}

interface LinkProps {
  href: string
  text: string
  outbound?: boolean
  chevron?: boolean
}
