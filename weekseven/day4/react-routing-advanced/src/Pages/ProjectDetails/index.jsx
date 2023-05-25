import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from 'react';

function ProjectDetailsPage(props) {
  //write State
  // 1) Store the specific Project inside State
  const [project, setProject] = useState("");
   
  // Same as Express -> const {projectId} = req.params;
  const {projectId} = useParams();

  // Destructuring props.projects.
  const {projects} = props;

  useEffect(()=>{
    // Find the Project with the id that matches Route Params
    const foundProject = projects.find((oneProject)=>{
        return oneProject._id === projectId;
    })

    // Store it into state, in order to persist Updates
    setProject(foundProject);

  }, [projects])

  return (
    <div>
        {   /*If there's a project, return Project Details */
            project && (
            <div>
                <h2>{project.name}</h2>
                <h3>Tech Stack: {project.technologies}</h3>
                <p>{project.description}</p>
                <Link to="/projects">Back</Link>
            </div>

            /* project? (<div>
                <h2>{project.name}</h2>
                <h3>Tech Stack: {project.technologies}</h3>
                <p>{project.description}</p>
                <Link to="/projects">Back</Link>
            </div>) : null */
        )}
    </div>
  )
}

export default ProjectDetailsPage;