import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { handleRegistraton, handleEmailChange, handlePasswordChange } = useAuth();
   
    return (
        <div className='container'>
            <h1>Please Register</h1>
            <form onSubmit={handleRegistraton}>
                <h4>E-mail:  <input onBlur={handleEmailChange} className="m-2" type="email" required /></h4> <br />

                <h4>Password: <input onBlur={handlePasswordChange} className="m-2" type="password" required /></h4> <br />

                <button  className="btn btn-success m-2" type="submit" value="Submit"> Submit </button>
                
            </form>
            <Link className="btn btn-warning m-2" to="/login">Already Registered ?</Link>
        </div>
        
    );
};

export default Register;