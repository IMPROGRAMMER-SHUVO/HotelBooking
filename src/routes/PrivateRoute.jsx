import { useContext } from "react";
import { AuthContext } from "../AnotherProvider/AuthPoviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
   
   
    if(loading){
     return  <div> <span className="loading loading-bars loading-lg"></span></div> 
    }
    
    
    if(user){
        return children;

    }
    return <Navigate to='/SingIn' state={{from:location}} replace></Navigate>
    
    
};

export default PrivateRoute;