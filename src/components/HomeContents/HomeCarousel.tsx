import type { NextPage } from 'next'
import { EmblaOptionsType } from 'embla-carousel-react'
import Carousel from '../Carousel'
import Image from 'next/image'
import '../Carousel/carousel.css'

const Home: NextPage<{thmbImages: any}> = async ({thmbImages}) => {
  const images = thmbImages.map((product: any, i: number) => product.thumbnail)
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
    align: 'center',
  }
  return (
    <div className='flex flex-col lg:w-3/4 mx-auto my-2 h-screen justify-end pb-6'>
      <Carousel options={OPTIONS}>
        {images.map((src: string, i: number) => {
          return (
            <div className='embla__slide relative h-64 flex-[0_0_100%]' key={i}>
              <Image
                className='embla__slide__img object-cover'
                src={src}
                width={500}
                height={400}
                alt='carousel-image'
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Home
