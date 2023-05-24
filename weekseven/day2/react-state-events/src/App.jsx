import './App.css';
import Counter from './Components/Counter';
//Import useState React Hook
import {useState} from 'react';

function App() {
  // Write State
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <Counter/>
      <select onChange={event => setTheme(event.target.value)}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  )
}

export default App
