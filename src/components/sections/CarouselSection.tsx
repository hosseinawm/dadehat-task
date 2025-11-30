import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

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
    <section
      className='h-screen flex items-center justify-center px-4'
      data-aos='fade-up'
    >
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 250,
          modifier: 1.2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className='w-full max-w-7xl'
      >
        {items.map((img, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <div className='w-64 h-96 rounded-3xl overflow-hidden shadow-xl'>
              <img
                src={img}
                alt='staff'
                className='w-full h-full object-cover'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
