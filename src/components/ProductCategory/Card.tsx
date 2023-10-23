import Image from "next/image"

const Card = ({item}: {item: any}) => {
    return (
        <div className="relative w-80 h-96 rounded ">
            <Image className="object-content" src={item.thumbnail} alt={item.thumbnail} fill />
        </div>
    )
}

export default Card