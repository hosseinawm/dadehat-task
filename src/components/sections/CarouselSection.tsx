import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import staff1 from "../../assets/images/staff/bohemian-man-with-his-arms-crossed.jpg";
import staff2 from "../../assets/images/staff/confident-bearded-macho-man-looks-pleased-has-friendly-kind-grin-face-wears-round-spectacles-pink-jumper.jpg";
import staff3 from "../../assets/images/staff/designer-working-3d-model_23-2149371896.avif";
import staff4 from "../../assets/images/staff/handsome-young-cheerful-man-with-arms-crossed.jpg";
import staff5 from "../../assets/images/staff/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg";
import staff6 from "../../assets/images/staff/portrait-beautiful-young-woman-standing-grey-wall.jpg";
import staff7 from "../../assets/images/staff/vertical-shot-happy-dark-skinned-female-with-curly-hair.jpg";
import staff8 from "../../assets/images/staff/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg";

const items = [staff1, staff2, staff3, staff4, staff5, staff6, staff7, staff8];

export default function StaffCarousel() {
  return (
    <section className="pt-32 px-4 flex justify-center">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        autoplay={{ delay: 2500 }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-7xl"
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            coverflowEffect: {
              rotate: 5,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            },
          },
          640: {
            slidesPerView: 2.3,
            coverflowEffect: {
              rotate: 10,
              depth: 150,
              modifier: 1.1,
              slideShadows: false,
            },
          },
          1024: {
            slidesPerView: 4,
            coverflowEffect: {
              rotate: 15,
              depth: 260,
              modifier: 1.2,
              slideShadows: false,
            },
          },
        }}
      >
        {items.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <figure
              className="
                rounded-3xl overflow-hidden shadow-xl
                w-48 h-72
                sm:w-56 sm:h-80
                lg:w-64 lg:h-96
              "
            >
              <img
                src={img}
                alt="staff"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
