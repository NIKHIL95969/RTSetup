import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
  

function LoginForm() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual login logic
        const user = { name: username, password: password };
        dispatch(login(user));
        navigate("/")
    };

    console.log("Login please");

    return (
        <div className='flex justify-center py-40'>
            <form className='flex flex-col gap-8 border p-20 border-s-orange-200 shadow-sm bg-slate-500' onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default LoginForm;