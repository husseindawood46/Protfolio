import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
export default function () {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is Hussein </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
           Hussein Dawood
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A Front-End Developer is someone who creates websites and web
          applications. The difference between Front-End and Back-End is that
          Front-End refers to how a web page looks, while back-end refers to how
          it works. You can think of Front-End as client-side and Back-End as
          server-side.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:duration-300 hover:border-pink-600">
            View Work
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4"/>
                </span>
          </button>
        </div>
      </div>
    </div>
  );
}
