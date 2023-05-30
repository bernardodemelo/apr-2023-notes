import React, {useState, useEffect} from 'react';
import axios from 'axios';
import authService from '../Services/auth.service';

// Creates React Context with shareable State data
const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
    // Write State
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Store Token function 
    const storeToken = (token) =>{
        localStorage.setItem('authToken', token);
    }

    // Authentication Function 
    const authenticateUser = ()=>{
      // Get the Stored Token from Local Storage
      const storedToken = localStorage.getItem('authToken');
      if(storedToken){
      authService.verify()
      .then((response)=>{
          //Update state variables
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(response.data.user);
      })
      .catch(()=>{
        // catch possibility whenever it finds an invalid token
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
      })
    } else {
      // If the token was not found on localStorage
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
    }

    // Remove Token Function 
    const removeToken = () =>{
      //Upon Logout, Remove Token from the localStorage
      localStorage.removeItem('authToken');
    };

    const logOutUser = () => {
      // removing the JWT token from the localStorage
      removeToken(); 
      // to update state variables
      authenticateUser();
    }

    useEffect(()=>{
      authenticateUser()
    }, []) 

  return (
    <AuthContext.Provider value={{isLoggedIn, isLoading, user, 
      storeToken, authenticateUser, logOutUser}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export {AuthProviderWrapper, AuthContext};