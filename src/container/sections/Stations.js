import React from 'react'

import Teaser from '../../components/molekuls/Teaser';

import Paragraph from '../../components/molekuls/Paragraph'

import city from '../../images/roman-kraft-128742.jpg';

const Stations = () => {
  return (
    <div>
      <Teaser picture={city} text="So far"/>

      nothing special happened...

      <Paragraph heading="Elementary School">
        visited from 2003 to 2007
      </Paragraph>
    </div>
  )
}

export default Stations
