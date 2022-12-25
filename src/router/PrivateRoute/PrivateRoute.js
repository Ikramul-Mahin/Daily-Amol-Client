import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../component/Loading/Loading';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        <Loading></Loading>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;