import styles from '../styles/Nav.module.css'
import { useState } from 'react'

function Nav() {
  const [isClicked, setIsClicked] = useState(false)

  function handlClick() {
    return setIsClicked(!isClicked)
  }


  return (
    <div className={styles.navbar}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <button>Sign In</button>
      <button onClick={handlClick}>Sign Up</button>
        <div 
          className={styles.modalOpen}
          style={{
            top: isClicked ? '0' : '-100%',
          }}
        >
          <div className={styles.modalContainer}>
            <h5>Enter your name</h5>
            <input type="text" placeholder='Enter your name'/>
            <h5>Enter your e-mail</h5>
            <input type="text" placeholder='Enter your e-mail'/>
            <h5>Message</h5>
            <textarea placeholder='Enter your message'/>
            <button 
              type="submit" 
              onClick={handlClick}
              style={{
                margin: 'auto'
              }}
            >Send</button>
          </div>
        </div>
      
    </div>
    
  )
}

export default Nav
