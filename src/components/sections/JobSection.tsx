import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiOfficeChair } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";

const jobs = [
  {
    title: "کارشناس ارشد حسابداری",
    department: "امور مالی و حسابداری",
    type: "فول تایم",
    location: "تهران",
    isRemote: "دورکاری",
  },
  {
    title: "ارسال آزاد رزومه",
    department: "همه",
    type: "نیمه وقت",
    location: "تهران",
    isRemote: "دورکاری",
  },
  {
    title: "سرپرست پشتیبانی مشتریان - شیفت صبح",
    department: "خدمات و پشتیبانی مشتریان",
    type: "فول تایم",
    location: "تهران",
    isRemote: "دورکاری",
  },
];

const JobSection = () => {
  return (
    <section className="bg-[rgb(20,28,53)] h-[85vh] w-full mt-20 flex flex-col items-center px-4 pt-32">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        فرصت‌های شغلی
      </h3>

      <form className="container w-[48%] mt-10 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-[70%] md:w-[70%]">
          <input
            type="text"
            placeholder="عنوان شغلی"
            className="w-full pr-10 py-3 rounded-xl border border-[rgb(62,73,111)] text-white placeholder-gray-300 text-right"
          />
          <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-xl" />
        </div>

        <div className="relative w-[70%] md:w-[30%]">
          <input
            type="text"
            placeholder="محل شغل"
            className="w-full pr-2 py-3 rounded-xl border border-[rgb(62,73,111)] text-white placeholder-gray-300 text-right"
          />
          <RiArrowDownSLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-xl" />
        </div>

        <div className="relative w-[70%] md:w-[30%]">
          <input
            type="text"
            placeholder="نوع همکاری"
            className="w-full pr-2 py-3 rounded-xl bg-[rgb(23,32,61)] border border-[rgb(62,73,111)] text-white placeholder-gray-300 text-right"
          />
          <RiArrowDownSLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 text-xl" />
        </div>
      </form>

      <div className="mt-5 w-full max-w-4xl space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-full bg-[rgb(29,39,76)] text-white rounded-2xl px-5 py-3 md:items-center space-y-1 md:justify-between gap-5"
          >
            <div className="flex justify-between items-center text-right">
              <h4 className="text-base sm:text-lg font-bold">{job.title}</h4>
              <button className="flex justify-between items-center gap-2 text-sm sm:text-base px-4 py-2 w-full md:w-auto hover:cursor-pointer hover:text-yellow-400">
                مشاهده جزئیات
                <GoArrowLeft />
              </button>
            </div>

            <div className="flex gap-2 text-xs sm:text-sm">
              <span className="px-3 flex items-center gap-2 py-1 rounded-full bg-[rgb(29,37,65)]">
                <CiLocationOn />
                {job.location}
              </span>
              <span className="px-3 flex items-center gap-2 py-1 rounded-full bg-[rgb(29,37,65)]">
                <FiClock />
                {job.type}
              </span>
              <span className="px-3 flex items-center gap-2 py-1 rounded-full bg-[rgb(29,37,65)]">
                <PiOfficeChair />
                {job.isRemote}
              </span>
              <span className="px-3 flex items-center gap-2 py-1 rounded-full bg-[rgb(29,37,65)]">
                <HiOutlineSquare3Stack3D />
                {job.department}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobSection;
