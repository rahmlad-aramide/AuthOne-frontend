import { Button } from "@/components/button";
import { Flash } from "@/components/svg";
import {CodeSection} from '@/components/code-section'
import AnimatedText from "@/components/aimated-text";
import { CarouselSection } from "@/components/carousel";
import { ProcessSection } from "@/components/process-section";
import Image from "next/image";
import codeImage from '@/app/assets/images/code.png'

export default function Home() {
  return (
    <main className="flex flex-col">
      <section>
        <h1 className="border border-[#FFFFFF1A] mt-20 md:mt-[150px] h-fit bg-[#5C4EDE1A] flex items-center rounded-[25px] w-fit mx-auto px-5 py-3 text-[#9891E1] text-xs sm:text-sm md:text-lg font-semibold">
          <Flash className="mr-2" />
          12x Faster Verifications with Auth One
        </h1>
        <div className="bg-[#22262C]">
          <div className="relative bg-gradient-to-b from-[#292D32] via-50% via-[#433E88] to-100% to-[#5C4EDE] mt-[55px] h-fit rounded-b-[80px]">
            <div className="bg-size bg-no-repeat bg-heroBg bg-right-bottom rounded-b-[80px] pb-[60px]">
              <div className="absolute blur-[125px] gradient-blur overflow-hidden min-h-[264px] mt-[80px] w-full px-16 mx-auto" />
              <h2 className="relative z-10 text-[21px] sm:text-3xl md:text-[55px] font-medium text-center text-white md:leading-[70px] mb-[50px] ">
                Experience Onboarding <br /> 
                  <span className="relative inline-flex items-center transition-all duration-500">
                    <span className="py-2 inline-flex items-center leading-tight mt-3 sm:mt-5 ml-2">
                      designed to be 
                    </span>
                    <AnimatedText />
                  </span>
              </h2>
              <p className="relative z-10 text-center max-w-[62ch] mx-auto mb-10">Auth One accelerates user onboarding, minimizes drop-offs, and meets evolving KYC regulations effortlessly for your Nigerian  user base.</p>
              <form className="relative z-10 mt-[10px] flex mx-auto w-[calc(100%_-_32px)] md:w-full max-w-[600px] bg-[#3C4146] py-3 md:py-5 pl-[30px] pr-3 md:pr-5 h-16 md:h-20 rounded-[20px]">
                <input type="text" className={`w-full bg-transparent outline-none text-sm md:text-xl font-semibold text-white placeholder:text-white leading-[35px]`} placeholder="Your work email" />
                <Button className="whitespace-nowrap text-[15px] font-semibold" type="submit"> <span className="inline-flex sm:hidden">&rarr;</span> <span className="hidden sm:inline-flex">Join Our Waitlist</span></Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#22262C]">
        <Image src={codeImage} width={1280} height={600} alt="4 tabs code interface of AuthOne"
              className="mt-[60px] md:mt-[120px] z-10 relative flex w-[calc(100%_-_32px)] max-w-[1280px] mx-auto"
          />
      </section>
      <section className="hidden">
        <CarouselSection />
      </section>
      <ProcessSection />
    </main>
  );
}
