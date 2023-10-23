import React from 'react'
import ProductCategory from '../ProductCategory'
import {productByCategoryType} from '@/types'

const HomeContent: React.FC<{ products: any[] }> = ({ products }) => {
  let productsByCategory: productByCategoryType[] = []
  const checkCatgory = (stackedcategory: string[], category: string) => {
    return !!!stackedcategory.find((categories) => categories === category)
  }
  let stackedcategory = ['']
  products.forEach((preProduct: Record<string, string | string[]>, i: number) => {
    checkCatgory(stackedcategory, preProduct['category'] as string)
      ? stackedcategory.push(preProduct['category'] as string) &&
        productsByCategory.push({
          category: preProduct['category'] as string,
          product: [preProduct],
        }) &&
        stackedcategory[0] === '' &&
        stackedcategory.shift()
      : productsByCategory
          .filter((pro) => pro.category === preProduct['category'])[0]
          .product.push(preProduct)
  })
  return (
    <div className='container '>
      {
				productsByCategory.map((product, i) => <ProductCategory key={i} product={product}/>)
      }
    </div>
  )
}

export default HomeContent
