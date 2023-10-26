/** @format */

import ProductCardInCart from "@/components/ProductCardInCart"
import PurchageBtns from '@/components/BtnGroup/PurchageBtns'
import { getData } from "@/functions/getData"

const Shopping = async ({params}: {params: {productId: string}}) => {
  const individualInfo = await getData(`https://dummyjson.com/products/${params.productId}`)
	return (
    <div className="w-screen h-screen p-16 bg-cyan-100">
      <div className="container m-auto flex flex-col pt-4">
        <ProductCardInCart individualInfo={individualInfo} />
        <div className=" self-end my-2">
          <PurchageBtns />
        </div>
      </div>
    </div>
  )
}

export default Shopping
