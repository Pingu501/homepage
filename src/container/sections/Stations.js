import React from 'react'
import Heading from '../../components/atoms/Heading'
import Paragraph from '../../components/molekuls/Paragraph'
import Teaser from '../../components/molekuls/Teaser'

import education from '../../images/Education.jpeg'
import Link from '../../components/atoms/Link'

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
        After school I decided to do an internship at <Link destination="https://sandstorm.rocks"
                                                            text="Sandstorm Media GmbH"/> here in Dresden.
        Sandstorm is a company with strong values using state of the art technology like React and Kubernetes.
        There I learned how to work with frameworks and library as well as working in a team.<br/>
        After my internship I decided to work alongside my studies to stay in touch with the more business like live
        and real used technologies.i
      </Paragraph>

    </section>
  )
}

export default Stations
