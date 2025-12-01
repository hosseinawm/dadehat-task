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
  { image: remote, title: "دورکاری", alt: "آیکون دورکاری" },
  { image: course, title: "دوره‌های آموزشی", alt: "آیکون دوره‌های آموزشی" },
  { image: insurence, title: "بیمه", alt: "آیکون بیمه پایه" },
  { image: takmiliInsurence, title: "بیمه تکمیلی", alt: "آیکون بیمه تکمیلی" },
  { image: budget, title: "بودجه تیم‌سازی", alt: "آیکون بودجه تیم‌سازی" },
  { image: gifts, title: "هدایای مناسبتی", alt: "آیکون هدایای مناسبتی" },
  { image: workTime, title: "ساعت کاری منعطف", alt: "آیکون ساعت کاری منعطف" },
  { image: food, title: "کمک هزینه غذا", alt: "آیکون کمک هزینه غذا" },
];

const CultureSection = () => {
  return (
    <section
      className="w-full flex flex-col items-center mt-16 pb-32 px-4 sm:px-6 lg:px-8"
      aria-label="فرهنگ کاری و مزایای داده‌هات"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        فرهنگ کاری در داده‌هات
      </h2>

      <ul className="grid gap-6 mt-12 w-full max-w-5xl mx-auto md:grid-cols-1">
        {dadehatCulture.map((item, index) => (
          <li key={index}>
            <article
              className="w-full bg-[rgb(43,53,88)] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
              dir="rtl"
            >
              <p className="text-lg md:text-xl leading-relaxed text-right flex-1">
                {item.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <span className="px-5 py-3 bg-[rgb(29,37,65)] text-base md:text-lg rounded-full text-center whitespace-nowrap">
                  {item.tags[0]}
                </span>
                <span className="px-5 py-3 bg-[rgb(64,73,104)] text-base md:text-lg rounded-full text-center whitespace-nowrap">
                  {item.tags[1]}
                </span>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 md:gap-12 mt-28 w-full max-w-7xl mx-auto justify-items-center"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {benefits.map((benefit, index) => (
          <li key={index}>
            <figure className="flex flex-col items-center justify-center text-center">
              <img
                src={benefit.image}
                alt={benefit.alt}
                loading="lazy"
                className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
              />
              <figcaption className="text-base md:text-lg font-medium">
                {benefit.title}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CultureSection;
