import { FC } from 'react'
import s from './ProductList.module.scss'

interface ProductListProps {}

const ProductList: FC<ProductListProps> = () => {
  return <div className={s.ProductList}>ProductList</div>
}

export default ProductList
