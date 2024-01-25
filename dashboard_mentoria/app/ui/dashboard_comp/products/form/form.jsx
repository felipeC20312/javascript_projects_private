"use client"

import Swal from "sweetalert2";
import styles from "./from.module.css";
import { deleteProcutc } from "@/app/lib/actions";

const Form = ({product, id}) => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Tem certeza?",
      text: "Deseja realmente deletar este produto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4e7e45",
      cancelButtonColor: "#a13838",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      customClass: styles.customSwalContainer,
    });

    if (result.isConfirmed) {
      await deleteProcutc(id);

      Swal.fire({
        title: "Deletado!",
        text: "O produto foi deletado com sucesso!",
        icon: "success",
        confirmButtonColor: "#4e7e45",
        confirmButtonText: "Ok",
        customClass: styles.customSwalContainer,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button className={`${styles.button} ${styles.delete}`}>Deletar</button>
    </form>
  )
}

export default Form;