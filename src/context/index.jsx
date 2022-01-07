import { createContext } from "react"

export const CartContext = createContext({})

export function CartProvider({ children }) {
  const helloWorld = "Holá mundo!"

  return (
    <CartContext.Provider value={{ helloWorld }}>
      {children}
    </CartContext.Provider>
  )
}
