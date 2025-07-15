import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Qumbar Raza</h1>
        <p>Software Engineer | Full Stack Developer</p>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
