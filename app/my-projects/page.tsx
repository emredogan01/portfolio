import React from "react";
import ProjectSlider from "@/components/ProjectSlider";

const Page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[url('/assets/bg-mac.avif')]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold ">
          My Work<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Explore My Project Portfolio: Discover web projects developed across
          diverse sectors, showcasing my Frontend Developer skills. Dive into
          projects that prioritize user experience with unique designs and
          robust coding.
        </p>
      </div>
      <ProjectSlider />
    </div>
  );
};

export default Page;
