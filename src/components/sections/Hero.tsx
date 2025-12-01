import heroImg from "../../assets/images/Group.svg";
import CultureSection from "./CultureSection";

const Hero = () => {
  return (
    <main className="flex flex-col space-y-10 mt-12 container mx-auto px-4">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col space-y-4 w-full md:w-[58%] text-right">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            فرصت‌های شغلی داده‌هات
          </h1>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            ما در داده‌هات زیرساخت ابری نسل جدید رو بر پایه‌ی Kubernetes طراحی و
            ارائه می‌کنیم. مأموریت ما ساده‌ست: کمک کنیم تیم‌ها و سازمان‌ها بدون
            درگیری با پیچیدگی‌های فنی، روی توسعه‌ی محصولات تمرکز کنن و سریع‌تر
            به بازار برسن.
          </p>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <button
            className="font-extralight text-black items-center justify-center w-44 h-12 rounded gap-2 bg-yellow-400 hover:bg-yellow-500 flex"
            aria-label="مشاهده و بررسی فرصت‌های شغلی موجود در داده‌هات"
          >
            مشاهده فرصت‌های شغلی
          </button>
        </div>
      </header>

      <div className="flex justify-center">
        <img
          src={heroImg}
          alt="logo"
          loading="lazy"
          className="w-full max-w-[750px] h-auto"
        />
      </div>

      <CultureSection />
    </main>
  );
};

export default Hero;
