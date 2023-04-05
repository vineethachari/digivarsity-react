import university from "@/themes/images/university.jpg";
import trichy from "@/themes/images/NIT-trichy.svg";
import wipro from "@/themes/images/wipro.svg";
import semester from "@/themes/images/semester.svg";
import price from "@/themes/images/price.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";

export default function ProgramSlider() {
  return (
    <>
      <Swiper
        className="myUniversity"
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
            <div className="px-3.5 py-1.5">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  {" "}
                  <Image src={trichy} alt="University Logo" />{" "}
                  <span className="text-xn font-normal">
                    NIT <span className="block">Trichy</span>
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  {" "}
                  <Image src={wipro} alt="Industry Logo" />{" "}
                </div>
              </div>
            </div>
            <Link href="/course">
              {" "}
              <Image className="" src={university} alt="University" />{" "}
            </Link>
            <div className="p-3.5">
              <h5 className="mb-0 text-xs font-bold capitalize leading-tight text-black truncate">
                {" "}
                Learn B.Tech Electrical Engineering{" "}
              </h5>
              <p className="mb-4 text-xs font-normal normal-case text-neutral-600 text-black truncate">
                {" "}
                with paid internship in leading companies{" "}
              </p>
              <div className="grid grid-cols-3 justify-items-start mb-4">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-bold">
                    33,000/-{" "}
                    <span className="block font-medium">Semester Fee</span>
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Stipend" />{" "}
                  <span className="text-xn font-bold">
                    1.2L/year <span className="block font-medium">Stipend</span>
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Enrolled" />{" "}
                  <span className="text-xn font-bold">
                    23,431 <span className="block font-medium">Enrolled</span>
                  </span>{" "}
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-semibold">
                    95% of seats full
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <Link
                    href="/course"
                    className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {" "}
                    Read More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <div className="block max-w-sm bg-white-smoke">
            <div className="px-3.5 py-1.5">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  {" "}
                  <Image src={trichy} alt="University Logo" />{" "}
                  <span className="text-xn font-normal">
                    NIT <span className="block">Trichy</span>
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  {" "}
                  <Image src={wipro} alt="Industry Logo" />{" "}
                </div>
              </div>
            </div>
            <Link href="/course">
              {" "}
              <Image className="" src={university} alt="University" />{" "}
            </Link>
            <div className="p-3.5">
              <h5 className="mb-0 text-xs font-bold capitalize leading-tight text-black truncate">
                {" "}
                Learn B.Tech Electrical Engineering{" "}
              </h5>
              <p className="mb-4 text-xs font-normal normal-case text-neutral-600 text-black truncate">
                {" "}
                with paid internship in leading companies{" "}
              </p>
              <div className="grid grid-cols-3 justify-items-start mb-4">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-bold">
                    33,000/-{" "}
                    <span className="block font-medium">Semester Fee</span>
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Stipend" />{" "}
                  <span className="text-xn font-bold">
                    1.2L/year <span className="block font-medium">Stipend</span>
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Enrolled" />{" "}
                  <span className="text-xn font-bold">
                    23,431 <span className="block font-medium">Enrolled</span>
                  </span>{" "}
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-semibold">
                    95% of seats full
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <Link
                    href="/course"
                    className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {" "}
                    Read More{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
          <div className="block max-w-sm bg-white-smoke">
            <div className="px-3.5 py-1.5">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  {" "}
                  <Image src={trichy} alt="University Logo" />{" "}
                  <span className="text-xn font-normal">
                    NIT <span className="block">Trichy</span>
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  {" "}
                  <Image src={wipro} alt="Industry Logo" />{" "}
                </div>
              </div>
            </div>
            <Link href="/course">
              {" "}
              <Image className="" src={university} alt="University" />{" "}
            </Link>
            <div className="p-3.5">
              <h5 className="mb-0 text-xs font-bold capitalize leading-tight text-black truncate">
                {" "}
                Learn B.Tech Electrical Engineering{" "}
              </h5>
              <p className="mb-4 text-xs font-normal normal-case text-neutral-600 text-black truncate">
                {" "}
                with paid internship in leading companies{" "}
              </p>
              <div className="grid grid-cols-3 justify-items-start mb-4">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-bold">
                    33,000/-{" "}
                    <span className="block font-medium">Semester Fee</span>
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={price} alt="Stipend" />{" "}
                  <span className="text-xn font-bold">
                    1.2L/year <span className="block font-medium">Stipend</span>
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Enrolled" />{" "}
                  <span className="text-xn font-bold">
                    23,431 <span className="block font-medium">Enrolled</span>
                  </span>{" "}
                </div>
              </div>
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-semibold">
                    95% of seats full
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <Link
                    href="/course"
                    className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {" "}
                    Read More{" "}
                  </Link>
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
