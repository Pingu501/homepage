import React from 'react'
import Paragraph from '../../components/molekuls/Paragraph'
import Emoji from '../../components/atoms/Emoji'

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

  const sandstormLeft = (
    <div>
      2015 - present
    </div>
  )

  const sandstormRight = (
    <div>
      <a href="https://sandstorm.rocks">Sandstorm Media GmbH</a><br/>
      After school I had 3 months of free time. <br/>
      In this time I decided to do an internship at Sandstorm Media GmbH here
      in Dresden. <br/>
      Since then I'm part of their team and very happy there! <Emoji emoji="♥️"/>
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

      <Paragraph heading="So far">
        nothing special happened...
      </Paragraph>

      <table>
        <tbody>
          <tr>
            <td>{elementaryLeft}</td>
            <td>{elementaryRight}</td>
          </tr>
          <tr>
            <td>{grammarLeft}</td>
            <td>{grammarRight}</td>
          </tr>
          <tr>
            <td>{sandstormLeft}</td>
            <td>{sandstormRight}</td>
          </tr>
          <tr>
            <td>{tuLeft}</td>
            <td>{tuRight}</td>
          </tr>
        </tbody>
      </table>

    </section>
  )
}

export default Stations
