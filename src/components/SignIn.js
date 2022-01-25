import './SignIn.css';
import React from 'react';
import styled from 'styled-components';

const SignIn = () => {
    return (
        <div className="SignIn">
            <div className="ETM"></div>
            <h1 className="Title">Good to see you here</h1>
            <input placeholder={'login'}/>
            <input placeholder={'password'}/>
            <button className="Btn cnl">Cancel</button>
            <button className="Btn SI">Sign In</button>
            <p className="Nry">Not registered yet?</p>
            <p className="SU">Sign up</p>
        </div>
    );
}

export default SignIn;
