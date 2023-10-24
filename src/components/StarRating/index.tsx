const StarRating = ({ rate }: { rate: number }) => {
  return (
    <div className='flex'>
      {[...Array(5)].map((_, i) => (
        <div className='rate-star' key={i} >
					<div className="w-full h-full"
						key={i} style={i+1<rate? {backgroundColor: 'gold', width: '100%'}: {backgroundColor: 'gold', width: `${((rate - Math.floor(rate)))*100}%`}}
					>

					</div>
				</div>
      ))}

      {rate}
    </div>
  )
}

export default StarRating
