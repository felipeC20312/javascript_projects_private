import styles from './pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.container}>
        <button className={`${styles.button} ${styles.previus}`} disabled>Previus</button>
        <button className={`${styles.button} ${styles.next}`}>Next</button>
    </div>
  )
}

export default Pagination;