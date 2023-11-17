import React from "react";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <div className="projects">
      <div className="project-list">
        <h2>Projects:</h2>
        <ul>
          <li>
            &nbsp;
            <a href="https://github.com/SonaBestADC/damien-portfolio" target="_blank">
              This Portfolio
            </a>
          </li>
          <li>
            &nbsp;
            <a href="https://github.com/Neil925/valenciatechclub" target="_blank">
              Valencia Tech Club Website (Collaborator)
            </a>
          </li>
          <li>
            &nbsp;
            <a href="https://github.com/Neil925/AutoBooks" target="_blank">
              AutoBooks (Collaborator)
              {/* This one is stetching it XD */}
            </a>
          </li>
          <li>
            &nbsp;
            <a href="https://github.com/Neil925/unofficial-engage-api" target="_blank">
              Unofficial Engage API (Collaborator)
            </a>
          </li>
        </ul>
      </div>
      <div className="skills">
        <h2>Skills:</h2>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Python</li>
          <li>Java</li>
          <li>Git</li>
          <li>Linux Systems</li>
          <li>Linux Servers</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="contact">
        <h2>Get In Contact:</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLinkedin} /> &nbsp;{" "}
            <a href="https://www.linkedin.com/in/damien-bowling-a9a497298/" target="_blank">
              My LinkedIn!
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} /> &nbsp;{" "}
            <a href="https://twitter.com/Respectabl46841" target="_blank">
              My Twitter!
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} /> &nbsp;{" "}
            <a href="https://github.com/SonaBestADC" target="_blank">
              My Github!
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faDiscord} /> &nbsp;
            <a href="https://discord.gg/RRkWy4fVMv" target="_blank">
              sonabestadc
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> &nbsp; dbowling2474@protonmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> &nbsp; (321) - 347 - 6088
          </li>
        </ul>
      </div>
    </div>
  );
}
