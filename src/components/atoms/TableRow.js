import React from 'react'
import PropTypes from 'prop-types'

const TableRow = props => {
  let valueRow = '';
  switch (props.data.type) {
    case 'link':
      valueRow = <a href={props.data.link} target="_blank">{props.data.value}</a>
      break
    case 'multi-row':
      valueRow = props.data.value.split('\n').map((e,i) => {
        return <div key={i}>{e}</div>
      })
      break
    default:
      valueRow = props.data.value
  }

  return (
    <tr>
      <td className="text--right">
        {props.data.key}
      </td>
      <td>
        {valueRow}
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  data: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    link: PropTypes.string
  }),
}

export default TableRow
