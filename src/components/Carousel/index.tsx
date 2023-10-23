'use client'
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & EmblaOptionsType;
const Carousel = ({ children, ...options }: Props) => {
    const [emblaRef] = useEmblaCarousel(options)
    return (
        <div className="overflow-hidden" ref={emblaRef} >
            <div className="flex">{children}</div>
        </div>
    )
}

export default Carousel