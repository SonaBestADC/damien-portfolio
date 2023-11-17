import React, { useState } from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import "./App.scss";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isDarkModeJumbo, setIsDarkModeJumbo] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setIsDarkModeJumbo((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <a href="https://en.wikipedia.org/wiki/The_Eminence_in_Shadow" target="_blank" className="shadow">
        Shadow
      </a>
      <div className={`jumbotron ${isDarkModeJumbo ? "dark-mode-jumbo" : "light-mode-jumbo"}`}>
        <div className="container">
          <Header />
          <AboutMe />
          <hr />
          <Projects />
        </div>
      </div>
      <a className="toggle-btn" onClick={toggleDarkMode}>
        Toggle Dark
      </a>
    </div>
  );
};

export default App;
