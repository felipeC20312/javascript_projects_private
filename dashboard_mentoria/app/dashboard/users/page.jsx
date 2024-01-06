import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/app/ui/dashboard_comp/pagination/pagination";
import Search from "@/app/ui/dashboard_comp/search/search";
import DataSource from "@/app/ui/dashboard_comp/users/datasource/datasource";
import styles from "@/app/ui/dashboard_comp/users/users.module.css"
import Link from "next/link";

const UsersPage = async ({searchParams}) => {

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {count, users} = await fetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..."/>
        <Link href="/dashboard/users/adduser">
          <button className={styles.addButton}>Add User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <DataSource
                  user={user}
                />
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default UsersPage;