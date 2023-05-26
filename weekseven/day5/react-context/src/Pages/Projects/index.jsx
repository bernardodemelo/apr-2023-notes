import { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme.context";

import ProjectCard from "../../Components/ProjectCard";
 
function ProjectsPage(props) {
  const {projectsData} = props;
  const [projects, setProjects] = useState(projectsData);
  const { theme } = useContext(ThemeContext);
 
  return (
    <div className={"ProjectsPage " + theme}>
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;