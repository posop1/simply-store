import { FC } from 'react'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import s from './Header.module.scss'

const Header: FC = () => {
  const binProducts = useAppSelector((state) => state.products.bin).length

  return (
    <div className={s.Header}>
      <Link to="/">
        <h1 className={s.logo}>Store</h1>
      </Link>
      {binProducts ? (
        <Link
          to="/bin"
          className={s.bin}
        >
          <BsBasket size={25} />
          <hr />
          <p>{binProducts}</p>
        </Link>
      ) : (
        <Link
          to="/bin"
          className={s.bin}
        >
          <BsBasket size={25} />
        </Link>
      )}
    </div>
  )
}

export default Header
