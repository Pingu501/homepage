import React from 'react'
import PropTypes from 'prop-types'

import TableRow from '../atoms/TableRow'

const Table = props => {
  return (
    <table>
      <tbody>
      {props.rows.map((e, i) => {
        return (
          <TableRow data={e} key={i}/>
        )
      })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  rows: PropTypes.array
}

export default Table
