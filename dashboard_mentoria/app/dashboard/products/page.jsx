import { fetchProducts } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard_comp/pagination/pagination";
import Search from "@/app/ui/dashboard_comp/search/search";
import DataSource from "@/app/ui/dashboard_comp/products/datasource/datasource";
import styles from "../../ui/dashboard_comp/products/products.module.css"
import Link from "next/link";

const ProductsPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, products} = await fetchProducts(q, page);

  console.log("Products");

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar por um Produto..."/>
        <Link href="/dashboard/products/addproduct">
          <button className={styles.addButton}>Adicionar um Produto</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Descrição</td>
            <td>Preço</td>
            <td>Data de Criação</td>
            <td>Estoque</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <DataSource
                  product={product}
                />
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default ProductsPage;