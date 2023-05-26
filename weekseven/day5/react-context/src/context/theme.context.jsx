import {createContext, useState} from 'react';

// Create Context and pass it into a variable
const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    if (theme === 'light'){
        setTheme('dark');
    } else {
        setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProviderWrapper}