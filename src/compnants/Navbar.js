import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo-no-background.png";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  ">
      <div>
        <img className="pt-5 " src={Logo} alt="logo img" style={{ width: "200px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex  ">
        <li>
          <Link className=" font-bold  font-serif" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className=" font-bold font-serif" to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link  className=" font-bold font-serif " to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className=" font-bold font-serif" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className=" font-bold font-serif" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icon */}
      <div className="hidden lg:flex fixed flex-col- top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/hussein-dawood-446aa6263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              Linkedin <FaLinkedin  size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-800 rounded">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/husseindawood46"
            >
            
              GitHup <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-400 rounded">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              {" "}
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 rounded">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href=""
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
