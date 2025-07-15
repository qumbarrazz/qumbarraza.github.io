import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>BYU Pathway - Education Platform</h3>
        <p>
          Developed curriculum and resource management features with robust user roles.
        </p>
        <p><strong>Tech Stack:</strong> AngularJS, React, .NET Core, Domain-Driven Design</p>
      </div>

      <div className="project">
        <h3>GraspLingo - Language Learning App</h3>
        <p>
          Integrated GPT-4 for language modules, improving user experience.
        </p>
        <p><strong>Tech Stack:</strong> React, .NET 7, SQL Server, OpenAI APIs</p>
      </div>

      <div className="project">
        <h3>Dillners Accounting Tools</h3>
        <p>
          Led backend enhancements and API integrations for an accounting suite.
        </p>
        <p><strong>Tech Stack:</strong> .NET Core, SQL Server, Azure</p>
      </div>
    </section>
  );
}

export default Projects;
