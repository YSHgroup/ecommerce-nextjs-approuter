import { Props, prev } from '@/types'
import Image from 'next/image'
import classNames from 'classnames'
import Prev from '../../../public/arrow-prev-svgrepo-com.svg'
const PrevControl = (props: Props & prev) => {
  return (
    <button
      onClick={() => {
        if (props.canScrollPrev) {
          props.onPrev()
        }
      }}
      disabled={!props.canScrollPrev}
      className={classNames({
        'mx-2 px-4 py-2 text-white rounded-md': true,
        'bg-indigo-200 bg-opacity-50': !props.canScrollPrev,
        'bg-emerald-500 bg-opacity-30': props.canScrollPrev,
      })}
    >
      <Image
        src={Prev}
        alt='prev-svg'
        className=' object-fill'
        height={100}
        width={200}
      />
    </button>
  )
}

export default PrevControl
