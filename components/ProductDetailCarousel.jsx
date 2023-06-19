"use client";
import { Carousel } from "react-carousel-minimal";

const ProductDetailCarousel = ({ images }) => {
  const data = images.map((image) => {
    return {
      image: `${image.attributes.url}`,
    };
  });

  return (
    <div>
      <Carousel
        data={data}
        width="500px"
        height="500px"
        radius="0px"
        slideNumber={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="60px"
      />
    </div>
  );
};

export default ProductDetailCarousel;
