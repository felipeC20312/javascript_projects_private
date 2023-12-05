import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => {
    return (
        <div className={styles.container}>
            <MdSupervisedUserCircle size={25}/>
            <div className={styles.texts}>
                <span className={styles.title}>Total Users</span>
                <span className={styles.number}>10.234</span>
                <span className={styles.detail}>
                    <span className={styles.positive}>10%</span> a mais do que semana passada!
                </span>
            </div>
        </div>
    )
}

export default Card;