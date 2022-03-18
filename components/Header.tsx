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