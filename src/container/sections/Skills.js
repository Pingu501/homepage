import React from 'react'

import Teaser from '../../components/molekuls/Teaser'

import code from '../../images/Code.jpg'
import Heading from '../../components/atoms/Heading'
import Emoji from '../../components/atoms/Emoji'
import Link from '../../components/atoms/Link'
import Skill from '../../components/molekuls/Skill'

const Skills = () => {
  return (
    <section id="skills">
      <Teaser picture={code} text="My Skills"/>

      <p>
        The first programming language I learned back in 2012 was php. I did an internship at Dresden
        University (TU Dresden) where I wrote an online inventory tool. Learning went really well and I had a lot of fun!
      </p>

      <p>
        I acquired a taste for programming and wrote a presence manager for my sports club.
      </p>

      <p>
        So from then no one could stop me from producing more and more code!
        Looking back now, this code was horrible but it worked.
      </p>

      <p>
        After a while I got curious about other languages and thought them mostly by myself:
      </p>

      <div className="skill__wrapper">
        <Skill name="php" rating={4}>
          <p>
            Many people do not like php, but I do.
            Most of my projects are written in php.
          </p>

          <p>
            I tried working with some smaller frameworks and my favorite is by far
            <Link destination="https://flow.neos.io/" text="Neos/Flow"/> to use the Neos CMS <Emoji emoji="♥️"/>.
          </p>
        </Skill>

        <Skill name="Java" rating={3}>
          In 2016 two of my friends of mine and I held a course in Java for the freshmen of the TU Dresden.
          In the same semester we had to write a bigger hotel management software as part of a practical
          training using Spring Framework.
        </Skill>

        <Skill name="C" rating={3}>
          Not much to say about it. In the first semester I attended a course and had a practical training using just
          c to write our own bot for a virtual board game.
        </Skill>

        <Skill name="Python" rating={4}>
          In another practical training we had programm a Lego Mindstorm Robot in Python. It hat to follow lines, create
          an
          internal map about the area, send this information to a server and receive paths to new points on this area.
          I often use Python for smaller scripting.
        </Skill>

        <Skill name="JavaScript" rating={4}>
          <p>
            JavaScript belongs to the first languages I learned and well ...
            I still like it! This whole page is written in JS ...
            Well it is written with React using ECMA Script, but basiclly
            it is JS! It is used for a lot projects at sandstorm.
          </p>


          <p>
            As I already mentioned this page is written completely in React. I participate in using React to create the
            new UI of <a href="https://exply.io/en">Exply</a>. A product we offer at sandstorm.
          </p>

          <p>
            jQuery was the first library I ever used.
          </p>
        </Skill>

        <Skill name="Swift" rating={4}>
          About a year ago I started writing smaller applications for learning swift.
        </Skill>

        <Skill name="HTML" rating={5}>
          It is not a programming language, but often needed. I did my first websites with plane HTML.
        </Skill>

        <Skill name="(S)CSS" rating={5}>
          About two years ago I really hated CSS, now I like it.
          This page is styled with SCSS (using variables and nested rules).
        </Skill>
      </div>

      <Heading size="medium">Technologies & Tools</Heading>

      <div className="skill__wrapper">
        <Skill name="Git" rating={4}>
          I'm using git on the console on a daily base and can work good with it.
        </Skill>

        <Skill name="UNIX" rating={3}>
          By using Ubuntu for a couple of months and now a MacBook I learned to love working with the console.
        </Skill>
      </div>

      <Heading size="medium">Languages</Heading>

      <div className="skill__wrapper">
        <Skill name="German" rating={5}/>
        <Skill name="English" rating={4}/>
      </div>

    </section>
  )
}

export default Skills
