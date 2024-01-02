import React from "react";
import Image from "next/image";
import ServiceSlider from "@/components/ServiceSlider";
import { SkillsLogo } from "@/constants";

const Page = () => {
  return (
    <div className="flex items-center bg-[url('/assets/bg-mac.avif')] h-screen bg-cover overflow-hidden border-red-600 border-10">
      <div className="pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0">
        <h1 className="text-[50px] text-white font-semibold ">
          My Skills<span className="text-red-500">.</span>
        </h1>
        <div className="max-w-[350px] flex flex-wrap gap-10">
          {SkillsLogo.map((item, idx) => (
            <Image
              key={idx}
              src={item.src}
              alt={item.name}
              width={50}
              height={50}
              className=" w-[50px] h-[50px] "
            />
          ))}
        </div>
      </div>
      <div className="absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75">
        <Image
          src="/assets/bulb.png"
          alt="bulb"
          width={240}
          height={240}
          className="w-full h-full hidden md:block"
        />
      </div>
      <ServiceSlider />
    </div>
  );
};

export default Page;
