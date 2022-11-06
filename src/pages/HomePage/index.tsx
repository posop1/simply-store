import { FC } from 'react'
import ProductList from '../../components/ProductList'

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div>
      <ProductList />
    </div>
  )
}

export default HomePage
