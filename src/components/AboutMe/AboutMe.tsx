import React from "react";
import "./AboutMe.scss";
import Damien from "../../img/Damien.jpg";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="description">
        <p>
          <strong>Hello There!</strong>
        </p>
        <p>
          My name is Damien Bowling, I'm an enthusiastic individual with a passion for technology and computers. My journey started in
          highschool where I first started to learn all about computers and later programming. When I decided to delve into the world of
          computer programming I started with JavaScript. It, as well as TypeScript, are currently the language(s) I am most proficient
          with. I would go on to learn many other languages and frameworks as I needed them. Currently I mostly make small projects that I
          might find useful. For example, a script that can assist me in automatically renaming a large quantity of pictures, or a script
          that prints all the subdirectories into a text file. I also like collaborating on larger projects with my friends. One of the most
          interesting ones was a website for the club that I am a part of.
        </p>
        <p>
          Beyond just coding, I personally like to play games and read literature. My friends and I often host game nights where we play a
          variety of games together such as Warhammer 40K, D&D, cards, and other games. As for literature I read a variety of genres but the
          two I read the most are fantasy and history. I am actually in a 'Cold War' with my friend, Neil, because neither of us will read
          the other's book series till the other starts first.
        </p>
        <p>
          I am always looking at the newest advances in technology and seeing what new things I can experiment and learn from. Currently I
          have been fascinated by AI such as ChatGPT and have had a lot of fun messing with it and making very small test projects. I want
          to see what fun and interesting things I can make in the future.
        </p>
      </div>
      <img src={Damien} alt="Damien" />
    </div>
  );
}
