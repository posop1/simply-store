import { FC } from 'react'
import { useAppSelector } from '../../hooks'
import ProductItem from '../ProductItem'
import s from './ProductList.module.scss'

const ProductList: FC = () => {
  const products = useAppSelector((state) => state.products.products)

  return (
    <div className={s.ProductList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isBtn={true}
        />
      ))}
    </div>
  )
}

export default ProductList
