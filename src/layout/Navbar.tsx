import { useState } from "react";
import MobileMenu from "./MobileMenu";
//assets
import logo from "../assets/images/Group 2.svg";

//icons
import { TbWorld } from "react-icons/tb";
import { RiArrowDownSLine, RiHome5Fill } from "react-icons/ri";
import { PiBellSlashLight } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaBook, FaRegCompass } from "react-icons/fa";
import { BiFolderMinus } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 flex flex-col items-center ">
        <div className="flex md:flex-row justify-end gap-3 md:gap-6 text-sm mt-4 w-[95%]">
          <div className="flex justify-end gap-6 w-full md:w-auto text-xs">
            <a href="#">تماس با ما</a>

            <p className="flex items-center gap-2">
              <PiBellSlashLight />
              نسخه v0.1.9
            </p>

            <button className="flex items-center gap-2">
              <TbWorld />
              فارسی
              <RiArrowDownSLine />
            </button>
          </div>
        </div>

        <nav className="flex items-center justify-between bg-[rgb(20,28,53)] w-[95%] h-14 rounded-2xl mt-3 px-4">
          <a href="#">
            <img src={logo} alt="logo" className="w-24  md:w-36" />
          </a>

          <div className="hidden md:flex gap-10 text-white">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <RiHome5Fill />
              خانه
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <BsFillBoxSeamFill />
              محصولات
              <RiArrowDownSLine />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <FaRegCompass />
              راهکارها
              <RiArrowDownSLine />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <BiFolderMinus />
              درباره ما
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <FaBook />
              مستندات فنی
            </a>
          </div>

          <button className="hidden md:flex  font-extralight text-black items-center justify-center w-36 h-10 rounded gap-2 bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer">
            ورود یا ثبت‌نام
            <GoArrowLeft />
          </button>

          <button
            className="md:hidden text-white text-2xl hover:cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <RxHamburgerMenu />
          </button>
        </nav>
      </header>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
