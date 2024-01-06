import Image from "next/image";
import styles from "../../app/ui/login_comp/login.module.css";

const LoginPage = () => {
  return (
    
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <h1>Login</h1>
          <h3>Wellcome!</h3>
          <input type="text" placeholder="Username..." name=""/>
          <input type="password" placeholder="Password..." name=""/>
          <button>Login</button>
        </form>
        <Image src="/imgs/loginformbg.jpg" alt="" className="" width={500} height={500}/>
      </div>
    </div>
  );
};

export default LoginPage;