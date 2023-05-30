import './App.css';
import {Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import ProjectsListPage from './Pages/ProjectsList'; 
import ProjectDetailsPage from './Pages/ProjectDetails';
import EditProjectPage from './Pages/EditProject';
import SignUpPage from './Pages/SignUp';
import LoginPage from './Pages/Login';

import IsPrivate from './Components/IsPrivate';
import IsAnon from './Components/IsAnon';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<IsPrivate><ProjectsListPage/></IsPrivate>}/>  
        <Route path="/projects/:projectId" element={<IsPrivate><ProjectDetailsPage/></IsPrivate>}/>
        <Route path="/projects/edit/:projectId" element={<IsPrivate><EditProjectPage/></IsPrivate>}/>
        <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
        <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>}/>
      </Routes>
    </div>
  )
}

export default App
