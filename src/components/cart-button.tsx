import { useContext } from 'react'
import { RoundedButton } from './rounded-button'
import Cart from './icons/solid/ShoppingCart'
import { AppContext } from 'src/contexts/main'

export const CartButton: React.FC = () => {
  const { state } = useContext(AppContext)

  return <RoundedButton>
    { !!state.cart.length && 
      <div className="absolute -top-1 -right-1 rounded-full flex justify-center items-center min-w-min w-5 h-5 bg-red-100">
        <div>{ state.cart.length }</div>
      </div>}
    <Cart className="h-7 w-7" />
  </RoundedButton>
}
