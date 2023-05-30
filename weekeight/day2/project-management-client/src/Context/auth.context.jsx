import React, {useState, useEffect} from 'react';
import axios from 'axios';

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

  return (
    <AuthContext.Provider value={{storeToken}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default {AuthProviderWrapper, AuthContext};