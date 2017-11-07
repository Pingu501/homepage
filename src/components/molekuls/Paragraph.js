import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../atoms/Heading'

const Paragraph = props => {

  const heading = props.heading ? <Heading size="small">{props.heading}</Heading> : null

  return (
    <div className="paragraph">
      {heading}
      {props.children}
    </div>
  )
}

Paragraph.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.any
}

export default Paragraph