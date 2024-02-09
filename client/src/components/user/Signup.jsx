import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignupUser } from '../../api/User';

export const Signup = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const SignupHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await SignupUser(user);
            const userData = response.data;

            localStorage.setItem('user', JSON.stringify(userData));

            navigate('/'); // Redirect to home page after successful signup
        } catch (error) {
            console.log(error);
        }
    };

    const navigateLogin = () => {
        navigate('/login');
    };

    return (
        <>
            <div className='signup'>
                <div className='login-form'>
                    <h2>Signup</h2>
                    <form>
                        <div>
                            <label>Username</label>
                            <input type='text' name='username' value={user.username} required onChange={handleChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='email' name='email' value={user.email} required onChange={handleChange} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' name='password' value={user.password} required onChange={handleChange} />
                        </div>
                        <div>
                            <button onClick={SignupHandler}>Signup</button>
                        </div>
                        <p>Already have an account?<span onClick={navigateLogin}>Login</span></p>
                    </form>
                </div>
            </div>
        </>
    );
};
