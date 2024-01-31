import React, { useEffect } from 'react'
import './NewCollections.css'
import { useNewCollections } from '../../Store/NewCollectionsStore'
import Item from '../Item/Item'
function NewCollections() {
  const fetch = useNewCollections((state) => state.fetch)
  useEffect(() => {
    fetch('http://localhost:5000/new_collections')
  }, [])
  const new_collections = useNewCollections((state) => state.new_collections)
  return (
    <>
      <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='collections'>
          {new_collections.map((item, i) => {
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

export default NewCollections
