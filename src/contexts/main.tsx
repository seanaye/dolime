import { createContext, useReducer } from 'react'
import type { Dispatch } from 'react'
import { cartReducer } from '../reducers/cart'
import type { Cart, CartAction } from '../reducers/cart'

const initialState = {
  cart: [] as Cart
}

export const AppContext = createContext<{
  state: typeof initialState;
  dispatch: Dispatch<CartAction>
}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = ({ cart }: typeof initialState, action: CartAction) => ({
  cart: cartReducer(cart, action)
})

export const AppProvider: React.FC = props => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return <AppContext.Provider value={{state, dispatch}}>
    {props.children}
  </AppContext.Provider>
}


