import React, { useEffect } from 'react'
import { useAllProduct } from '../Store/AllProductStore'
import dropdown_icon from '@assets/img/dropdown_icon.png'
import Item from '../Components/Item/Item'
import './ShopCategory.css'
function ShopCategory({ banner, category }) {
  const fetch = useAllProduct((state) => state.fetch)
  useEffect(() => {
    fetch('http://localhost:5000/all_products')
  }, [])
  const all_products = useAllProduct((state) => state.all_products)
  console.log(all_products)
  return (
    <>
      <div className='shop-category'>
        <img className='shopCategory-banner' src={banner} alt='' />
        <div className='shopCategory-indexSort'>
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className='shopCategory-sort'>
            Sort by <img src={dropdown_icon} alt='' />
          </div>
        </div>
        <div className='shopCategory-products'>
          {all_products.map((item, i) => {
            if (category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  new_price={item.new_price}
                  old_price={item.old_price}
                  image={item.image}
                />
              )
            } else {
              return null
            }
          })}
        </div>
        <div className='shopCategory-loadMore'>Explore More</div>
      </div>
    </>
  )
}

export default ShopCategory
