import React from 'react'
import Emoji from '../../components/atoms/Emoji'
import Heading from '../../components/atoms/Heading'
import Paragraph from '../../components/molekuls/Paragraph'
import Teaser from '../../components/molekuls/Teaser'

import education from '../../images/Education.jpeg'

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
      Bertolt Brecht High School in Dresden <br/>
      Got my Abitur there in 2015
    </div>
  )

  const tuLeft = (
    <div>
      2015 - present
    </div>
  )

  const tuRight = (
    <div>
      TU Dresden <br/>
      Studying computer science and planning to get my diploma in 2020.
    </div>
  )

  return (
    <section id="stations">

      <Teaser picture={education} text="Stations"/>

      <Heading size="medium">So far</Heading>

      <Paragraph heading="Education">
        <table>
          <tbody>
          <tr>
            <td>{tuLeft}</td>
            <td>{tuRight}</td>
          </tr>
          <tr>
            <td>{grammarLeft}</td>
            <td>{grammarRight}</td>
          </tr>
          <tr>
            <td>{elementaryLeft}</td>
            <td>{elementaryRight}</td>
          </tr>
          </tbody>
        </table>
      </Paragraph>

      <Paragraph heading="Work">
        <a href="https://sandstorm.rocks">Sandstorm Media GmbH</a><br/>
        After school I had 3 months of free time. <br/>
        In this time I decided to do an internship at Sandstorm Media GmbH here
        in Dresden. <br/>
        Since then I'm part of their team and very happy there! <Emoji emoji="♥️"/>
      </Paragraph>

    </section>
  )
}

export default Stations
