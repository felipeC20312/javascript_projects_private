"use client";
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { MdLock, MdPerson} from "react-icons/md";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const LoginForm = () => {

  const [state, formAction] = useFormState(authenticate, undefined);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form action={formAction} className={styles.form}>
      <Image src="/imgs/horizontal_logo_ligth.png" width={200} height={140} />
      <span className={styles.text}>Sign In</span>
      <div className={`${styles.inputContainer} ${state ? styles.inputWithError : ''}`}>
        <MdPerson />
        <input
          type="text"
          placeholder="Usuário"
          name="username"
        />
      </div>
      <div className={`${styles.inputContainer} ${state ? styles.inputWithError : ''}`}>
        <MdLock />
        <input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Senha"
          name="password"
        />
        <div onClick={togglePasswordVisibility}>
          {passwordVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
        </div>
      </div>
      <span className={styles.error}>{state && state}</span>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
