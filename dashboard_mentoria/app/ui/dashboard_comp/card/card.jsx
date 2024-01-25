import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = ({status = 'default'}) => {

  const statusName = styles[status.toLowerCase()] || "default";

  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={25} />
      <div className={styles.texts}>
        <span className={styles.title}>Total de Usuários</span>
        <span className={styles.number}>10.2030</span>
        <span className={styles.detail}> <span className={statusName}>10%</span> a mais do que semana passada!
        </span>
      </div>
    </div>
  )
}

export default Card;