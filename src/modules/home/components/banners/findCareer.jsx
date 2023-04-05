import career from "@/themes/images/find-a-career-opportunity.webp";
import Image from "next/image";

export default function FindCareer() {
  return (
    <>
      <div className="flex flex-wrap justify-start relative">
        {" "}
        <Image
          src={career}
          className="h-auto max-w-full"
          alt="Find a career opportunity close to where you live"
        />
        <div className="absolute play_3x w-44 top-1/2 left-1/3">
          <div className="grid grid-flow-row auto-rows-max gap-y-1">
            <h3 className="text-sm font-bold not-italic leading-4 text-black">
              Find a career opportunity close to where you live
            </h3>
            <p className="text-xs font-normal not-italic text-black">
              Over <strong>22,000</strong> openings in Telengana
            </p>
            <button
              type="button"
              className="inline-block whitespace-nowrap bg-fun-blue w-max h-7 px-3 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {" "}
              Read More{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
