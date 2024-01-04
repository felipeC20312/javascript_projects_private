import { MdSearch } from "react-icons/md";
import styles from "../../dashboard_comp/search/search.module.css"

const Search = ({placeholder}) => {
  return (
    <div className={styles.container}>
      <MdSearch/>
      <input type="text" placeholder={placeholder} className={styles.input}/>
    </div>
  )
}

export default Search;