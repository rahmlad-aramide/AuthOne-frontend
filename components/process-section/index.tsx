import Image from "next/image";
import { Logo } from "../svg";
import image from '@/app/assets/images/onboarding.png'
// import connector3 from '@/app/assets/images/connector3.png'

export const ProcessSection = () => {
  return (
    <section className="bg-[#22262C] pt-[150px]">
      <h2 className="flex flex-col items-center text-center w-fit mx-auto font-semibold text-3xl leading-normal md:text-[55px] mb-8">
        <span className="inline-flex">
          <span className="heading-text flex font-semibold">Supercharge&nbsp;</span> your
        </span>{" "}
        <span className="inline-flex items-center">
          onboarding with&nbsp;<Logo className="h-[30px] md:h-[55px] min-w-[140px] md:min-w-[228px]" />
        </span>{" "}
      </h2>
      <div className="min-h-[711px]">
        <div className="relative bg-gradientProcess h-full w-full rounded-t-[50px] pt-[90px] overflow-hidden">
            <div className="absolute gradient-blur blur-[125px] mt-[10px] mx-auto w-[calc(100%_-_64px)] min-h-[264px] overflow-hidden" />
            <div className="flex z-10 relative mx-auto w-fit">
                <Image src={image} width={2380} height={1000} alt="Onboarding process" className="px-[125px]" />
            </div>
            <div className="flex w-fit px-10 py-2.5 font-bold text-center text-[30px] text-white bg-primary rounded-[50px] mx-auto mt-[120px]">
                We turn your login and sign-up process into pure awesomeness.
            </div>
        </div>
      </div>
    </section>
  );
};
