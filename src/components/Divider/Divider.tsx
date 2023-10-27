import styles from "./Divider.module.css";


const Divider: React.FC= () => {
  // return <div className={styles.divider}>&nbsp;</div>

  return <div className={styles['container']}>
    <img src="assets/branch.svg" alt="branch" className={styles['branch']} />

  </div>
}

export default Divider