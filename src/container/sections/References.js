import React from 'react'
import Teaser from '../../components/molekuls/Teaser'

import references from '../../images/References.png'
import Paragraph from '../../components/molekuls/Paragraph'

const References = () => {
  return (
    <div>
      <Teaser picture={references} text="References"/>

      <Paragraph heading={<a href="https://tamburello-staging.dokku3.sandstorm-media.de" target="_blank">www.TamburelloDresden.de</a>}>
        This was the first real website I ever created. It is the online appearance of my sports club.
        Originally based on Joomla! with a poor design. Started the rewrite with the
        <a href="https://neos.io">Neos CMS</a> this year. Using Grunt as task runner for SCSS and JS.

        <p>
          My favorite part is the presence management. It was the first really used software I ever written.
        </p>
      </Paragraph>

      <Paragraph heading={<a href="https://mibium.de" target="_blank">www.Mibium.de</a>}>
        This is a online shop for tamburello equipment like balls, bats, and so on.

        <p>
          This page uses Joomla! as CMS and the HikaShop extension pared with some old school CSS.
        </p>
      </Paragraph>

      <Paragraph heading={<a href="https://neosfunding.sandstorm.de" target="_blank">www.neosfunding.sandstorm.de</a>}>
        This is a longtime project I take care of. Sandstorm is a part of the Neos core development team
        and they decided to collect some money for the project.

        <p>
          It uses the Neos CMS and underneath php framework Flow. It is a fully functional funding platform with
          integration of Taxamo and Braintree containing subscriptions.
        </p>
      </Paragraph>

      <Paragraph heading={<a href="https://exply.io" target="_blank">www.exply.io</a>}>
        "Exply is a self-service BI and analytics solution that provides you with interactive dashboards, reports and data visualisation"

        <p>
          On this project I was part of the frontend development. It was written completely with React/Redux.
          From time to time I wrote some code in the Groovy backend
        </p>
      </Paragraph>
    </div>
  )
}

export default References
