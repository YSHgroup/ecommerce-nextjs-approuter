import type { NextPage } from "next";
import Carousel from "../Carousel";
import Image from "next/image";
const Home: NextPage = () => {
  const images = [
    "https://placehold.co/480x300?font=roboto&text=Slide+1",
    "https://placehold.co/480x300?font=roboto&text=Slide+2",
    "https://placehold.co/480x300?font=roboto&text=Slide+3",
    "https://placehold.co/480x300?font=roboto&text=Slide+4",
  ];
  return (
    <div className="lg:w-3/4 mx-auto my-2">
      <Carousel loop>
        {images.map((src, i) => {
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

