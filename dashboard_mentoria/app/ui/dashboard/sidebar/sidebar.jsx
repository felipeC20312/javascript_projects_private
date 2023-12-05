import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
// import Image from "next/image";

import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
} from "react-icons/md";

const menuItens = [
    {
        title:"Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle/>,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag/>,
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney/>,
            },
        ],
    },
    {
        title: "Analitics",
        list: [
            {
                title:"Reveanue",
                path:"/dashboard/reveanue",
                icon: <MdWork/>,
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics/>,
            },
            {
                title: "Teams",
                path: "/dashboard/",
                icon: <MdPeople/>,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title:"Settings",
                path:"/dashboard/settings",
                icon: <MdOutlineSettings/>,
            },
            {
                title: "Reports",
                path: "/dashboard/help",
                icon: <MdHelpCenter/>,
            },
        ],
    },
];

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="" alt="" width="50" height="50"/>
                <div className={styles.userDetail}>
                    <span className={styles.userName}>Felipe</span>
                    <span className={styles.userTitle}> Developer</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItens.map((cat) =>(
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map(item => (
                            <MenuLink item={item} key={item.title}/>
                        ))}
                    </li>
                ))}
            </ul>
            <button className={styles.logout}>
                <MdLogout/>
                Sair
            </button>
        </div>
    );
};

export default SideBar;