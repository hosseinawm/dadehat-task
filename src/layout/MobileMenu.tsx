//icons
import { BiFolderMinus } from "react-icons/bi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaBook, FaRegCompass } from "react-icons/fa";
import { RiArrowDownSLine, RiHome5Fill } from "react-icons/ri";

type MobileMenuProps = {
  menuOpen: boolean;
  setMenuOpen: (prop: boolean) => void;
};

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex items-center justify-center 
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto "
            : "h-0 opacity-0 pointer-events-none"
        }
        `}
    >
      <div className="flex flex-col items-center gap-6 text-xl">
        <a
          className="hover:text-yellow-400 flex items-center gap-2"
          href="#"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <RiHome5Fill />
          خانه
        </a>
        <a
          className="hover:text-yellow-400 flex items-center gap-2"
          href="#"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <BsFillBoxSeamFill />
          محصولات
          <RiArrowDownSLine />
        </a>
        <a
          className="hover:text-yellow-400 flex items-center gap-2"
          href="#"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <FaRegCompass />
          راهکارها
          <RiArrowDownSLine />
        </a>
        <a
          className="hover:text-yellow-400 flex items-center gap-2"
          href="#"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <BiFolderMinus />
          درباره ما
        </a>
        <a
          className="hover:text-yellow-400 flex items-center gap-2"
          href="#"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <FaBook />
          مستندات فنی
        </a>
        <a
          className="hover:text-yellow-400 flex items-center gap-2"
          href="#"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          ورود یا ثبت‌نام
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
