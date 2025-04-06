'use client'

import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showCart, setShowCart] = useState(false)

  const openCartWithProduct = (product) => {
    setSelectedProduct(product)
    setShowCart(true)
  }

  const closeCart = () => {
    setShowCart(false)
    setTimeout(() => {
      setSelectedProduct(null)
    }, 300) // Wait for animation to complete
  }

  return (
    <CartContext.Provider value={{ selectedProduct, showCart, openCartWithProduct, closeCart }}>
      {children}
    </CartContext.Provider>
  )
}