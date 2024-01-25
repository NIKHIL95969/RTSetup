import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';

function RedirectToLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/login');
    }, [navigate]);

    return null;
}

function ProtectedRoute({ children, ...rest }) {
    const loggedIn = useSelector((state) => state.auth.loggedIn);

    return (
        <Outlet />
        // <Outlet {...rest} element={loggedIn ? children : <RedirectToLogin />} />
    );
}

export default ProtectedRoute;

