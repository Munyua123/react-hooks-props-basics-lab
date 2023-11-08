import React from "react";
import Links from "./links.js";
import user from "../data/user";


const Socials = <Links 
github = {user.links.github}
linkedin = {user.links.linkedin}
/>

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {Socials}
    </div>
  );
}

export default About;
