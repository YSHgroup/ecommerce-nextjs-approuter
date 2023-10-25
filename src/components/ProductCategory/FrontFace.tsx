import Image from "next/image"
import StarRating from "../StarRating"

const FrontFace = ({ product }: { product: any }) => {
  const labelStyle = 'font-serif text-blue-800'

    return (
      <figure className='flip-card-front absolute bg-cyan-100  w-full h-full'>
      <div className='relative h-3/5'>
        <Image
          className='object-content border-b-slate-400 border-b'
          src={product.thumbnail}
          alt={product.thumbnail}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          fill
        />
      </div>
      <figcaption className='p-6 after:clear-both text-sky-950'>
        <p>
          <span className='text-[1.2rem] font-serif text-blue-800'>
            Title:{' '}
          </span>
          {product.title}
        </p>
        <div className='columns-2'>
          <p><span className={labelStyle}>Price: </span>${product.price}</p>
          <p className=' float-right'><span className={labelStyle}>Stock: </span>{product.stock}</p>
        </div>
        <div className=''>
          <div className='flex justify-between items-center'>
            <p className={labelStyle}>DiscountPercentage: </p>
            <p className='flex items-center'>
              <span className='text-1 text-xs mr-1'>{product.discountPercentage}% </span>
              <span className='flex rounded w-28 bg-white h-2 border overflow-hidden'>
              <span
                className=' bg-sky-600 h-full'
                style={{width: `${product.discountPercentage}%`}}
              ></span>
            </span>
            </p>
            
          </div>
          <div className='flex items-center justify-between'><span className={labelStyle}>Rating:</span> <StarRating rate={product.rating} /></div>
        </div>
      </figcaption>
    </figure>
    )
}

export default FrontFace