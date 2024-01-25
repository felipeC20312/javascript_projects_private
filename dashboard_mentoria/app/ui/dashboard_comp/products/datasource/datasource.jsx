import Link from 'next/link';
import styles from './datasource.module.css';
import Image from 'next/image';
import Form from '../form/form';

const DataSource = ({ product }) => {

  const productname = product.productname || 'productname';
  const description = product.description || 'lorem ipsum dolor sit amet';
  const price = product.price || '0000';
  const stock = product.stock;
  const createdAt = product.createdAt?.toString().slice(4,16) || '00/00/0000';
  const productImg = product.productImg || "/imgs/noproduct1.png";

  const getSimpleProduct = (product) => {
    return {
      name: product.productname,
      description: product.description,
      price: product.price,
      stock: product.stock,
      createdAt: product.createdAt,
      productImg: product.productImg,
    };
  };

  const statusContent = stock;
  let _status = styles.noAvaliable;

  if (stock > 0) {
    _status = styles.avaliable;
  }

  return (
    <>
      <td>
        <div className={styles.user}>
          <Image src={productImg} alt='' width={40} height={40} className={styles.userImage}/>
          {productname}
        </div>
      </td>
      <td className={styles.description}>{description}</td>
      <td>${price}</td>
      <td>{createdAt}</td>
      <td>
        <div className={`${styles.status} ${_status}`}>
          {statusContent}
        </div>
      </td>
      <td>
        <div className={styles.buttons}>
          <Link href={`/dashboard/products/${product.id}`}>
            <button className={`${styles.button} ${styles.view}`}>Detalhar</button>
          </Link>
          <Form product={getSimpleProduct(product)} id={product.id}/>
        </div>
      </td>
    </>
  )
}

export default DataSource;