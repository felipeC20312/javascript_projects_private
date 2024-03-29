import styles from "@/app/ui/dashboard_comp/dashboard.module.css"

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}>
      </div>
    </div>
  )
}

export default Loading;