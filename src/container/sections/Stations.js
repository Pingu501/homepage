import React from 'react'
import Paragraph from '../../components/molekuls/Paragraph'
import TwoColumn from '../../components/organisms/TwoColumn'

const Stations = () => {

  const elementaryLeft = (
    <div>
      2003 - 2007
    </div>
  )

  const elementaryRight = (
    <div>
      Albrecht Dürer Elementary School in Dresden
    </div>
  )

  const grammarLeft = (
    <div>
      2007 - 2015
    </div>
  )

  const grammarRight = (
    <div>
      Bertolt Brecht Grammar School in Dresden <br/>
      Got my Abitur there in 2015
    </div>
  )

  const sandstormLeft = (
    <div>
      2015 - present
    </div>
  )

  const sandstormRight = (
    <div>
      After school I had 3 months of free time. <br/>
      I decided to do an internship at <a href="https://sandstorm.rocks">Sandstorm Media GmbH</a> here
      in Dresden. <br/>
      Since then I'm part of their team and very happy there! &lt;3
    </div>
  )

  const tuLeft = (
    <div>
      2015 - present
    </div>
  )

  const tuRight = (
    <div>
      studying computer science <br/>
      planing to get my diploma in 2020.
    </div>
  )

  return (
    <div>

      <Paragraph heading="So far">
        nothing special happened...
      </Paragraph>

      <TwoColumn left={elementaryLeft} right={elementaryRight}/>
      <TwoColumn left={grammarLeft} right={grammarRight}/>
      <TwoColumn left={sandstormLeft} right={sandstormRight}/>
      <TwoColumn left={tuLeft} right={tuRight}/>

    </div>
  )
}

export default Stations
