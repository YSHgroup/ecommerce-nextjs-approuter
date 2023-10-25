/** @format */

const Shopping = ({params}: {params: {productId: string}}) => {
	return (
    <div className="flex flex-col w-screen h-screen p-16">
      {params.productId}
    </div>
  )
}

export default Shopping
