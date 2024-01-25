import Image from 'next/image';
import styles from './datasource.module.css';
import { MdError, MdPlayCircleFilled, MdReadMore } from 'react-icons/md';

const DataSource = ({
  iconSelector = 0,
  imgSrcContent = '/img/',
  titleContent = 'default',
  subtitleContent = 'default',
  descriptionContent = 'default',
  notificationContent = 'default'
}) => {

  const ico = iconSelector;
  const img = imgSrcContent;
  const title = titleContent;
  const subtitle = subtitleContent;
  const description = descriptionContent;
  const notification = notificationContent;

  let buttonText, buttonIcon;

  if (ico === 0){
    buttonText = "Assita Agora";
    buttonIcon = <MdPlayCircleFilled/>
  } else if (ico === 1){
    buttonText = "Leia Mais";
    buttonIcon = <MdReadMore/>
  } else {
    buttonText = "Default";
    buttonIcon = <MdError/>
  }

  return (
    <div className={styles.item}>
      <div className={styles.bgContainer}>
        {img !== '/img/' && <Image src={img} alt='' fill className={styles.bg}/>}
      </div>
      <div className={styles.texts}>
        <span className={styles.notification}>{notification}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.subtitle}>{subtitle}</span>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          {buttonIcon}
          <span>{buttonText}</span>
        </button>
      </div>
    </div>
  )
}

export default DataSource;