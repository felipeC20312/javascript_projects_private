import Image from "next/image";
import styles from "../../../ui/dashboard_comp/users/viewuserpage/viewUserPage.module.css";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

const ViewUserPage = async ({params}) => {
  const {id} = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src= {user.userImg || "/imgs/noavatar.png"}
            width={350}
            height={350}
            className={styles.userImg}
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>

          <label htmlFor="">Nome do Usário</label>
          <input type="text" placeholder={user.username} name="username"/>
          
          <label htmlFor="">E-mail</label>
          <input type="email" placeholder={user.email} name="email"/>
          
          <label htmlFor="">Senha</label>
          <input type="password" name="password"/>
          
          <label htmlFor="">Telefone</label>
          <input type="phone" placeholder={user.phone} name="phone"/>

          <label htmlFor="">Endereço</label>
          <textarea type="text" name="address" rows="4" placeholder={user.address}/>

          <label htmlFor="">É Administrador?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Sim</option>
            <option value={false} selected={!user.isAdmin}>Não</option>
          </select>

          <label htmlFor="">Está Ativo?</label>
          <select name="isActive" id="isActive">
          <option value={true} selected={user.isActive}>Sim</option>
            <option value={false} selected={!user.isActive}>Não</option>
          </select>

          <button className={`${styles.button} ${styles.delete}`}>Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default ViewUserPage;
