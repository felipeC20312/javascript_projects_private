import Image from "next/image";
import styles from "../../../ui/dashboard_comp/users/viewuserpage/viewUserPage.module.css";

const ViewUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/imgs/noavatar.png"
            alt=""
            fill
          />
        </div>
        Username
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Username" name="username"/>
          
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" name="email"/>
          
          <label htmlFor="">Password</label>
          <input type="password" name="password"/>
          
          <label htmlFor="">Phone</label>
          <input type="phone" placeholder="Phone" name="phone"/>

          <label htmlFor="">Address</label>
          <textarea type="text" name="address" rows="4" placeholder="Address..."/>

          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option defaultValue={false}>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="">Is Active?</label>
          <select name="isActive" id="isActive">
            <option defaultValue={true}>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default ViewUserPage;
