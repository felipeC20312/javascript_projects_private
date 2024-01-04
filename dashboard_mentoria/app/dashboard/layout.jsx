import Navbar from "../ui/dashboard_comp/navbar/navbar";
import Sidebar from "../ui/dashboard_comp/sidebar/sidebar";
import styles from "../ui/dashboard_comp/dashboard.module.css"
import Footer from "../ui/dashboard_comp/footer/footer";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}


export default Layout;