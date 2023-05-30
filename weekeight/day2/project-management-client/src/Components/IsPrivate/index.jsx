import {useContext} from 'react'; 
import { AuthContext } from '../../Context/auth.context';
import {Navigate} from 'react-router-dom';

function IsPrivate({children}) {
    const {isLoggedIn, isLoading} = useContext(AuthContext);

    // if authentication is loading 
    if (isLoading) return <p>Loading ... </p>; 
    
    if (!isLoggedIn){
        return <Navigate to="/login" />
    } 
    else {
        // if the user is logged in, allow to see the page. 
        return children; 
    }
}

export default IsPrivate;