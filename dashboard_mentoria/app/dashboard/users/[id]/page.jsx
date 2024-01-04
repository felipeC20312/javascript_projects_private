import Image from "next/image";
import styles from "../../../ui/dashboard_comp/users/viewuserpage/viewUserPage.module.css";

const ViewUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <Image
          src="/imgs/noavatar.png"
          alt=""
          width={300}
          height={300}
          className={styles.userImage}
        />
        Username
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Username" name="username"/>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" name=""/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" name=""/>
          <label htmlFor="">Phone</label>
          <input type="phone" placeholder="Phone" name=""/>
          
          <label htmlFor="">Address</label>
          <textarea name="" id="" rows="4" placeholder="Address..."></textarea>

          <label htmlFor="">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={false} selected>Is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label htmlFor="">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected>Is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default ViewUserPage;
