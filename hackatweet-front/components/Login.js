import styles from '../styles/Login.module.css';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Signup from './Signup';



function Login() {
 

  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPseudo, setSignUpPseudo] = useState('');
  

  return (
    <div className={styles.container}>
      <div className={styles.imageGauche}>
        {/* <img src="Twitter.jpg" /> */}
      </div>
      <main className={styles.main}>
        <div className={styles.centre}>
          <div className={styles.logocontainer}>
            <img src="logo twitter.png" className={styles.logotwitter} alt='Twitter logo'/>
          </div>
          <div className={styles.text}></div>
          <h1 className={styles.h1}>See what's happening</h1>
          <h4>Join Hackatweet today.</h4>
             
          {/* <button className={styles.btnsignup}>Sign up</button> */}
          <div> 
            <Signup/>
          </div>
          <p className={styles.p}>Already have an account?</p>
          <button className={styles.btnsignin}>Sign in</button>
          </div>
      </main>
    </div>
  );
}

export default Login;
