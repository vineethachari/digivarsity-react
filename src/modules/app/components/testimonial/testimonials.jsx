import testimonials from "@/themes/images/testimonials.webp";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function Testimonials() {
  return (
    <>
      <Swiper
        className="myTestimonial"
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide key={1}>
          <div className="flex flex-wrap justify-start relative">
            {" "}
            <Image
              src={testimonials}
              className="h-auto max-w-full"
              alt="Invite your friends and family"
            />
            <div className="absolute play_3x w-44 top-1/2 left-1/3">
              <div className="grid grid-flow-row auto-rows-max gap-y-1">
                <h3 className="text-sm font-normal not-italic leading-4 text-white">
                  “Digivarsity has made graduation with work experience a
                  reality.”
                </h3>
                <p className="text-xs font-semibold not-italic text-grey-teal">
                  Neha Sharma
                </p>
                <p className="text-xs font-normal not-italic text-white">
                  - Student
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className="flex flex-wrap justify-start relative">
            {" "}
            <Image
              src={testimonials}
              className="h-auto max-w-full"
              alt="Invite your friends and family"
            />
            <div className="absolute play_3x w-44 top-1/2 left-1/3">
              <div className="grid grid-flow-row auto-rows-max gap-y-1">
                <h3 className="text-sm font-normal not-italic leading-4 text-white">
                  “Digivarsity has made graduation with work experience a
                  reality.”
                </h3>
                <p className="text-xs font-semibold not-italic text-grey-teal">
                  Neha Sharma
                </p>
                <p className="text-xs font-normal not-italic text-white">
                  - Student
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
