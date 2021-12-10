import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInWithGithub} = useAuth();
    return (
        <div className="py-5">
            <h2 className="py-3 mb-5 bg-success">Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Login with Google</button>
           <br /> <br/> <button className="btn btn-warning" onClick={signInWithGithub}>Github Sign In</button>


           <br /> <br/><br /> <br/>
            <Link className="btn btn-success" to="/register">Already Registered ?</Link>
        </div>
    );
};

export default Login;