import { FC } from 'react'
import { useAppDispatch } from '../../../hooks'
import { toggleBin } from '../../../redux/slice/productSlice'
import { IProduct } from '../../../types'
import s from './ProductItem.module.scss'

const ProductItem: FC<IProduct> = ({ id, name, price, img }) => {
  const dispatch = useAppDispatch()

  return (
    <div className={s.ProductItem}>
      <img
        src={img}
        alt="image"
        className={s.image}
      />
      <div className={s.info}>
        <div className={s.info__text}>
          <h3 className={s.title}>{name}</h3>
          <p className={s.price}>{price}р.</p>
        </div>
        <button
          className={s.btn}
          onClick={() => dispatch(toggleBin(id))}
        >
          BUY
        </button>
      </div>
    </div>
  )
}

export default ProductItem
