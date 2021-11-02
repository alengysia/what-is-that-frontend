import { useState } from 'react';
import {Link} from 'react-router-dom';
import { signIn } from '../services/firebase';
// import { auth } from "../services/firebase"

function Login(props) {

   

    return (
        <div>
            <h1>Login</h1>
            <button onClick={signIn}>Login with Google</button>
        </div>
    );
}

export default Login;