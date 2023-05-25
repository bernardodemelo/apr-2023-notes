import './App.css';

//import Pages 
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ErrorPage from './Pages/Error'; 
import ProjectsPage from './Pages/Projects';

//import Components
import Navbar from './Components/Navbar';

// Import Routes Components from 'react-router-dom'
import {Routes, Route} from "react-router-dom";

// Import Data
import projectData from "./assets/data/project-data.json";


function App() {

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>

      <Route path="/about" element={<AboutPage/>}/>

      <Route path="/projects" element={<ProjectsPage projects={projectData}/>}/>
      
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </div>
  )
}

export default App
