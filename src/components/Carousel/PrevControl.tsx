import { Props } from "@/types";
import classNames from "classnames";

const PrevControl = (props: Props ) => {
    return (
        <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-indigo-200": !props.canScrollPrev,
          "bg-indigo-400": props.canScrollPrev,
        })}
      >
        Prev
      </button>
    )
}

export default PrevControl