import React from 'react'

import Table from '../../components/organisms/Table'
import TwoColumn from '../../components/organisms/TwoColumn'
import Image from '../../components/atoms/Image'

import myFace from '../../images/Cody.JPG'

const Basic = () => {

  const columnLeft = (
    <Table rows={[
      {key: 'Name', value: 'Alexander Hesse'},
      {key: 'Day of Birth', value: '20.11.1996'},
      {key: 'City of Birth', value: 'Dresden'},
      {key: 'Address', type: 'multi-row', value: 'Lenbachstrasse 5\n01219 Dresden\nGermany'},
      {key: 'Mobile No.', value: '+49 174 2179506'},
      {key: 'Mail', type: 'link', value: 'alex.hesse@icloud.com', link: 'mailto:alex.hesse@icloud.com'},
      {key: 'GitHub', type: 'link', value: '/pingu501', link: 'https://github.com/pingu501'}
    ]}/>
  )

  const columnRight = (
    <Image image={myFace}/>
  )

  return (
    <div>
      <h1>Hey, my name is Alex</h1>
      <p>
        and this is my homepage.
      </p>

      <TwoColumn left={columnLeft} right={columnRight}/>
    </div>
  )
}

export default Basic
