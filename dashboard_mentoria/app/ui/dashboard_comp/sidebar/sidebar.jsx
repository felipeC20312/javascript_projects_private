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
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "User",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analitics",
    list: [
      {
        title: "Reveanue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/settings",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user } = await auth();
  const session = await auth();
  console.log(session);

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
            {user.isAdmin ? "Admin" : "Client"}
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
