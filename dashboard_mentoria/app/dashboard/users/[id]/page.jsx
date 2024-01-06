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
            alt=""
            fill
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}/>

          <label htmlFor="">Username</label>
          <input type="text" placeholder={user.username} name="username"/>
          
          <label htmlFor="">Email</label>
          <input type="email" placeholder={user.email} name="email"/>
          
          <label htmlFor="">Password</label>
          <input type="password" name="password"/>
          
          <label htmlFor="">Phone</label>
          <input type="phone" placeholder={user.phone} name="phone"/>

          <label htmlFor="">Address</label>
          <textarea type="text" name="address" rows="4" placeholder={user.address}/>

          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>

          <label htmlFor="">Is Active?</label>
          <select name="isActive" id="isActive">
          <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>

          <button className={`${styles.button} ${styles.delete}`}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ViewUserPage;
