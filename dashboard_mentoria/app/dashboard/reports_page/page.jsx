import styles from "../../ui/dashboard_comp/transactions_page/transactions.module.css"

const Transactions = () => {

  return (
    <div className={styles.container}>
      <div className={styles.animation}>
        <img src="/imgs/astronaut.png" alt="GIF Animation" />
      </div>
      <div className={styles.text}>
        <h1>Em Desenvolvimento</h1>
        <p>Olá, Peço desculpas pelo transtorno, a pagina que você tentou acessar ainda está em desenvolvimento. Mas logo estará pronta para o seu acesso e aproveitamento. Desde já agradeço para compreensão</p>
      </div>
    </div>
  )
}

export default Transactions;