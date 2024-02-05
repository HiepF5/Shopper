import React from 'react'
import './ProductDisplay.css'
import star_icon from '@assets/img/star_icon.png'
import star_dull_icon from '@assets/img/star_dull_icon.png'
import { useAllProduct } from '../../Store/AllProductStore'
function ProductDisplay({ product }) {
  const addToCart = useAllProduct((state) => state.addToCart)
  return (
    <div className='productDisplay'>
      <div className='productDisplay-left'>
        <div className='productDisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productDisplay-main-img'>
          <img src={product.image} alt='' />
        </div>
      </div>
      <div className='productDisplay-right'>
        <h1>{product.name}</h1>
        <div className='productDisplay-right-star'>
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productDisplay-right-prices'>
          <div className='productDisplay-right-prices-old'>${product.old_price}</div>
          <div className='productDisplay-right-prices-new'>${product.new_price}</div>
        </div>
        <div className='productDisplay-right-description'>
          A lightweight, usually knitted, pullover shirt close-fitting and with a round neckline and short sleeves, worn
          as an undershirt or outer garment.
        </div>
        <div className='productDisplay-right-size'>
          <h1>Select Size</h1>
          <div className='productDisplay-right-size-item'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        <p className='productDisplay-right-category'>
          <span style={{ fontWeight: 700 }}>Category :</span>Women , T-Shirt, Crop Top
        </p>
        <p className='productDisplay-right-category'>
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
