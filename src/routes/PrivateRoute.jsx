import React, { Children, useContext } from 'react';
import { AuthContext } from '../context/context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if (loading){
        return <center className=' mt-60'><span className="loading loading-ball loading-lg"></span></center>
    }

    if(user){
        return children
    }
    else{
        return <Navigate state={location.pathname} to={"/Login"}></Navigate>
    }

 
};

export default PrivateRoute;