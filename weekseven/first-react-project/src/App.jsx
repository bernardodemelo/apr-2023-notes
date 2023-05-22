import './App.css'; 
import chicoMacareu from "./assets/images/chicomacareu.jpg";

function App() {
  // Example with HTML Tags
  const heading = <h1>I love React so much, it's beautiful</h1>;

  // Example with Objects
  const favPerson = {
    firstName: 'Chico', 
    lastName: 'Macareu'
  };

  // Object destructuring - it helps us to create variables with the 
  // same name as object properties. 
  const {firstName, lastName} = favPerson;

  let lisbonPM = 'Diogo Capitão';

  // Create Function inside the Component
  // parameter - is a placeholder that labels the value that is going 
  // to be passed in a function.
  // argument - the actual value that is going to be passed in a function
  
  function capitalizeFirstLetter(param){
    return param[0].toUpperCase() + param.slice(1);
  }

  let studentName = "robson";

  // Pass HTML attributes values
  const classApp = 'home';

  return (
   <div className={classApp}>
      {heading}
      <h3>... and Hello {firstName} {lastName}</h3>
      {/* We can use Functions inside JSX */}
      <h3>{lisbonPM.toUpperCase()}</h3>
      <h4>
        {capitalizeFirstLetter(studentName)}
      </h4>
      <img src={chicoMacareu}/>
   </div>
  )
}

export default App
