import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const LoginFormik = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const dummyUser = { username: 'admin', password: 'password123' };
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === username && user.password === password) {
            localStorage.setItem('isLoggedIn', true);
            window.location.replace(location.state?.from || '/createproductformik');
        } else if (username === dummyUser.username && password === dummyUser.password) {
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('isLoggedIn', true);
            window.location.replace(location.state?.from || '/createproductformik');
        } else {
            setErrorMessage('Invalid username or password');
        }
    };

    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        return <Navigate to="/createproductformik" replace />;
    }

    return (
        <div className="container pt-5 pb-5">
            <div className="row justify-content-center">
                <h2 className='text-center'>Login Form</h2>
                <div className="col-lg-6">
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mb-3 submit">Login</button>
                        {errorMessage && <div>{errorMessage}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginFormik