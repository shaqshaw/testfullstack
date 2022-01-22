import React from 'react';
import { useStyles } from './useStyles.js';


export const LoginSignUp = () => {

    const classes = useStyles();
    return(
        <div class="wrapper">
            <div class="container">
            
                <div class="signup">Sign Up</div>
                <div class="login">Log In</div>
                
                <div class="signup-form">
                    <input type="text" placeholder="Your Email Address" class="input"><br /></input>
                    <input type="text" placeholder="Choose a Username" class="input"><br /></input>
                    <input type="password" placeholder="Choose a Password" class="input"><br /></input>
                    <div class="btn">Create account</div>
                </div>
                
                <div class="login-form">
                    <input type="text" placeholder="Email or Username" class="input"><br /></input>
                    <input type="password" placeholder="Password" class="input"><br /></input>
                    <div class="btn">log in</div>
                    <span><a href="#">I forgot my username or password.</a></span>
                </div>
            
            </div>
        </div>
    )
}

export default LoginSignUp;




