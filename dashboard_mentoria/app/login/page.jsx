import Image from "next/image";
import styles from "../../app/ui/login_comp/login.module.css";
import { authenticate } from "../lib/actions";
import LoginForm from "../ui/login_comp/loginFrom/loginForm";

const LoginPage = () => {
  return (
    
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LoginForm/>
        <Image src="/imgs/loginformbg.jpg" alt="" className="" width={500} height={500}/>
      </div>
    </div>
  );
};

export default LoginPage;