import { Props, next } from "@/types";
import classNames from "classnames";
import Prev from '../../../public/arrow-prev-svgrepo-com.svg'
import Image from "next/image";

const NextControl = (props: Props & next ) => {
    return (
        <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          "mx-2 px-4 py-2 text-white rounded-md": true,
          "bg-indigo-200 bg-opacity-50": !props.canScrollNext,
          "bg-emerald-500 bg-opacity-30": props.canScrollNext,
        })}
      >
                <Image src={Prev} alt = 'prev-svg' className="rotate-180 object-fill" height={100} width={200} />

      </button>
    )
}

export default NextControl