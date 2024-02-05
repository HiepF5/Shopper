import React, { useEffect } from 'react'
import './RelatedProducts.css'
import { useDataProduct } from '../../Store/DataProductStore'
import Item from '../Item/Item'
function RelatedProducts() {
  // const fetch = useDataProduct((state) => state.fetch)
  // useEffect(() => {
  //   fetch('http://localhost:5000/data_products')
  // }, [])
  const data_products = useDataProduct((state) => state.data_products)
  return (
    <>
      <div className='relatedProducts'>
        <h1>Related Products</h1>
        <hr />
        <div className='relatedProducts-item'>
          {data_products.map((item, i) => {
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
          })}
        </div>
      </div>
    </>
  )
}

export default RelatedProducts
