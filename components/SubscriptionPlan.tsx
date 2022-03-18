import { motion } from 'framer-motion'
import styles from '../styles/Subscription.module.css'

function PricePlan() {
  return (
    <motion.div
    exit={{ opacity: 0 }}
    initial="initial"
    animate="animate"
    >
      <div id="subscriptionContainer">
        <div className={styles.title}>
          <h1>Subscription Plans</h1>
          <p>Obviously, you want to know how much it will cost you, right? Well, we got you covered there. Just <span>2</span><span>simple plans so you don't need to scratch your head too much.</span> </p>
        </div>
        <div className={styles.price}>
          <div>
            <h4>Looser plan</h4>
            <div className={styles.priceContainer}>
              <small>$</small>
              <strong>59</strong>
              <p>/mo</p>
            </div>
            <p>You shouldn’t go for this plan unless you consider yourself a looser. How about skipping this and booking that shiny plan on your right?!?</p>
            <div className={styles.list}>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <ul>
                <li>Feature 4</li>
                <li>Feature 5</li>
                <li>Feature 6</li>
              </ul>
            </div>
            <button>Get started</button>
          </div>
          <div>
            <h4>Winner (your) plan</h4>
            <div className={styles.priceContainer2}>
              <small>$</small>
              <strong>119</strong>
              <p>/mo</p>
            </div>
            <p>Welcome, this plan is made for you. Trust us. We know exactly what you need and what you want. So no money back.</p>
            <div className={styles.list2}>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <ul>
                <li>Feature 4</li>
                <li>Feature 5</li>
                <li>Feature 6</li>
              </ul>
            </div>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PricePlan
