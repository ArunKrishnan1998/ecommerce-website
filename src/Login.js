import React, { useState } from 'react'
import './Login.css'
import {Link, useNavigate} from "react-router-dom"
import { auth } from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
            .then((aut) => {
                if (aut) {
                    navigate('/');
                }
            })
            .catch((error) => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((aut) => {
                if (aut) {
                    navigate('/');
                }
            })
            .catch((error) => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to="/">
        <img 
                className='login_logo'
                src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"
                alt="amazon logo"
            />
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail:</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password:</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn} className='login_signin_button'>Sign In</button>
            
            </form>
                <p>By signing-in you agree to AMAZON BY AK's
                    Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads
                    Notice.
                </p>

                <button onClick={register} className='login_register_button'>Create your Amazon Account</button>
            
        </div>
    </div>
  )
}

export default Login