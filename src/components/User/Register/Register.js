import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {handleRegistration,updateName,signIngoogle} = useAuth();
    const [regname,setRegname] = useState(' ')
    const [regemail,setEmail] = useState(' ')
    const [regpass,setPass] = useState(' ')
    const [error,setError] = useState(' ');

    const handleName = e=>{
        setRegname(e.target.value);
    }
    const handleEmail = e=>{
        setEmail(e.target.value);
    }
    const handlePass = e=>{
        setPass(e.target.value);
    }
    // Email password 
    const submitRegistration = (e) => {
        e.preventDefault()
        if(regpass.length <6){
            setError('Must be Need 6 Characters long.')
            return;
        }
        handleRegistration(regemail,regpass)
        .then((userCredential) => {
            // Signed in 
            updateName(regname);
            setError('')
        }).catch(err => {
            setError(err.message)
        })
        
    }
    return (
        <div>
            <div className="container">
                <div className="register_area">
                    <div className="register_form">
                        <form onSubmit={submitRegistration}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input onBlur={handleName} required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleEmail} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input  onBlur={handlePass}type="password" required className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="text-center">
                                <div className="err">
                                    {
                                        error
                                    }
                                </div>
                                <button type="submit" className="btn_custom">Register</button>
                            </div>
                        </form>
                        <div className="login_others">
                            <button onClick={signIngoogle}>Register With Google</button>
                            <p className="mt-3">I have Already <NavLink to="/login">Account</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;