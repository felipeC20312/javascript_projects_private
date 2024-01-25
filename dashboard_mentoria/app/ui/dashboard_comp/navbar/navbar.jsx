"use client";

import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import Link from "next/link";

import {
  MdArrowBack,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  function Verification() {

    let isAddPage = false;

    if (pathname.includes("adduser") || pathname.includes("addproduct")) {
      isAddPage = true;
    }

    if (pathname.includes("users/") && !isAddPage) {
      const userPathname = " Id do Usuário: " + pathname.split("/").pop();
      return (
        <div className={styles.backButton}>
          <div>
            <Link href="/dashboard/users">
              <MdArrowBack size={30} color="white" />
            </Link>
          </div>
          <span>{userPathname}</span>
        </div>
      );
    } else if (pathname.includes("products/") && !isAddPage) {
      const userPathname = " Id do Produto : " + pathname.split("/").pop();
      return (
        <div className={styles.backButton}>
          <div>
            <Link href="/dashboard/products">
              <MdArrowBack size={30} color="white" />
            </Link>
          </div>
          <span>{userPathname}</span>
        </div>
      );
    } else if (pathname.includes("users/") && isAddPage) {
      return (
        <div className={styles.backButton}>
          <div>
            <Link href="/dashboard/users">
              <MdArrowBack size={30} color="white" />
            </Link>
          </div>
          <span>{pathname.split("/").pop()}</span>
        </div>
      )
    } else if (pathname.includes("products/") && isAddPage) {
      return (
        <div className={styles.backButton}>
          <div>
            <Link href="/dashboard/products">
              <MdArrowBack size={30} color="white" />
            </Link>
          </div>
          <span>{pathname.split("/").pop()}</span>
        </div>
      )
    } else {
      return pathname.split("/").pop();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Verification />
      </div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Buscar..." className={styles.input} readOnly/>
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} color="gray"/>
          <MdNotifications size={20} color="gray"/>
          <MdPublic size={20} color="gray"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
