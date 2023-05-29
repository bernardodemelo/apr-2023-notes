import {useState} from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

// STEPS:
// 1) Create a Form; 
// 2) Connect the input values with state values; 
// 3) Create handle functions to handle change of inputs; 
// 4) Create function that handles form submit 
// 5) Inside this function, create a post request via Axios. 

function AddProject(props) {
  // 2) Write State
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");  

  // 4) and 5) Steps

  const handleSubmit = (e) =>{
    e.preventDefault();

    const requestBody = {title, description};

    axios.post(`${API_URL}/api/projects`, requestBody)
    .then((response)=>{
        setTitle("");
        setDescription("");
        props.refreshProjects();
    })
    .catch((error)=>console.log(error));
  }


  return (
    <div className="add-project">
      <h3>Add Project</h3>
 
      <form onSubmit={handleSubmit}>      
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
 
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddProject