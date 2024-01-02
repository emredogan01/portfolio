import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

function Navbar() {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex  gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white text-[45px]">
        EMRE <span className="font-thin">DOĞAN</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-row gap-5">
        <Link href="https://www.linkedin.com/in/doganemree01/ " target="_blank">
          <FaLinkedin className=" text-blue-500 text-6xl" />
        </Link>
        <Link href="https://github.com/emredogan01" target="_blank">
          <RiGithubLine className="text-white text-6xl" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
