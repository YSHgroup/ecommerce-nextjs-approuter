'use client'
import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { PropsWithChildren } from 'react'
import CarouselControls from './CarouselControls'
import Autoplay from 'embla-carousel-autoplay'

type Props = PropsWithChildren & EmblaOptionsType & {
    options: Partial<EmblaOptionsType>;
  };
const Carousel = ({ children, options }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
    const length = React.Children.count(children)
    const canScrollPrev = !!emblaApi?.canScrollPrev();
    const canScrollNext = !!emblaApi?.canScrollNext();
  return (
    <>
    <div className='embla overflow-hidden' ref={emblaRef}>
      <div className='flex embla__slide'>{children}</div>
    </div>
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
        />
    </>
  )
}

export default Carousel
