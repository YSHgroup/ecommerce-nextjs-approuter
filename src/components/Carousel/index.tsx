'use client'
import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { PropsWithChildren } from 'react'
import Link from 'next/link'
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
    <div className='flex relative'>
      <PrevControl
        canScrollPrev={canScrollPrev}
        onPrev={() => emblaApi?.scrollPrev()}
      />
      <div className='embla overflow-hidden content-center' ref={emblaRef}>
        <div className='flex embla__slide'>{children}</div>
      </div>
      <NextControl
        canScrollNext={canScrollNext}
        onNext={() => emblaApi?.scrollNext()}
      />
      <Link
        href={'/#category-container'}
        className='absolute p-2 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 btn btn-ghost border border-emerald-600 text-white/90 bg-emerald-500/40 hover:bg-emerald-500  z-5'
      >
        Shop Now
      </Link>
    </div>
  )
}

export default Carousel
