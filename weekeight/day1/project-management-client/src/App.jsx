import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import ProjectsListPage from './Pages/ProjectsList'; 
import ProjectDetailsPage from './Pages/ProjectDetails';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectsListPage/>}/>  
        <Route path="/projects/:projectId" element={<ProjectDetailsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
