import { CiLocationOn, CiSearch } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go"; // اسم آیکون رو درست کردم
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
    <section
      className="w-full bg-[rgb(20,28,53)] py-24 px-4 sm:px-6 lg:px-8 mt-20"
      aria-labelledby="jobs-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="jobs-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
        >
          فرصت‌های شغلی
        </h2>

        <div
          className="mt-12 w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 px-4 lg:px-0"
          aria-label="جستجوی فرصت‌های شغلی"
        >
          <div className="relative flex-1 min-w-0">
            <input
              type="text"
              placeholder="...عنوان شغلی"
              aria-label="جستجو بر اساس عنوان شغلی"
              className="w-full pr-12 pl-4 py-4 rounded-xl border border-[rgb(62,73,111)] bg-transparent text-white placeholder-gray-400 text-right focus:outline-none focus:border-yellow-400 transition"
            />
            <CiSearch
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center gap-5 w-full lg:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="تهران"
                readOnly
                aria-label="فیلتر بر اساس مکان"
                className="w-full lg:w-48 pr-4 pl-10 py-4 rounded-xl border border-[rgb(62,73,111)] bg-transparent text-white placeholder-gray-400 text-right cursor-pointer focus:outline-none focus:border-yellow-400 transition"
              />
              <RiArrowDownSLine
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="همه"
                readOnly
                aria-label="فیلتر بر اساس نوع همکاری"
                className="w-full lg:w-48 pr-4 pl-10 py-4 rounded-xl bg-[rgb(23,32,61)] border border-[rgb(62,73,111)] text-white placeholder-gray-400 text-right cursor-pointer focus:outline-none focus:border-yellow-400 transition"
              />
              <RiArrowDownSLine
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-2xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div
          className="mt-12 max-w-5xl mx-auto space-y-5"
          role="list"
          aria-label="لیست فرصت‌های شغلی"
        >
          {jobs.map((job, index) => (
            <article
              key={index}
              className="bg-[rgb(29,39,76)] rounded-2xl p-5 md:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-shadow"
              dir="rtl"
            >
              <div className="flex flex-col gap-4 flex-1">
                <h3 className="text-lg sm:text-xl font-bold">{job.title}</h3>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(29,37,65)]"
                    aria-label={`مکان: ${job.location}`}
                  >
                    <CiLocationOn aria-hidden="true" />
                    {job.location}
                  </span>
                  <span
                    className="flex items-center gap-2 px-2 px-4 py-2 rounded-full bg-[rgb(29,37,65)]"
                    aria-label={`نوع همکاری: ${job.type}`}
                  >
                    <FiClock aria-hidden="true" />
                    {job.type}
                  </span>
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(29,37,65)]"
                    aria-label={`وضعیت کاری: ${job.isRemote}`}
                  >
                    <PiOfficeChair aria-hidden="true" />
                    {job.isRemote}
                  </span>
                  <span
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[rgb(29,37,65)]"
                    aria-label={`دپارتمان: ${job.department}`}
                  >
                    <HiOutlineSquare3Stack3D aria-hidden="true" />
                    {job.department}
                  </span>
                </div>
              </div>

              <a
                href="#"
                className="flex items-center gap-3 text-sm sm:text-base font-medium hover:text-yellow-400 transition-colors self-start md:self-center"
                aria-label={`مشاهده جزئیات شغل ${job.title}`}
              >
                مشاهده جزئیات
                <GoArrowLeft className="text-lg" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSection;
