import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header() {

  const goToSection = () => {
    window.scrollTo({
      top:850,
      behavior: "smooth"
    })
  }
  return (
    <div className={styles.info}>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      <div className={styles.picture}>
        <Image src="/MacBookSpareWorkspace.png" alt="Spare workspace logo" width={755}  height={500} />
      </div>
      <div className={styles.freeTrial}>
        <h3>Manage your Workspace. Start earning.</h3>
        <p>Get a cutting edge self-serve platfrom, 24/7 open for customer acquisition and managment.</p>
      <div className={styles.buttonContainer}>
        <button>Start your free trial now</button>

        <button onClick={goToSection}>
          Learn More
        </button>

      </div>
    </div>
  </div>
  )
}

export default Header