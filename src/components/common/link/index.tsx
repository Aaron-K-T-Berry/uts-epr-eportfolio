import { OutboundLink } from "gatsby-plugin-google-gtag"
import * as React from "react"

export const Link: React.FunctionComponent<LinkProps> = (props) => {
  if (props.outbound) {
    return <OutboundLink>
      <a target="blank" href={props.href} rel="noopener noreferrer">
        {props.text}
      </a>
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
}
