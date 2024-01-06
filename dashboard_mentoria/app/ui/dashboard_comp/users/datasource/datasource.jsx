import Link from 'next/link';
import styles from './datasource.module.css';
import Image from 'next/image';

const DataSource = ({ user }) => {

  const username = user.username || 'username';
  const email = user.email || 'email.default@test.com';
  const createdAt = user.createdAt?.toString().slice(4,16) || '00/00/0000';
  const userImg = user.userImg || "/imgs/noavatar.png" ;
  const isAdmin = user.isAdmin;
  const isActive = user.isActive;

  return (
    <>
      <td>
        <div className={styles.user}>
          <Image src={userImg} alt='' width={40} height={40} className={styles.userImage}/>
          {username}
        </div>
      </td>
      <td>{email}</td>
      <td>{createdAt}</td>
      <td>{isAdmin ? "Admin" : "Client"}</td>
      <td>
        {isActive === true ?
          <span className={`${styles.status} ${styles.active}`}>Active</span> : 
          isActive === false &&
          <span className={`${styles.status} ${styles.inactive}`}>Inactive</span>
        }
      </td>
      <td>
        <div className={styles.buttons}>
          <Link href={`/dashboard/users/${user.id}`}>
            <button className={`${styles.button} ${styles.view}`}>View</button>
          </Link>
          <Link href="/">
            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
          </Link>
        </div>
      </td>
    </>
  )
}

export default DataSource;