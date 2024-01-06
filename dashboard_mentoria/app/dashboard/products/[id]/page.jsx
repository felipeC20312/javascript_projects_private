import Image from "next/image";
import styles from "../../../ui/dashboard_comp/products/viewProductPage/viewProductPage.module.css";

const ProductViewPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/imgs/noproduct1.png" alt="" fill />
        </div>
        Product Code: #0000
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Name" name="name" />
          
          <label htmlFor="">Price</label>
          <input type="text" placeholder="Price" name="price" />
          
          <label htmlFor="">Criated At</label>
          <input type="number" placeholder="Criated At" name="date" />
          
          <label htmlFor="">Color</label>
          <input type="text" placeholder="Color" />
          
          <label htmlFor="">Stock</label>
          <input type="number" placeholder="Stock" />

          <label htmlFor="">Description</label>
          <textarea
            type="text"
            name="description"
            rows="4"
            placeholder="Description..."
          />

          <label htmlFor="">Category</label>
          <select name="category" id="catagory">
            <option value="general">Chose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="gaming">Gaming</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default ProductViewPage;
