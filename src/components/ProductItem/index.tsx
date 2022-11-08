import { FC } from 'react'
import { useAppDispatch } from '../../hooks'
import { toggleBin } from '../../redux/slice/productSlice'
import { IProduct } from '../../types'
import s from './ProductItem.module.scss'

interface ProductItemProps {
  product: IProduct
  isBtn: boolean
}

const ProductItem: FC<ProductItemProps> = ({ product, isBtn }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.ProductItem}>
      <img
        src={product.img}
        alt="image"
        className={s.image}
      />
      <div className={s.info}>
        <div className={s.info__text}>
          <h3 className={s.title}>{product.name}</h3>
          <p className={s.price}>{product.price}р.</p>
        </div>
        {isBtn && (
          <button
            className={s.btn}
            onClick={() => dispatch(toggleBin(product.id))}
          >
            BUY
          </button>
        )}
      </div>
    </div>
  )
}

export default ProductItem
