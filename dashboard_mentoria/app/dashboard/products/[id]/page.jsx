import Image from "next/image";
import styles from "../../../ui/dashboard_comp/products/viewProductPage/viewProductPage.module.css";
import { fetchProduct } from "@/app/lib/data";
import { updateProcuct } from "@/app/lib/actions";

const ProductViewPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src={product.productImg || "/imgs/noproduct1.png"}
            alt=""
            fill
          />
        </div>
        {product.productname}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProcuct} className={styles.form}>
          <input type="hidden" name="id" value={product.id}/>

          <label htmlFor="">Nome</label>
          <input type="text" placeholder={product.productname} name="productname" />

          <label htmlFor="">Data da Criação</label>
          <input type="text" placeholder={product.criatedAt} name="criatedAt" />

          <label htmlFor="">Preço</label>
          <input type="text" placeholder={product.price} name="price" />

          <label htmlFor="">Estoque</label>
          <input type="number" placeholder={product.stock} name="stock"/>
          
          <label htmlFor="">Cor do Produto</label>
          <input type="text" placeholder={product.color} name="color" />

          <label htmlFor="">Tamanho</label>
          <input type="number" placeholder={product.size} name="size"/>

          <label htmlFor="">Descrição</label>
          <textarea
            type="text"
            name="description"
            rows="4"
            placeholder={product.description}
          />

          <label htmlFor="">Categoria</label>
          <select name="category" id="category">
            <option value="kitchen">Cozinha</option>
            <option value="phone">Telefones</option>
            <option value="computer">Computadores</option>
            <option value="gaming">Gamer</option>
          </select>

          <button className={`${styles.button} ${styles.delete}`}>Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default ProductViewPage;
