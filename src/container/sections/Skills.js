import React from 'react'

import Teaser from '../../components/molekuls/Teaser'

import code from '../../images/Code.jpg'
import Heading from '../../components/atoms/Heading'

const Skills = () => {
  return (
    <div>
      <Teaser picture={code} text="My Skills"/>

      <p>
        The first programming language I learned was php back in 2012. We had to do an internship and I decided to
        go to the Dresden University (TU Dresden) for which php was required so I started to learn it.
        There I wrote an online inventory tool. I was quick at learning and had a lot of fun!
      </p>

      <p>
        Coding was such great for me that I started writing an presence manager for my sports club.
      </p>

      <p>
        Seen by now this code was horrible but somehow it worked quite well so from then no one could stop me
        from producing more and more code!
      </p>

      <p>
        Because writing only php can get boring I tried myself in plenty other languages
      </p>

      <Heading size="small">php</Heading>

      A lot of people do not like it, but because it was my first language there is some kind of relationship to it.
      Most of my projects are written in php.

      <p>
        I tried myself in some smaller frameworks and my favorite is by far Neos/Flow to use the Neos CMS &lt;3
      </p>

      <Heading size="small">Java</Heading>

      In 2016 together with two of my friends we hold a course in Java for the freshman. In the same semester we had
      to write a bigger hotel management software in our university as part of a practical training using Spring.

      <Heading size="small">C</Heading>

      Not much to say about it. Attended a course in the first semester and had a practical training using just
      c to write our own bot for a virtual board game.

      <Heading size="small">Python</Heading>

      Also a practical training programming a Lego Mindstorm Robot to follow lines, create a intern map about the area,
      send this information to a server and receive paths to new points on this area.
      I often use Python for smaller scripting.

      <Heading size="small">JavaScript</Heading>

      Belongs to the first languages I learned and well ... still like it! This hole page is written in JS ...
      Well it is written with React using ECMA Script, but basiclly it is JS! Used for a lot stuff by my current
      employer.

      <p>
        As I already mentioned this page is written completely in React. I was participated in using React to create the
        new UI of <a href="https://exply.io/en">Exply</a>. A product we produce.
      </p>

      <p>
        jQuery was the first library I ever used. At the moment I think pure JS is way better.
      </p>

      <Heading size="small">Swift</Heading>

      Nothing big by now, just playing around with it.

      <Heading size="small">HTML</Heading>

      It is not a programming language, but often needed as well. Did my first websites with pure HTML.

      <Heading size="small">S(CSS)</Heading>

      About two years ago I really hated CSS, now I love it. I'm quite fast writing it and the number times
      I have to look up some stuff here is at the moment very low. <br/>
      This page is styled with SCSS (using variables and nested rules).

      <Heading size="medium">Technologies & Tools </Heading>

      <Heading size="small">git</Heading>

      I'm daily using git on the console and can work good with it.

      <Heading size="small">UNIX</Heading>

      Currently I'm working on a MacBook. I do not like using Windows for coding, still using it for gaming.
      Since I used some months a Ubuntu and now Mac for a couple of years I use the Console to manage files,
      directories, projects and of cause git.

      <Heading size="medium">Languages </Heading>

      <p>
        German is my mother tongue hearing and speaking it now daily for over 20 years.
      </p>

      <p>
        I started learning English in 3rd grade, learned it till 12th grade and now I often read it,
        listen to it in some series and movies.
      </p>

    </div>
  )
}

const StarRating = props => {
  return props.value
}

export default Skills
