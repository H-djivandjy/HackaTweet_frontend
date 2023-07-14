import styles from '../styles/Signup.module.css';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "antd/dist/antd.css";
import { useDispatch } from 'react-redux';
import { login, logout } from '../reducers/user';



function Signup() {
  
  const dispatch = useDispatch();

  const [signUpUsername, setSignUpUsername] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPseudo, setSignUpPseudo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
    console.log("show modal",isModalOpen)
  };

  // const handleSingup = () => {
  //   setIsModalOpen("handleSignup",false);
  //   console.log("handleSign up", isModalOpen);
  // };
  
  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => { console.log(data)
				// if (data.result) {
				// 	dispatch(login({ username: signUpUsername, token: data.token }));
				// 	setSignUpUsername('');
				// 	setSignUpPassword('');
				// 	// setIsModalOpen(false)
				// }
			});
	};
  
  return (

    <div>
       <>
        <button 
        className={styles.btnsignup} 
        onClick={showModal}>Sign up</button>
          <Modal className={styles.modal} open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}  >
            <img src="logo twitter.png" className={styles.logotwittter} alt='Twitter logo'/> 
            <h3 className={styles.titre3}>Create your Hackatweet account</h3>
            <div className='inputs'>
              <input type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
              <input type="text" placeholder="Pseudo" id="signUpPseudo" onChange={(e) => setSignUpPseudo(e.target.value)} value={signUpPseudo} />
              <input type="text" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}/>
              <Button className={styles.btnsignup} type="primary" onClick={handleRegister} onCancel={() => setIsModalOpen(false)}>Sign up</Button>
            </div>
          </Modal>
      </>
    </div>

  );
  
  
}

export default Signup;