//assets
import logo from "../assets/images/Group 2.svg";
import background from "../assets/gr.svg";

//icons
import { GoArrowLeft } from "react-icons/go";
import { FiLinkedin, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn, CiTwitter } from "react-icons/ci";
import { PiTelegramLogoBold } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <section className="relative h-[500px] w-full mb-16">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-13"
          />

          <div className="hidden md:block absolute bottom-30 right-1/2 translate-x-1/2 h-[300px] w-2/3 overflow-hidden">
            <img src={background} loading="lazy" className="mx-auto" />
          </div>

          <div className="relative overflow-hidden h-[400px]">
            <div className="absolute bg-[rgb(29,39,76)] rounded-full top-80 right-1/2 translate-x-1/2 h-[5000px] w-[5000px]" />
          </div>
        </section>

        <section className="text-center max-w-4xl space-y-8">
          <h2 className="text-6xl md:text-5xl">همین حالا شروع کنید</h2>

          <p className="text-lg md:text-xl leading-relaxed">
            فرصت را از دست ندهید؛ همین امروز با داده‌هات همراه شوید و از خدمات
            رایگان و قدرتمند ما بهره‌مند شوید تا توسعه‌ی پروژه‌هایتان را سریع‌تر
            و آسان‌تر کنید
          </p>

          <div className="relative inline-block mt-15 animate-pulse">
            <span className="absolute -top-3 -left-3 bg-[rgb(14,21,44)] text-sm px-3 py-1.5 rounded-xl whitespace-nowrap z-20">
              رایگان
            </span>

            <button
              aria-label="شروع کنید"
              className="relative flex items-center gap-3 px-15 py-4 bg-yellow-400 hover:bg-yellow-500 text-black text-2xl font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              شروع کنید
              <GoArrowLeft className="text-2xl" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <FiPhone className="text-xl" />
            <p className="text-lg" dir="ltr">
              +۹۸ ۹۰۳ ۰۹۴۹۰۹۵ <span className="mx-2">-</span> ۰۲۱-۱۲۳۴۵۶۷۸۹۰
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto mt-20 w-full">
          <div className="border-t border-white/10 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* About */}
            <section className="md:col-span-4 space-y-6">
              <img
                src={logo}
                alt="لوگوی داده‌هات"
                loading="lazy"
                className="h-12"
              />
              <p className="text-sm leading-relaxed text-gray-300">
                داده‌هات پلتفرمی قدرتمند و کاربرپسند برای مدیریت داده‌ها و
                زیرساخت‌های ابری است که توسعه‌دهندگان را در ایجاد راه‌حل‌های
                سریع و امن همراهی می‌کند. با ابزارهای حرفه‌ای و سرویس‌های
                انعطاف‌پذیر، تجربه‌ای ساده و کارآمد را ارائه می‌دهد.
                <br />
                <span className="font-medium">Ask ChatGPT</span>
              </p>
            </section>

            <nav
              className="md:col-span-5 grid grid-cols-3 gap-8"
              aria-label="لینک‌های دسترسی"
            >
              <div className="space-y-4">
                <h4 className="font-semibold mb-4">درباره ما</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    <a href="#">ارتباط با ما</a>
                  </li>
                  <li>
                    <a href="#">تیم ما</a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold mb-4">دسترسی سریع</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="#">محصولات ابری</a>
                  </li>
                  <li>
                    <a href="#">سرویس PaaS+</a>
                  </li>
                  <li>
                    <a href="#">مستندات</a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <a href="#">سوالات متداول</a>
                  </li>
                  <li>
                    <a href="#">راهنمای استفاده</a>
                  </li>
                  <li>
                    <a href="#">تماس با ما</a>
                  </li>
                </ul>
              </div>
            </nav>

            <section className="md:col-span-3">
              <h4 className="font-semibold mb-5">
                اطلاع از بروزرسانی‌های آینده
              </h4>
              <div className="flex">
                <input
                  type="email"
                  aria-label="ایمیل"
                  placeholder="ایمیل خود را وارد کنید"
                  className="w-full px-5 py-3 bg-white/10 border border-white/20 rounded-r-xl text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
                />
                <button
                  aria-label="ارسال ایمیل"
                  className="px-6 bg-yellow-400 text-black font-bold rounded-l-xl hover:bg-yellow-300 transition flex items-center"
                >
                  <GoArrowLeft className="text-xl" />
                </button>
              </div>
            </section>
          </div>

          <div className="border-t border-white/10 mt-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <div
              className="flex items-center gap-6"
              aria-label="شبکه‌های اجتماعی"
            >
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <CiTwitter className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <PiTelegramLogoBold className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <AiOutlineYoutube className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <FiLinkedin className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            </div>

            <address className="flex items-center gap-4 not-italic">
              <CiLocationOn className="w-5 h-5" />
              <span>تهران، خیابان احمدآباد، پلاک ۱۲</span>
            </address>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5" />
                <span dir="ltr">+۹۸ ۹۰۳ ۰۹۴۹۰۹۵</span>
                <span className="text-xl">-</span>
                <span dir="ltr">۰۲۱-۱۲۳۴۵۶۷۸۹۰</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mb-2"></div>

          <div className="flex justify-between text-center text-md py-6">
            <p>تمامی حقوق مادی و معنوی متعلق به داده‌هات می‌باشد</p>
            <div className="flex gap-8 text-gray-500">
              <p>شرايط استفاده</p>
              <p>شرایط و قوانین استفاده از خدمات داده‌هات</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
