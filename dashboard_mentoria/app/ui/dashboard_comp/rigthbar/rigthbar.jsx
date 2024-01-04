import styles from './rigthbar.module.css';
import DataSource from './datasource/datasource';

const Rigthbar = () => {
  return (
    <div className={styles.container}>
      <DataSource
        iconSelector={0}
        notificationContent='Disponivel agora!'
        titleContent='Como usar a nova versão do dashboard Admin?'
        subtitleContent='Leva 4 minutos para aprender'
        descriptionContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse culpa iste odio, voluptate amet quae maxime deleniti, sit temporibus, nostrum laudantium '
        imgSrcContent='/imgs/astronaut1.png'
      />
      <DataSource
        iconSelector={1}
        notificationContent='Disponivel agora!'
        titleContent='Como usar a nova versão do dashboard Admin?'
        subtitleContent='Leva 4 minutos para aprender'
        descriptionContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus esse culpa iste odio, voluptate amet quae maxime deleniti, sit temporibus, nostrum laudantium '
      />
    </div>
  )
}

export default Rigthbar;