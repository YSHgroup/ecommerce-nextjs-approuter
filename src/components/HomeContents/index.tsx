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
    <div id='category-container' className='w-full bg-slate-800/90 '>
      <div className='container mx-auto xl:w-5/6  mt-16'>
      {
        productsByCategory.map((productByCategory, i) => <ProductCategory key={i} productByCategory={productByCategory}/>)
      }
      </div>
    </div>
  )
}

export default HomeContent
