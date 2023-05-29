import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../../Components/AddTask";

const API_URL = "http://localhost:5005";

function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
 
  const { projectId } = useParams();

  const getProject = () => {        
    axios
      .get(`${API_URL}/api/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=> {             
    getProject();
  }, [] );
  
  return (
    <div className="project-details">
      {project && (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      )}
        
      <AddTask refreshProject={getProject} projectId={projectId} /> 

      {project &&
        project.tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </div>
      ))}

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>      
 
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}
 
export default ProjectDetailsPage;