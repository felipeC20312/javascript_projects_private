"use client"
import { authenticate } from '@/app/lib/actions';
import styles from "./loginFrom.module.css"
import { useState } from 'react';

const LoginForm = () => {

  const [error, setError] = useState()

  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setError(data.error);
  }

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <h3>Wellcome!</h3>
      <input type="text" placeholder="Username..." name="username"/>
      <input type="password" placeholder="Password..." name="password"/>
      <button>Login</button>
      {error && error}
    </form>
  )
}

export default LoginForm;