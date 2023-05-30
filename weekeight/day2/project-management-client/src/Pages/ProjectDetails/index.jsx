import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link, useParams} from 'react-router-dom';

const API_URL = 'http://localhost:5005';

function ProjectDetailsPage() {
  // write state. By default it'll be null because we don't have
  // the project
  const [project, setProject] = useState(null);

  // grab the ProjectId from route params
  const {projectId} = useParams();
  
  // function to call axios to do a GET request 
  // to find a Project by the Id. 
  const getProject = () =>{
    axios.get(`${API_URL}/api/projects/${projectId}`)
    .then((response)=>{
        const oneProject = response.data; 
        setProject(oneProject);
    })
    .catch((error)=>console.log(error));
  }

  // Side-effect after initial render of the component.
  // The empty array must be as a parameter to tell to React that 
  // it'll happen after it renders the component

  useEffect(()=>{
    getProject();
  }, [])

  return (
    <div className="project-details">
      {project && (
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      )}
        
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>      
 
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  )
}

export default ProjectDetailsPage