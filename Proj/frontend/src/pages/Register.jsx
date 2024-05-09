import React, { useState } from 'react';
import "./Register.css"; 
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        navigate('/dashboard');
    }

    return (
        <div className="reg-container">
            <div className="reg-box">
                <div className="reg-header">
                    Register
                </div>
                <form onSubmit={handleSubmit}>
                    <label className='rlab' htmlFor="uname">Username</label>
                    <input className='rinp' type="text" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className='rlab' htmlFor="pwd">Password</label>
                    <input className='rinp' type="password" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br>
                    <input className="rsubmit" type="submit" value="Register" />
                </form>
                <div style={{fontSize:"15px" }}>
                    Already have an account?  <Link to='/login' style={{textDecoration:"none", color:"white", marginLeft:"5px" }}> Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;



