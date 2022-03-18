import styles from '../styles/Nav.module.css'
import { useState } from 'react'

function Nav() {
  const [isClicked, setIsClicked] = useState(false)

  function handlClick() {
    return setIsClicked(!isClicked)
  }


  return (
    <div className={styles.navbar}>
      
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
