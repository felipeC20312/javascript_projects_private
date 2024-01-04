import styles from "../../../ui/dashboard_comp/users/adduser/adduser.module.css"

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="Username" name="title" required />
        <input type="email" placeholder="Email" name="title"/>
        <input type="password" placeholder="Password" name="title"/>
        <input type="phone" placeholder="Phone" name="title"/>
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address..."
        ></textarea>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage;