import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

const HomeDetails = <Home 
name = {user.name}
color = {user.color}
city = {user.city}
/>

const Bio = <About 
bio = {user.bio}
/>

function App() {
  return (
    <div>
      <NavBar />
      {HomeDetails}
      {Bio}
    </div>
  );
}

export default App;
