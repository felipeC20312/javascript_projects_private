import Card from "../ui/dashboard_comp/card/card";
import Chart from "../ui/dashboard_comp/chart/chart";
import styles from "../ui/dashboard_comp/dashboard.module.css"
import Rigthbar from "../ui/dashboard_comp/rigthbar/rigthbar";
import Transactions from "../ui/dashboard_comp/transactions/transactions";

const Dashboard = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card status="Positive"/>
          <Card status="Positive"/>
          <Card status="Positive"/>
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rigthbar /> 
      </div>
    </div>
  )
}

export default Dashboard;