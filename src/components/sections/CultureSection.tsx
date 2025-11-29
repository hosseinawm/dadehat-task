//assets
import workTime from "../../assets/images/Simplification-1.svg";
import gifts from "../../assets/images/Simplification-2.svg";
import budget from "../../assets/images/Simplification-3.svg";
import takmiliInsurence from "../../assets/images/Simplification-4.svg";
import insurence from "../../assets/images/Simplification-5.svg";
import course from "../../assets/images/Simplification-6.svg";
import remote from "../../assets/images/Simplification-7.svg";
import food from "../../assets/images/Simplification.svg";

const dadehatCulture = [
  {
    description: "ما به نوآوری و یادگیری مداوم باور داریم.",
    tags: ["فرهنگ کاری", "همیشگی"],
  },
  {
    description: "همکاری و اشتراک دانش قلب فرهنگ ماست.",
    tags: ["فرهنگ کاری", "همیشگی"],
  },
  {
    description: "کیفیت زیرساخت برای ما مهم‌تر از کمیت تحویل‌هاست.",
    tags: ["فرهنگ کاری", "همیشگی"],
  },
  {
    description: "شفافیت و اعتماد، پایه‌ی هر تصمیم و تعامل ماست.",
    tags: ["فرهنگ کاری", "همیشگی"],
  },
];

const benefits = [
  { image: remote, title: "دورکاری" },
  { image: course, title: "دوره‌های آموزشی" },
  { image: insurence, title: "بیمه" },
  { image: takmiliInsurence, title: "بیمه تکمیلی" },
  { image: budget, title: "بودجه تیم‌سازی" },
  { image: gifts, title: "هدایای مناسبتی" },
  { image: workTime, title: "ساعت کاری منعطف" },
  { image: food, title: "کمک هزینه غذا" },
];

const CultureSection = () => {
  return (
    <section className="w-full flex flex-col items-center mt-16 mb-44 px-4">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        فرهنگ کاری در داده‌هات
      </h3>

      <div className="flex flex-col items-center mt-10 w-full max-w-4xl space-y-4">
        {dadehatCulture.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[rgb(43,53,88)] rounded-2xl p-5 flex justify-between md:items-center md:justify-between gap-4"
          >
            <p className="text-right text-lg md:text-xl">{item.description}</p>

            <div className="flex gap-2 justify-end flex-col md:flex-row">
              <span className="px-4 py-4 bg-[rgb(29,37,65)] text-md md:text-lg rounded-full">
                {item.tags[0]}
              </span>
              <span className="px-4 py-4 bg-[rgb(64,73,104)] text-md md:text-lg rounded-full">
                {item.tags[1]}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-28  w-[95%] text-xl">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center "
          >
            <img src={benefit.image} alt="" />
            <p>{benefit.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CultureSection;
