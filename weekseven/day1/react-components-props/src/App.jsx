import './App.css';
import Navbar from "./Components/Navbar";
import Greeting from './Components/Greeting';
import StudentList from './Components/StudentList';
import StudentCard from './Components/StudentCard';

// Import Packages
import {FaBeer} from 'react-icons/fa';

function App() {
  return (
    <div>
      <Navbar />
    {/* React Component from props example */}
      <Greeting firstName="Chico" textColor="green"/>
    {/* React Component from props.children examples */}
      <StudentList>
        <StudentCard name="Alexandre" week={7} info={{city: 'Lisbon', course:'DATA'}} />
        <StudentCard name="Bruno" week={6} info={{city: 'Lisbon', course:'WEBDEV'}} />
      </StudentList>
      {/* React Component from a NPM Package */}
      <FaBeer />
    </div>
  )
}

export default App
