import wipro from "@/themes/images/wipro.svg";
import semester from "@/themes/images/semester.svg";
import price from "@/themes/images/price.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

export default function IndustrySliderItem() {
  return (
    <>
      <Swiper
        className="myIndustry"
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay, Pagination]}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
      >
        <SwiperSlide key={1}>
          <div className="block max-w-sm bg-white-smoke">
            <div className="px-3.5 pt-3.5 pb-0">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  <span className="text-xs font-semibold">
                    Trainee{" "}
                    <span className="block font-normal">Wipro Limited</span>
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  {" "}
                  <Image src={wipro} alt="Industry Logo" />{" "}
                </div>
              </div>
            </div>
            <div className="p-3.5">
              <div className="grid grid-cols-2 justify-items-start mb-2.5">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Courses" />
                  <span className="block text-10px font-normal">BE. Mech</span>
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Stipend" />
                  <span className="block text-10px font-normal">
                    15,000 - 22,000 / Stipend
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-start mb-2.5">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Shift" />
                  <span className="block text-10px font-normal">
                    General shift
                  </span>
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Total Enrolled" />
                  <span className="block text-10px font-normal">
                    36k Enrolled
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  <span className="text-10px font-normal">
                    Work with top technologies like AI, robotics, and more.{" "}
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <a
                    href="#"
                    className="flex items-center text-10px font-normal capitalize leading-normal text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-2.5 h-2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    Chennai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className="block max-w-sm bg-white-smoke">
            <div className="px-3.5 pt-3.5 pb-0">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  <span className="text-xs font-semibold">
                    Trainee{" "}
                    <span className="block font-normal">Wipro Limited</span>
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  {" "}
                  <Image src={wipro} alt="Industry Logo" />{" "}
                </div>
              </div>
            </div>
            <div className="p-3.5">
              <div className="grid grid-cols-2 justify-items-start mb-2.5">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Courses" />
                  <span className="block text-10px font-normal">BE. Mech</span>
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Stipend" />
                  <span className="block text-10px font-normal">
                    15,000 - 22,000 / Stipend
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-start mb-2.5">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Shift" />
                  <span className="block text-10px font-normal">
                    General shift
                  </span>
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Total Enrolled" />
                  <span className="block text-10px font-normal">
                    36k Enrolled
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  <span className="text-10px font-normal">
                    Work with top technologies like AI, robotics, and more.{" "}
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <a
                    href="#"
                    className="flex items-center text-10px font-normal capitalize leading-normal text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-2.5 h-2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    Chennai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className="block max-w-sm bg-white-smoke">
            <div className="px-3.5 pt-3.5 pb-0">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  <span className="text-xs font-semibold">
                    Trainee{" "}
                    <span className="block font-normal">Wipro Limited</span>
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  {" "}
                  <Image src={wipro} alt="Industry Logo" />{" "}
                </div>
              </div>
            </div>
            <div className="p-3.5">
              <div className="grid grid-cols-2 justify-items-start mb-2.5">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Courses" />
                  <span className="block text-10px font-normal">BE. Mech</span>
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Stipend" />
                  <span className="block text-10px font-normal">
                    15,000 - 22,000 / Stipend
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-start mb-2.5">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Shift" />
                  <span className="block text-10px font-normal">
                    General shift
                  </span>
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Total Enrolled" />
                  <span className="block text-10px font-normal">
                    36k Enrolled
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  <span className="text-10px font-normal">
                    Work with top technologies like AI, robotics, and more.{" "}
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <a
                    href="#"
                    className="flex items-center text-10px font-normal capitalize leading-normal text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-2.5 h-2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    Chennai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-pagination relative mt-2"></div>
      </Swiper>
    </>
  );
}
