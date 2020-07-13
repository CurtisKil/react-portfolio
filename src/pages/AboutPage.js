import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

export default function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <p>
          Hi! My name is Curtis Kilgore. I am a Full Stack Web Devloper with
          experience in JavaScript, NodeJS, SQL, MongoDB, and React.
        </p>

        <p>
          Before I came across Web Development I was already obsessed with
          learning and solving problems. Not to mention science and technology.
          So as soon as I gave this a try I became hooked and I have been
          getting better every single day.
        </p>

        <p>
          When I am not in my coding cave, I am usually lifting/running,
          snowboarding, golfing, or spending time with my friends, family, and,
          or, pets!
        </p>
        <p>
          Hi! My name is Curtis Kilgore. I am a Full Stack Web Devloper with
          experience in JavaScript, NodeJS, SQL, MongoDB, and React.
        </p>
      </Content>
    </div>
  );
}
