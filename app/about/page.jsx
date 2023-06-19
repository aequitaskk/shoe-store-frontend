import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 h-screen">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-10 md:mb-12 text-center text-2xl font-bold text-gray-800 lg:text-3xl">
          About Us
        </h2>
      </div>

      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <span className="mb-10 md:mb-12 text-center text-gray-600">
          Welcome to our shoe ecommerce website! We are a team of passionate
          sneaker enthusiasts dedicated to providing you with the best selection
          of shoes on the market.
        </span>
        <p className="py-4">
          Our mission is to help you find the perfect pair of shoes that not
          only look great but also feel comfortable and perform well. We
          understand that buying shoes online can be a daunting task, which is
          why we strive to make your shopping experience as easy and enjoyable
          as possible. Our website is designed to be user-friendly, with
          intuitive navigation and detailed product descriptions to help you
          make informed decisions. Our team is made up of experienced sneaker
          experts who are always on the lookout for the latest trends and
          innovations in shoes.
        </p>
        <p>
          We are constantly updating our inventory to bring you the newest and
          most sought-after styles, so be sure to check back often to see what&apos;s
          new. We are committed to providing you with exceptional customer
          service, from answering your questions to processing your orders
          quickly and efficiently. If you have any questions or concerns, please
          don&apos;t hesitate to contact us. We are always here to help. Thank you
          for choosing our shoe ecommerce website for your sneaker needs. We
          look forward to serving you and helping you find the perfect pair of
          shoes!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
