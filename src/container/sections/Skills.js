import React from 'react'

import Teaser from '../../components/molekuls/Teaser'

import code from '../../images/Code.jpg'
import Heading from '../../components/atoms/Heading'
import Emoji from '../../components/atoms/Emoji'
import Link from '../../components/atoms/Link'

const Skills = () => {
  return (
    <section id="skills">
      <Teaser picture={code} text="My Skills"/>

      <p>
        First programming language I learned back in 2012, was php. We had to do an internship and I decided to
        go to the Dresden University (TU Dresden). PHP was required so I started learning it.
        There I wrote an online inventory tool. Learning went quite well and had a lot of fun!
      </p>

      <p>
        Coding was so much fun that I started writing a presence manager for my sports club.
      </p>

      <p>
        Looking back this code was horrible but somehow it worked quite well so from then no one could stop me
        from producing more and more code!
      </p>

      <p>
        Writing only php can get boring so I tried myself in various other languages.
      </p>

      <Heading size="small">PHP</Heading>

      Many people do not like php, but I do.
      Most of my projects are written in php.

      <p>
        I tried working with some smaller frameworks and my favorite is by far
        <Link destination="https://flow.neos.io/" text="Neos/Flow"/> to use the Neos CMS <Emoji emoji="♥️"/>.
      </p>

      <Heading size="small">Java</Heading>

      In 2016 two of my friends of mine and I held a course in Java for the freshmen of the TU Dresden.
      In the same semester we had to write a bigger hotel management software as part of a practical
      training using Spring Framework.

      <Heading size="small">C</Heading>

      Not much to say about it. In the first semester I attended a course and had a practical training using just
      c to write our own bot for a virtual board game.

      <Heading size="small">Python</Heading>

      In another practical training we had programm a Lego Mindstorm Robot in Python. It hat to follow lines, create an
      internal map about the area, send this information to a server and receive paths to new points on this area.
      I often use Python for smaller scripting.

      <Heading size="small">JavaScript</Heading>

      JavaScript belongs to the first languages I learned and well ...
      I still like it! This whole page is written in JS ...
      Well it is written with React using ECMA Script, but basiclly
      it is JS! It is used for a lot projects at sandstorm.

      <p>
        As I already mentioned this page is written completely in React. I participate in using React to create the
        new UI of <a href="https://exply.io/en">Exply</a>. A product we offer at sandstorm.
      </p>

      <p>
        jQuery was the first library I ever used. At the moment I think pure JS is way better.
      </p>

      <Heading size="small">Swift</Heading>

      About a year ago I started writing smaller applications for learning swift, mainly using SpriteKit.

      <Heading size="small">HTML</Heading>

      It is not a programming language, but often needed. I did my first websites with plane HTML.

      <Heading size="small">S(CSS)</Heading>

      About two years ago I really hated CSS, now I like it.
      This page is styled with SCSS (using variables and nested rules).

      <Heading size="medium">Technologies & Tools</Heading>

      <Heading size="small">Git</Heading>

      I'm using git on the console on a daily base and can work good with it.

      <Heading size="small">UNIX</Heading>

      Currently I'm working on a MacBook. I do not like using Windows for coding but I still use it for gaming.
      By using Ubuntu for a couple of months and now a MacBook I learned to love working with the console.

      <Heading size="medium">Languages</Heading>

      <p>
        German is my first language.
      </p>

      <p>
        Learning english since 2005
      </p>

    </section>
  )
}

export default Skills
