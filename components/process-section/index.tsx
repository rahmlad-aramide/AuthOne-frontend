import Image from "next/image";
import { Logo } from "../svg";
import image1 from '@/app/assets/images/onboarding1.png'
import image2 from '@/app/assets/images/onboarding2.png'
import image3 from '@/app/assets/images/onboarding3.png'
import connector1 from '@/app/assets/images/connector1.png'
import connector2 from '@/app/assets/images/connector2.png'
// import connector3 from '@/app/assets/images/connector3.png'

export const ProcessSection = () => {
  return (
    <section className="bg-[#22262C] pt-[150px]">
      <h2 className="flex flex-col items-center text-center w-fit mx-auto font-semibold text-[55px] mb-8">
        <span className="inline-flex">
          <span className="heading-text flex font-semibold">Supercharge&nbsp;</span> your
        </span>{" "}
        <span className="inline-flex items-center">
          onboarding with&nbsp; <Logo className="h-[55px] min-w-[228px]" />
        </span>{" "}
      </h2>
      <div className="min-h-[711px]">
        <div className="relative bg-gradientProcess h-full w-full rounded-t-[50px] pt-[90px] overflow-hidden">
            <div className="absolute gradient-blur blur-[125px] mt-[10px] mx-auto w-[calc(100%_-_64px)] min-h-[264px] overflow-hidden" />
            {/* <div className="absolute blur-[125px] gradient-blur overflow-hidden mt-[80px] w-full px-16 mx-auto" /> */}
            <div className="flex z-10 relative mx-auto w-fit">
                <Image src={image1} width={300} height={469} alt="Sign up screen" />
                <Image src={connector1} width={128} height={296} className="h-fit my-auto flex" alt="Connector" />
                <Image src={image2} width={300} height={469} alt="Confirm email screen" />
                <Image src={connector2} width={132} height={173} className="h-fit my-auto flex" alt="Connector" />
                <Image src={image3} width={300} height={469} alt="Verify id screen" />
            </div>
            <div className="flex w-fit px-10 py-2.5 font-bold text-[30px] text-white bg-primary rounded-[50px] mx-auto mt-[30px]">
                We turn your login and sign-up process into pure awesomeness.
            </div>
        </div>
      </div>
    </section>
  );
};
