import Image from "next/image";
import styles from "../../app/ui/login_comp/login.module.css";
import LoginForm from "../ui/login_comp/loginFrom/loginForm";

const LoginPage = () => {
  return (
    
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LoginForm/>
        <div className={styles.bgImg}>
          <Image src="/imgs/loginformbg.jpg" alt="" fill/>  
        </div>
      </div>
    </div>
  );
};

export default LoginPage;