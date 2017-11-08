import React from 'react'
import Teaser from '../../components/molekuls/Teaser'
import Image from '../../components/atoms/Image'
import Heading from '../../components/atoms/Heading'

import Social from '../../components/atoms/Social'

import myFace from '../../images/MyFace.jpg'
import dresden from '../../images/Dresden.jpg'

const Basic = () => {
  return (
    <div>
      <Teaser picture={dresden} text="Hey, my name is Alex"/>

      <Heading size="small">and this is my homepage!</Heading>

      <Image image={myFace} floating={true} alt="my face"/>

      <p>
        I was born on the 20th of november 1996 in Dresden/Saxony/Germany.
        Currently I'm studying computer science at the TU Dresden and hopefully
        will get my diploma in 2020 ... way too long to go, but still having fun there! :)
      </p>

      <p>
        I'm planing to do an internship in 2018 (starting in september/october). If you are looking
        for some people working for you contact me!
      </p>

      <div className="social-list">
        <Social type="github"/>
        <Social type="facebook"/>
        <Social type="twitter"/>
        <Social type="mail"/>
      </div>
    </div>
  )
}

export default Basic
