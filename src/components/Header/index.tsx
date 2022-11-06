import { FC } from 'react'
import { BsBasket } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className={s.Header}>
      <Link to="/">
        <h1 className={s.logo}>Store</h1>
      </Link>
      <Link to="/bin">
        <BsBasket
          size={25}
          className={s.bin}
        />
      </Link>
    </div>
  )
}

export default Header
