'use client'
import { inter } from "@/app/fonts";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import seamlessCode from '@/app/assets/images/carousel1-code.png'
import changeImage from '@/app/assets/images/carousel2-image.png'
import customizableImage from '@/app/assets/images/carousel3-image.png'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export const CarouselSection = () => {
  return (
    <Carousel
      swipeable={true}
      autoPlay={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      partialVisible={true}
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      className="bg-[#22262C] gap-20 pt-[150px]"
    >
      <div key={1} className="slider px-10">
        <div className="flex flex-col w-[1000px] h-[500px] max-w-[1000px] bg-secondary rounded-[60px] relative seamless-container pt-[35px] md:pt-[70px] pl-[40px] md:pl-[100px] border-secondary mx-auto">
          <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[75px] items-center justify-between mb-[30px] md:mb-[60px] mr-[30px] md:mr-[60px]">
            <h2 className="text-[40px] font-bold text-white max-w-[9ch]">Seamless Integration</h2>
            <p className={`${inter.className} text-xl text-white`}>Integrate Auth One into any app, using just a few lines of code, regardless of language or framework.</p>
          </div>
          <div className="flex self-end bottom-0">
            <Image src={seamlessCode} width={1350} height={390} alt="Coding screen with multiple tabs" className="rounded-br-[60px]" />
          </div>
        </div>
      </div>
      <div key={2} className="slider px-10">
        <div className="flex flex-row w-[1000px] h-[500px] max-w-[1000px] bg-primary rounded-[60px] relative change-container pt-[35px] md:pt-[70px] pl-[40px] md:pl-[100px] border-2 border-transparent mx-auto">
          <div className="flex flex-col gap-5 mb-[30px] md:mb-[60px] mr-[30px] md:mr-[60px]">
            <h2 className="text-[40px] font-bold text-white max-w-[9ch]">Built for change</h2>
            <p className={`${inter.className} text-xl text-white max-w-[400px]`}>Customizable and extendable technology that adapts as compliance and KYC regulations changes.</p>
          </div>
          <div className="flex self-end bottom-0">
            <Image src={changeImage} width={744} height={569} alt="Coding screen with multiple tabs" className="rounded-br-[60px] h-full z-10 mt-4" />
          </div>
        </div>
      </div>
      <div key={3} className="slider px-10">
        <div className="flex flex-col w-[1000px] h-[500px] max-w-[1000px] bg-tertiary rounded-[60px] relative customizable-container pt-[35px] md:pt-[70px] pl-[40px] md:pl-[100px] border-2 border-tertiary mx-auto">
          <div className="flex flex-col lg:flex-row gap-[40px] md:gap-[75px] items-center justify-between mb-[30px] md:mb-0 mr-[30px] md:mr-[60px]">
            <h2 className="text-[40px] font-bold text-white max-w-[9ch]">Customizable Authentication</h2>
            <p className={`${inter.className} text-xl text-white`}>Auth One offers flexible authentication using pass-keys, OTPs and magic links for hassle-free sign-ins.</p>
          </div>
          <div className="flex self-end bottom-0">
            <Image src={customizableImage} width={1294} height={480} alt="Coding screen with multiple tabs" className="rounded-br-[60px] h-[300px] w-auto mb-4" />
          </div>
        </div>
      </div>
      
    </Carousel>
  );
};
