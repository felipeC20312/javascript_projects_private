import Image from 'next/image';
import styles from './transactions.module.css';
import DataSource from './datasource/datasource';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimas Transações</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Responsável</td>
            <td>Status</td>
            <td>Data de Realização</td>
            <td>Total da venda</td>
          </tr>
        </thead>
        <tbody>
          <DataSource status = "Pendente"/>
          <DataSource status = "Cancelado"/>
          <DataSource status = "Concluido"/>
          <DataSource status = "Concluido"/>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions;