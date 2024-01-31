import React, { useEffect } from 'react'
import { useDataProduct } from '../../Store/DataProductStore'
import Item from '../Item/Item'
import './Popular.css'
function Popular() {
  const fetch = useDataProduct((state) => state.fetch)
  useEffect(() => {
    fetch('http://localhost:5000/data_products')
  }, [])
  const data_products = useDataProduct((state) => state.data_products)
  console.log(data_products)
  return (
    <>
      <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-item'>
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

export default Popular
