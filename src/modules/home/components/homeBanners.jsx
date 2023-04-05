import tcs from "@/themes/images/tcs.svg";
import bangalore from "@/themes/images/IISC-bangalore.svg";
import reliance from "@/themes/images/reliance.svg";
import Image from "next/image";
import FindCareer from "./banners/findCareer";
import Experience from "./banners/experience";
import Invite from "./banners/invite";
import CounsellorHelp from "./banners/counsellorHelp";
import Testimonials from "./testimonial/testimonials";

export default function HomeBanners() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-base not-italic font-semibold leading-5 text-black mb-3 w-52">
            Gain industry experience for a bright future ahead
          </h2>
        </div>
      </div>
      <div className="pl-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div className="flex overflow-y-auto gap-1.5">
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap bg-aquahaze h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-black"
            >
              {" "}
              <span>
                <Image
                  className="float-left"
                  src={reliance}
                  alt="Industry Logo"
                />
              </span>
              <span>Reliance</span>{" "}
            </button>
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap bg-aquahaze h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-black"
            >
              {" "}
              <span>
                <Image
                  className="float-left"
                  src={bangalore}
                  alt="Industry Logo"
                />
              </span>
              <span>IISC, Bangalore</span>{" "}
            </button>
            <button
              type="button"
              className="flex items-center justify-center whitespace-nowrap bg-aquahaze h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-black"
            >
              {" "}
              <span>
                <Image className="float-left" src={tcs} alt="Industry Logo" />
              </span>
              <span>TATA Consultancy Services</span>{" "}
            </button>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-7">
         <FindCareer/>
         <Experience/>
         <Invite/>
         <CounsellorHelp/>
         <Testimonials/>
        </div>
      </div>
    </>
  );
}
