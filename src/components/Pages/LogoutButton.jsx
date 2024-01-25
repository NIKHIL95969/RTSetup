import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        console.log("Logout");
        navigate('/');
    };

    return (
        <div className='p-40 flex justify-center'>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
}

export default LogoutButton;