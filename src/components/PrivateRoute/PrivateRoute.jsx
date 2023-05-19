import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(AuthContext);
    
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
    return <Navigate to='/signIn'></Navigate>;
};

export default PrivateRoute;