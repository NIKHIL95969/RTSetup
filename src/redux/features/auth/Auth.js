import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './authSlice';

function Auth() {
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Replace with actual login logic
        const user = { name: 'User' };
        dispatch(login(user));
    };

    return (
        <button onClick={handleLogin}>Log in</button>
    );
}

export default Auth;