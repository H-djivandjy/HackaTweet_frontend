import styles from '../styles/Home.module.css';


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imageGauche}>
        {/* <img src="Twitter.jpg" /> */}
      </div>
      <main className={styles.main}>
        
        <img src="logo twitter.png" />
          <h1 className={styles.h1}>See what's happening</h1>
          <h3>Join Hackatweet today.</h3>
          <button clas>Sign up</button>
          <p>Already have an account?</p>
          <button>Sign in</button>
        
      </main>
    </div>
  );
}

export default Home;
