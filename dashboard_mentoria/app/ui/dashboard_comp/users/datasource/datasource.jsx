import Link from 'next/link';
import styles from './datasource.module.css';
import Image from 'next/image';

const DataSource = ({status = 'default'}) => {

  const statusName = status.charAt(0).toUpperCase() + status.slice(1);
  const _status = styles[status.toLowerCase()] || 'default';

  return (
    <>
      <tr>
        <td>
          <div className={styles.user}>
            <Image src="/imgs/noavatar.png" alt='' width={40} height={40} className={styles.userImage}/>
            Felipe Caetano
          </div>
        </td>
        <td>felipecaetanodev@gmail.com</td>
        <td>01.01.2024</td>
        <td>Desenvolvedor</td>
        <td>
          <span className={`${styles.status} ${_status}`}>{statusName}</span>
        </td>
        <td>
          <div className={styles.buttons}>
            <Link href="/dashboard/users/anyid">
              <button className={`${styles.button} ${styles.view}`}>View</button>
            </Link>
            <Link href="/">
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  )
}

export default DataSource;