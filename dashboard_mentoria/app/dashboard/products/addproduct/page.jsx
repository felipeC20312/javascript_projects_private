"use client"

import { addProduct } from "@/app/lib/actions";
import styles from "../../../ui/dashboard_comp/products/addproduct/addproduct.module.css";
import Swal from "sweetalert2";

const AddProductPage = () => {

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const result = await Swal.fire({
      title: "Tem certeza?",
      text: "Deseja realmente adicionar este produto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4e7e45",
      cancelButtonColor: "#a13838",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      customClass: styles.customSwalContainer,
    })

    if (result.isConfirmed) {
      try {
        addProduct(formData);
        Swal.fire ({
          title: "Sucesso!",
          text: "Seu produto foi adicionado.",
          icon: "success",
          confirmButtonColor: "#4e7e45",
          confirmButtonText: "Ok",
          customClass: styles.customSwalContainer,
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Erro!",
          text: "Falha ao adicionar produto.",
          icon: "error",
          confirmButtonColor: "#4e7e45",
          confirmButtonText: "Ok",
          customClass: styles.customSwalContainer,
        });
      }
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddProduct} className={styles.form}>
        <input type="text" placeholder="Nome" name="productname" required />
        <select name="category" id="category">
          <option value="general">Escolha a Categoria...</option>
          <option value="kitchen">Cozinha</option>
          <option value="phone">Telefones</option>
          <option value="computer">Computadores</option>
          <option value="gaming">Gamer</option>
        </select>
        <input type="number" placeholder="Preço" name="price" />
        <input type="number" placeholder="Estoque" name="stock" />
        <input type="text" placeholder="Cor" name="color" />
        <input type="text" placeholder="Tamanho" name="size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="Descrição..."
        ></textarea>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddProductPage;
