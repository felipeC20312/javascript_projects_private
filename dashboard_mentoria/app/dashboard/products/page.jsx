import DataSource from "@/app/ui/dashboard_comp/products/datasource/datasource";
import styles from "../../ui/dashboard_comp/products/products.module.css"
import Pagination from "@/app/ui/dashboard_comp/pagination/pagination";
import Search from "@/app/ui/dashboard_comp/search/search";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..."/>
        <Link href="/dashboard/products/addproduct">
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Criated At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            <DataSource stock ={10}/>
            <DataSource/>
            <DataSource stock={25}/>
            <DataSource/>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default ProductsPage;