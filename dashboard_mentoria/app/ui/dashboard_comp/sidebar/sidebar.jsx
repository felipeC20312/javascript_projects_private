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
        icon: <MdSupervisedUserCircle />
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

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/imgs/noavatar.png" alt="" width={50} height={50}/>
        <div className={styles.userDetail}>
          <span className={styles.username}>Felipe Caetano</span>
          <span className={styles.userTitle}>Front-end Developer</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItens.map(cat=>(
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logoutButton}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Sidebar;