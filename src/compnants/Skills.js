import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import React1 from "../assets/react.png";
import BootStrap from "../assets/bootstrap.png";
import Git from '../assets/git.png'
import Githup from '../assets/github.png'
export default function () {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 sm:m-20  ">Skills</p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4
        gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={Html} alt="Html icon" className="w-20 mx-auto"/>
                <p className="my-4">Html</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={Css} alt="Html css" className="w-20 mx-auto"/>
                <p className="my-4">Css</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={JavaScript} alt="javascript icon" className="w-20 mx-auto"/>
                <p className="my-4">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={BootStrap} alt="bootstrap icon" className="w-20 mx-auto"/>
                <p className="my-4">bootstrap</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={React1} alt="React icon" className="w-20 mx-auto"/>
                <p className="my-4">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={Tailwind} alt="tailwind icon" className="w-20 mx-auto"/>
                <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={Git} alt="Git icon" className="w-20 mx-auto"/>
                <p className="my-4">Git</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img src={Githup} alt="Githup icon" className="w-20 mx-auto"/>
                < p className="my-4">Githup </p>
            </div>
        </div>
      </div>
    </div>
  );
}
