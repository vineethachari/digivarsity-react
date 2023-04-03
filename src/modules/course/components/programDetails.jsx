import delhi from "@/themes/images/IIT-Delhi-logo.svg";
import iit from "@/themes/images/IIT-delhi.jpg";
import price from "@/themes/images/price.svg";
import Image from "next/image";

export default function ProgramDetails() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="h-8"></div>
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div className="block max-w-sm bg-white-smoke relative">
            <div className="absolute w-full px-3.5 py-3.5">
              <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5">
                  {" "}
                  <Image src={delhi} alt="University Logo" />
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <a href="#!">
              {" "}
              <Image className="" src={iit} alt="University" />{" "}
            </a>
            <div className="p-3.5">
              <h5 className="mb-0 text-sm font-bold capitalize leading-tight text-black">
                B.Tech Electrical Engineering, IIT Delhi
              </h5>
              <p className="mb-4 text-xs font-normal normal-case text-neutral-600 text-black">
                Our 4-years electrical engineering program at IIT Delhi provides
                opportunities to learn at Reliance, Wipro, Tata Consultancy and
                more.
              </p>
              <div className="grid grid-cols-3 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1">
                  <span className="text-xs font-normal">
                    <strong className="block font-bold">95%</strong> of seats
                    full
                  </span>{" "}
                </div>
                <div className="flex items-start gap-x-1">
                  <span className="text-xs font-normal">
                    <strong className="block font-bold">23,387 </strong>{" "}
                    Enrolled{" "}
                  </span>{" "}
                </div>
                <div className="flex items-start justify-end gap-x-2.5">
                  <button
                    type="button"
                    className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xs font-normal capitalize leading-normal text-white"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-sm not-italic font-semibold text-black mt-3.5">
            Program Overview
          </h2>
          <div className="grid grid-cols-2 justify-items-start">
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={price} alt="Program fee" />{" "}
              <span className="text-xs font-semibold">
                INR 120,000{" "}
                <span className="block font-normal">Program fee</span>
              </span>{" "}
            </div>
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={price} alt="Stipend range" />{" "}
              <span className="text-xs font-semibold">
                15,000 - 22,000{" "}
                <span className="block font-normal">Stipend range</span>
              </span>{" "}
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-start">
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={price} alt="Online learning" />{" "}
              <span className="text-xs font-semibold">
                12 hours per week{" "}
                <span className="block font-normal">Online learning</span>
              </span>{" "}
            </div>
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={price} alt="On the job training" />{" "}
              <span className="text-xs font-semibold">
                40 hours per week{" "}
                <span className="block font-normal">On the job training</span>
              </span>{" "}
            </div>
          </div>

          <div className="grid grid-flow-col auto-cols-max gap-4">
            <button
              type="button"
              className="flex items-center whitespace-nowrap bg-transparent border border-red-pink w-max h-7 py-px px-2.5 gap-1 text-xs font-normal capitalize leading-normal text-red-pink"
              data-te-ripple-init
              data-te-ripple-color="light"
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Brochure
            </button>
            <button
              type="button"
              className="flex items-center whitespace-nowrap bg-red-pink border border-red-pink w-max h-7 py-px px-2.5 gap-1 text-xs font-normal capitalize leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Know more
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}
