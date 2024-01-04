import Image from 'next/image';
import styles from './transactions.module.css';
import DataSource from './datasource/datasource';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <DataSource status = "Pending"/>
          <DataSource status = "Canceled"/>
          <DataSource status = "Done"/>
          <DataSource status = "Done"/>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions;