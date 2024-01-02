import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center relative bg-cover bg-[url('/assets/bg-mac.avif')]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <div className="absolute right-10 md:right-40 bottom-0 z-[10]">
        <Image
          src="/assets/my.jpeg"
          alt="Profile"
          width={300}
          height={300}
          className="w-[300px] h-[300px] z-[1] md:h-[350px] md:w-[350px] rounded-full border-4 border-white-400 mb-2"
        />
      </div>
      <div className="flex flex-col gap-3 z-[10] pl-40 pt-20">
        <h1 className="text-[50px] text-white max-w-[500px] sm:text-[30px]">
          I Turn Creativity into{" "}
          <span className="text-red-500">Digital Reality</span>
        </h1>
        <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
          As a Frontend Developer, I craft impactful user interfaces in the
          digital realm, leveraging my creativity. My projects stand out with
          the perfect fusion of design and code.
        </p>
        <div className="relative w-[100px] h-[100px] md:w-[160px] md:h-[160px] mt-10">
          <Image
            src="/assets/rounded-text.png"
            alt="Projects"
            width={160}
            height={160}
            className="slow-spin"
          />
        </div>
      </div>
    </main>
  );
}
