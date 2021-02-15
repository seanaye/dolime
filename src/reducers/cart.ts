import type { Reducer } from 'react'

export type Cart = { id: string; price: number; variant: string; }[]

export type CartAction = 
  | { type: 'ADD', id: string, price: number, variant: string; }
  | { type: 'REMOVE', id: string }

export const cartReducer: Reducer<Cart, CartAction> = (state, action) => {
  switch (action.type) {

    case 'ADD':
      return [...state, { id: action.id, price: action.price, variant: action.variant }]

    case 'REMOVE':
      let removed = false
      return state.filter(item => {
        const shouldRemove = item.id === action.id && !removed
        if (shouldRemove) { removed = true }
        return shouldRemove
      }) 
  }
}

