import React from 'react'
import Teaser from '../../components/molekuls/Teaser'
import Paragraph from '../../components/molekuls/Paragraph'

import tamburello from '../../images/Tamburello.jpg'
import Link from '../../components/atoms/Link'
import Emoji from '../../components/atoms/Emoji'

const Hobbies = () => {
  return (
    <section id="hobbies">
      <Teaser picture={tamburello} text="Hobbies"/>

      <Paragraph heading="Tamburello">
        This is a very old sport coming from Italy. <br/>
        I'm an active member since 2009 with 3-4 trainings per week. <Link destination="https://tamburellodresden.de"
                                                                           text="More here"/> or at our <Link
        destination="https://tamburello-staging.dokku3.sandstorm-media.de" text="new site"/>.
      </Paragraph>

      <Paragraph heading="Coding">
        At the moment I'm usign React to write this page. Also I'm trying to get in touch with groovy
        and more and more iOS development.
      </Paragraph>

      <Paragraph heading="Music">
        I <Emoji emoji="♥️"/>️ music. Listening to music every day and also playing the guitar (learned it by myself).
      </Paragraph>
    </section>
  )
}

export default Hobbies
