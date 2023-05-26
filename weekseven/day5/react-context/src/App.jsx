import './App.css'; 
import {Routes, Route} from 'react-router-dom';
import projectsData from "./assets/data/projects-data.json";

import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import ProjectsPage from './Pages/Projects';

function App() {

  return (
   <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/projects" element={<ProjectsPage projectsData={projectsData}/>} />
    </Routes>
   </div>
  )
}

export default App
