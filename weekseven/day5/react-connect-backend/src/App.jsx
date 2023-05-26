import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import ApartmentsPage from './Pages/Apartments';
import AddApartmentPage from './Pages/AddApartment';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ApartmentsPage/>} />
        <Route path="/apartments/new" element={<AddApartmentPage/>} />
      </Routes>
    </div>
  )
}

export default App;
