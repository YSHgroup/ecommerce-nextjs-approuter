'use client'
import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { PropsWithChildren } from 'react'
import CarouselControls from './CarouselControls'
import PrevControl from './PrevControl'
import Autoplay from 'embla-carousel-autoplay'
import NextControl from './NextControl'

type Props = PropsWithChildren &
  EmblaOptionsType & {
    options: Partial<EmblaOptionsType>
  }
const Carousel = ({ children, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const length = React.Children.count(children)
  const canScrollPrev = !!emblaApi?.canScrollPrev()
  const canScrollNext = !!emblaApi?.canScrollNext()
  return (
    <>
      <PrevControl
        canScrollPrev={canScrollPrev}
        onPrev={() => emblaApi?.scrollPrev()}
      />
      <div className='embla overflow-hidden' ref={emblaRef}>
        <div className='flex embla__slide'>{children}</div>
      </div>
      <NextControl
        canScrollNext={canScrollNext}
        onNext={() => emblaApi?.scrollNext()}
      />
    </>
  )
}

export default Carousel
