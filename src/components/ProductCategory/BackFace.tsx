

/** @format */

const BackFace = ({ product }: { product: any }) => {
	return (
    <div className="flip-card-back flex justify-center items-center absolute bg-cyan-300/80 w-full h-full">
      <div className="flex flex-col justify-around w-4/5 h-4/5 text-[1.2rem] text-center text-teal-950 p-6">
        <h2 className="mb-6">{product.title}</h2>
        <div className=" columns-2">
            <h3><span className='text-[1.5rem] font-serif text-blue-800'>Price: </span>${product.price}</h3>
            <h3><span className='text-[1.5rem] font-serif text-blue-800'>Stock: </span>{product.stock}</h3>
        </div>
        <button className="rounded from-teal-600 bg-gradient-to-t hover:bg-gradient-to-b text-cyan-100 font-bold border-emerald-950 px-6 py-4 border-b-2 shadow-convex">Shopping</button>
      </div>
    </div>
  )
}

export default BackFace
