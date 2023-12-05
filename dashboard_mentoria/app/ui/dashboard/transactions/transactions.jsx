import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Ultima Transação</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Status</td>
                        <td>Data</td>
                        <td>Quantidade</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="" alt="" width={40} height={40} className={styles.userImage}/>
                                Teste User 01
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pendente</span>
                        </td>
                        <td>10.20.2023</td>
                        <td>$10.200</td>
                    </tr>
                    {/* === */}
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="" alt="" width={40} height={40} className={styles.userImage}/>
                                Teste User 02
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Concluido</span>
                        </td>
                        <td>10.20.2023</td>
                        <td>$10.200</td>
                    </tr>
                    {/* === */}
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="" alt="" width={40} height={40} className={styles.userImage}/>
                                Teste User 03
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelado</span>
                        </td>
                        <td>10.20.2023</td>
                        <td>$10.200</td>
                    </tr>
                    {/* === */}
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="" alt="" width={40} height={40} className={styles.userImage}/>
                                Teste User 04
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pendente</span>
                        </td>
                        <td>10.20.2023</td>
                        <td>$10.200</td>
                    </tr>
                    {/* === */}
                </tbody>
            </table>
        </div>
    )
}

export default Transactions;
