import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Logos',
      description: 'Object Oriented Programming',
      link: "https://zxncho.github.io/10.02-challenge/",
      repo: "https://github.com/zxncho/10.02-challenge"
    },
    {
      name: 'Ecomm',
      description: 'Object Relational Mapping',
      link: "https://drive.google.com/file/d/1QmKgpAa5NaUe5OrXD9g3Au-HAhUtHXVS/view",
      repo: "https://github.com/zxncho/13.02-challenge"
    },
    {
      name: 'Figgler',
      description: 'Progressive Web Apps',
      link: "https://figgler.onrender.com",
      repo: "https://dashboard.render.com/web/srv-cm8dujen7f5s73ecncc0"
    },
    {
      name: 'WorkDay',
      description: 'Third Party APIs',
      link: "https://zxncho.github.io/05.02-challenge/",
      repo: "https://github.com/zxncho/05.02-challenge"
    },
    {
      name: 'Quiz',
      description: 'Web APIs',
      link: "https://zxncho.github.io/04.02-challenge/",
      repo: "https://github.com/zxncho/04.02-challenge"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
