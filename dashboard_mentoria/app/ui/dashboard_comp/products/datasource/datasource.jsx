import Link from 'next/link';
import styles from './datasource.module.css';
import Image from 'next/image';

const DataSource = ({stock = 0}) => {

  const statusContent = stock;
  let _status = styles.noAvaliable;

  if (stock > 0) {
    _status = styles.avaliable;
  }

  return (
    <>
      <tr>
        <td>
          <div className={styles.user}>
            <Image src="/imgs/noproduct1.png" alt='' width={40} height={40} className={styles.userImage}/>
            Product Name
          </div>
        </td>
        <td className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita iure aspernatur at quaerat facere voluptatem, amet id ad, quibusdam quam delectus!</td>
        <td>$100,00</td>
        <td>01.01.2024</td>
        <td>
          <div className={`${styles.status} ${_status}`}>
            {statusContent}
          </div>
        </td>
        <td>
          <div className={styles.buttons}>
            <Link href="/">
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