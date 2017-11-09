import React from 'react'
import Teaser from '../../components/molekuls/Teaser'
import Heading from '../../components/atoms/Heading'

import dresden from '../../images/Dresden.jpg'
import Contact from '../../components/molekuls/Contact'

const Basic = () => {
  return (
    <div id="basic">
      <Teaser picture={dresden} text="Hey, my name is Alex"/>

      <Contact/>

      <Heading size="small">and this is my homepage!</Heading>

      <p>
        I was born on the 20th of november 1996 in Dresden/Saxony/Germany.
        Currently I'm studying computer science at the TU Dresden and hopefully
        will get my diploma in 2020 ... way too long to go, but still having fun there! :)
      </p>

      <p>
        I'm planing to do an internship in 2018 (starting in september/october). If you are looking
        for some people working for you contact me!
      </p>
    </div>
  )
}

export default Basic
