/** @format */

import Image from "next/image"
import addCart from '../../../public/shopping-cart-16-svgrepo-com.svg'
const BackFace = ({ product }: { product: any }) => {
	return (
    <div className="flip-card-back absolute flex justify-center items-center w-full h-full">
      <Image className="object-fill blur-lg" src={product.thumbnail} alt="back" fill/>
      <div className="absolute bg-cyan-300/30 flex flex-col justify-around w-4/5 h-4/5 text-[1.2rem] text-center text-teal-950 p-6">
        <h2 className="mb-6">{product.title}</h2>
        <div className=" columns-2">
            <h3><span className='text-[1.5rem] font-serif text-blue-800'>Price: </span>${product.price}</h3>
            <h3><span className='text-[1.5rem] font-serif text-blue-800'>Stock: </span>{product.stock}</h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-ml font-medium">
            <label htmlFor="count">Quantity: </label>
            <input className="w-16 rounded bg-sky-400/20 outline-none border-b-2" type="number" name="count" id="count" size={3} />
          </div>
          <div>
            <Image src={addCart} alt="add_cart" width={50} height={50} />
          </div>
        </div>
        {/* <button className="rounded from-teal-600 bg-gradient-to-t hover:bg-gradient-to-b text-cyan-100 font-bold border-emerald-950 px-6 py-4 border-b-2 shadow-convex">Shopping</button> */}
      </div>
    </div>
  )
}

export default BackFace
