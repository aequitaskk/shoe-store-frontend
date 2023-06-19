"use client";
import { Carousel } from "react-carousel-minimal";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  const data = [
    {
      image: "/assets/slide-2.png",
    },
    {
      image: "/assets/slide-3.png",
    },
    {
      image: "/assets/slide-1.png",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto justify-center py-10 ">
      <div className="xl:grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-8 hidden px-4">
        <div className="col-span-1 row-span-2">
          <Image
            src="/assets/slide-2.png"
            width={1000}
            height={1000}
            className=" h-[640px] w-[800px] object-cover rounded-lg ml-2"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src="/assets/slide-3.png"
            width={700}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src="/assets/slide-1.png"
            width={700}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center xl:hidden">
        <Carousel
          data={data}
          width="950px"
          height="550px"
          radius="0px"
          slideNumber={false}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideImageFit="cover"
          thumbnails={false}
          thumbnailWidth="60px"
          automatic={true}
          time={5000}
        />
      </div>
    </div>
  );
};

export default HeroBanner;
