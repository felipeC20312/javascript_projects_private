"use client"

import { addUser } from "@/app/lib/actions";
import styles from "../../../ui/dashboard_comp/users/adduser/adduser.module.css";
import Swal from "sweetalert2";

const AddUserPage = () => {

  const handleAddUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const result = await Swal.fire({
      title: "Tem certeza?",
      text: "Deseja realmente adicionar este usuário?",
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
        addUser(formData);
        Swal.fire ({
          title: "Sucesso!",
          text: "Seu usuário foi adicionado.",
          icon: "success",
          confirmButtonColor: "#4e7e45",
          confirmButtonText: "Ok",
          customClass: styles.customSwalContainer,
        })
      } catch (error) {
        console.log(error);
        Swal.fire({
          title: "Erro!",
          text: "Falha ao adicionar usuário.",
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
      <form onSubmit={handleAddUser} className={styles.form}>
        <input type="text" placeholder="Nome do Usuário" name="username" required />
        <input type="email" placeholder="E-mail" name="email" />
        <input type="password" placeholder="Senha" name="password" />
        <input type="phone" placeholder="Telefone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>É Administrador?</option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Está Ativo?</option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Endereço..."
        ></textarea>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default AddUserPage;
