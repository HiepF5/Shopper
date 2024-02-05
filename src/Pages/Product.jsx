import React from 'react'
import { useAllProduct } from '../Store/AllProductStore'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

function Product() {
  const all_products = useAllProduct((state) => state.all_products)
  // const getDefaultCart = useAllProduct((state) => state.getDefaultCart)

  // console.log(getDefaultCart())
  const { productId } = useParams()
  console.log(all_products)
  const product = all_products.find((e) => e.id === productId)

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
