import Image from 'next/image';
import styles from './datasource.module.css';

const DataSource = ({status = 'default'}) => {

  const name = status;
  const statusName = styles[status.toLowerCase()] || 'default';

  return (
    <>
      <tr>
        <td>
          <div className={styles.user}>
            <Image src="/imgs/noavatar.png" alt="" width={40} height={40} className={styles.userImage}/>
            Felipe Caetano
          </div>
        </td>
        <td>
          <span className={`${styles.status} ${statusName}`}>{name}</span>
        </td>
        <td>01.01.2000</td>
        <td>$10.000</td>
      </tr>
    </>
  )
}

export default DataSource;