import {useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';

import AddProject from '../AddProject';
import projectsService from '../../Services/project.service';


// STEPS TO DO: 
// 1) Get the Projects.
// 2) How can I do this? I make a Get request
// to my backend via Axios. 
// 3) We'll store the projects in the State. 
// 4) We map through all the elements of projects'
// array that is in the State. 

function ProjectsListPage(){
    const [projects, setProjects] = useState([]);

    // function that gets projects via axios
    const getAllProjects = () => {
        projectsService.getAllProjects()
        .then((response)=> setProjects(response.data))
        .catch((error)=>console.log(error));
    }; 
    // setting a side-effect after initial rendering of component that is 
    // calling getAllProjects function
    useEffect(()=>{
        getAllProjects();
    }, []);

    return(
        <div className="project-list-page">
        <AddProject refreshProjects={getAllProjects} /> {/* ADD */}
        {projects.map((project)=>{
            return(
                <div className="project-card card" key={project._id}>
                    <Link to={`/projects/${project._id}`}>
                        <h3>{project.title}</h3>
                    </Link>
                </div>
            )
        })}
        </div>
    )

}

export default ProjectsListPage