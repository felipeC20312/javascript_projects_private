import { auth, signOut } from "@/app/auth";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";

import {
  MdSupervisedUserCircle,
  MdOutlineSettings,
  MdAttachMoney,
  MdShoppingBag,
  MdHelpCenter,
  MdDashboard,
  MdAnalytics,
  MdPeople,
  MdLogout,
  MdWork,
} from "react-icons/md";

const menuItens = [
  {
    title: "Páginas",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Usuários",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Produtos",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transações",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Análises",
    list: [
      {
        title: "Renda",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Relatórios",
        path: "/dashboard/reports_page",
        icon: <MdAnalytics />,
      },
      {
        title: "Times",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Usuário",
    list: [
      {
        title: "Configurações",
        path: "/dashboard/settings_page",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ajuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={user.userImg || "/imgs/noavatar.png"}
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>
            {user.isAdmin ? "Administrador" : "Cliente"}
          </span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItens.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logoutButton}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
