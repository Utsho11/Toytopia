import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return (
            <div className='text-center'>
                <progress className="progress w-56"></progress>
            </div>
        );
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/signIn' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;