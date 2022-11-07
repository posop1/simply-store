import { FC } from 'react'
import { useAppSelector } from '../../hooks'
import ProductItem from './ProductItem'
import s from './ProductList.module.scss'

const ProductList: FC = () => {
  const products = useAppSelector((state) => state.products.products)

  return (
    <div className={s.ProductList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
        />
      ))}
    </div>
  )
}

export default ProductList
