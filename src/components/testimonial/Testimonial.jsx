import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./testimonial.css";
import matt from "/src/assets/matt.jpg";
import aj from "/src/assets/aj.jpg";
import tanveer from "/src/assets/tanveer.jpg";

const testimonialData = [
  {
    message:
      "Outstanding professional goes above and beyond to satisfy his clients! We look forward to using Ahmed many more times in the future, Thanks!",
    name: "Matt",
    designation: "Australia",
    avatar: matt,
  },
  {
    message: "Great job, highly recommended",
    name: "Tanveer Sengh",
    designation: "Singapore",
    avatar: tanveer,
  },
  {
    message:
      "Professional, reliable, and creative. Delivered on time with amazing results.",
    name: "AJ Caine",
    designation: "United States",
    avatar: aj,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50 py-24 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        What Clients Say
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        spaceBetween={40}
        pagination={{ clickable: true }}
        className="testimonial-swiper"
      >
        {testimonialData.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-3xl mx-auto text-center p-10 md:p-16 bg-white shadow-2xl rounded-3xl">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full mb-6"
                style={{ border: "4px solid #001f3f" }} // Navy blue border
              />
              <p className="text-gray-700 italic text-lg md:text-xl mb-6">
                "{t.message}"
              </p>
              <h3 className="font-semibold text-xl md:text-2xl">{t.name}</h3>
              <p className="text-md md:text-lg text-gray-500">{t.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
