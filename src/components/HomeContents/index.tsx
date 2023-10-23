import type { NextPage } from "next";
import Carousel from "../Carousel";
import Image from "next/image";
import {getData} from '@/functions/getData'

const Home: NextPage = async () => {
    const {products} = await getData('https://dummyjson.com/products?limit=10')
    const images = products.map((product : any, i: number) => product.thumbnail)
    // console.log('image-->', images);
    
  return (
    <div className="lg:w-3/4 mx-auto my-2">
      <Carousel loop>
        {images.map((src: string, i: number) => {
          return (
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Home;

