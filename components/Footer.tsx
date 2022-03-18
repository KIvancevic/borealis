import styles from '../styles/Footer.module.css'

import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.container}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <div className={styles.firstDiv}>
        <ul>
          <h5>About</h5>
          <li className={styles.uppercase}>SPARE WORKSPACE</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Advisors</li>
        </ul>
        <ul>
          <h5>Learn more</h5>
          <li>How it Works</li>
          <li>Help Center</li>
        </ul>
        <ul>
          <h5>Apps</h5>
          <li>Mobile App</li>
          <li>Desktop App</li>
        </ul>
        <ul>
          <h5>Get in touch</h5>
          <li>Get support</li>
          <li>Contact us</li>
        </ul>
      </div>

      <hr className={styles.divider}/>

      <div className={styles.secondDiv}>
        <div>
          <Link href="/">
            <a className={styles.aTag}>Privacy policy</a>
          </Link>
          <Link href="/">
            <a className={styles.aTag}>Terms and conditions</a>
          </Link>
        </div>
        <div className={styles.image} />
        
      </div>
    </footer>
  )
}

export default Footer