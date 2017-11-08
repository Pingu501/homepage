import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../atoms/Heading'
import Link from '../atoms/Link'

const Paragraph = props => {

  let heading = ''

  if (props.heading) {
    heading = <Heading size="small">{props.headingIsLink ?
      <Link destination={props.headingLinkDestination} text={props.heading}/> : props.heading}</Heading>
  }

  return (
    <div className="paragraph">
      {heading}
      {props.children}
    </div>
  )
}

Paragraph.propTypes = {
  heading: PropTypes.string,
  headingIsLink: PropTypes.bool,
  headingLinkDestination: PropTypes.string,
  children: PropTypes.any
}

export default Paragraph