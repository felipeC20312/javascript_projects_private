import styles from "../ui/dashboard/dashboard.module.css"

import Transactions from "../ui/dashboard/transactions/transactions"
import Rigthbar from "../ui/dashboard/rigthbar/rigthbar"
import Chart from "../ui/dashboard/chart/chart"
import Card from "../ui/dashboard/card/card"

const DashboardPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div className={styles.side}>
                <Rigthbar/>
            </div>
        </div>
    )
}

export default DashboardPage;
