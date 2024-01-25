import styles from "@/app/loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}/>
    </div>
  )
}

export default Loading;