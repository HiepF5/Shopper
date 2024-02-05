import React from 'react'
import './CartItems.css'
import remove_icon from '@assets/img/cart_cross_icon.png'
import { useAllProduct } from '../../Store/AllProductStore'
function CartItems() {
  const all_products = useAllProduct((state) => state.all_products)
  const addToCart = useAllProduct((state) => state.addToCart)
  const removeFromCart = useAllProduct((state) => state.removeFromCart)
  const getTotalCartAmount = useAllProduct((state) => state.getTotalCartAmount)

  const cart = useAllProduct((state) => state.cart)
  console.log(cart)
  return (
    <div className='cartItems'>
      <div className='cartItems-format-main'>
        <p>Products </p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cart[e.id]) {
          return (
            <div className='cartItems-format cartItems-format-main'>
              <img src={e.image} alt='' className='cartItems-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartItems-quantity'>{cart[e.id]}</button>
              <p>{e.new_price * cart[e.id]}</p>
              <img className='cartItems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt='' />
            </div>
          )
        }
        return null
      })}
      <div className='cartItems-down'>
        <div className='cartItems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartItems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartItems-total-item'>
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <div className='cartItems-total-item'>
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className='cartItems-promoCode'>
          <p>If you have a promo code, Enter it here</p>
          <div className='cartItems-promoBox'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
