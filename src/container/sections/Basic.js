import React from 'react'
import Teaser from '../../components/molekuls/Teaser'
import Heading from '../../components/atoms/Heading'

import dresden from '../../images/Dresden.jpg'
import Contact from '../../components/molekuls/Contact'
import TwoColumn from '../TwoColumn'

const intro = (
  <div>
    <Heading size="small">And this is my homepage!</Heading>

    <p>
      I was born on November 20th 1996 in Dresden / Saxony / Germany.
      Currently I'm studying computer science at TU Dresden and plan
      to get my diploma in 2020 ... way too long to go, but still having fun there! :)
    </p>

    <p>
      I'm planing to do an internship in 2018 (starting in September / October). If you are looking
      for a fast learning web developer with experience in modern technologies like React, php and Python look no
      further!
    </p>
  </div>
)

const Basic = () => {
  return (
    <section id="basic">
      <Teaser picture={dresden} text="Hey, my name is Alex!"/>

      <TwoColumn left={intro} right={<Contact/>}/>
    </section>
  )
}

export default Basic
