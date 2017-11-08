import React from 'react'
import Icon from '../molekuls/Icon'
import Image from '../atoms/Image'

import myFace from '../../images/MyFace.jpg'

const Contact = () => {
  return (
    <div className="contact">
      <Image image={myFace} alt="my face"/>

      <div className="social-list">
        <Icon name="github" link="https://github.com/Pingu501"/>
        <Icon name="facebook" link="https://www.facebook.com/Hesse1Alexander"/>
        <Icon name="twitter" link="https://twitter.com/pinguin501"/>
        <Icon name="envelope" link="mailto:alex.hesse@icloud.com" sameWindow={true}/>
      </div>
    </div>
  )
}

export default Contact
