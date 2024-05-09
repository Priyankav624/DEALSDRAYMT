import React, { useState } from 'react'; 
import { useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/dashboard');
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    Login
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="lab1" htmlFor="uname">Username</label>
                    <input  className="inp1" type="text" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="lab1" htmlFor="pwd">Password</label>
                    <input className="inp1" type="password" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <input className="lsubmit" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;

