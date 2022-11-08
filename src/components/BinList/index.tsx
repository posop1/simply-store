import { FC } from 'react'
import { useAppSelector } from '../../hooks'
import { IProduct } from '../../types'
import ProductItem from '../ProductItem'
import s from './BinList.module.scss'

const BinList: FC = () => {
  const binProducsts: IProduct[] = useAppSelector((state) => state.products.bin)
  const fullPrice: number = useAppSelector((state) => state.products.fullPrice)

  return (
    <div className={s.BinList}>
      <div className={s.bin__info}>
        <h3 className={s.bin__title}>Bin</h3>
      </div>
      <div className={s.list__container}>
        {binProducsts.length === 0 ? (
          <h4 className={s.empty}>Bin is empty</h4>
        ) : (
          <>
            <div className={s.list}>
              {binProducsts.map((product) => (
                <ProductItem
                  key={product.id}
                  product={product}
                  isBtn={false}
                />
              ))}
            </div>

            <div className={s.end__info}>
              <p>Full price {fullPrice}р.</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default BinList
