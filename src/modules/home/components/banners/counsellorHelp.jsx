import career from "@/themes/images/let-our-career-counsellors-help-you.webp";
import Image from "next/image";

export default function CounsellorHelp() {
  return (
    <>
      <div className="flex flex-wrap justify-start relative">
        {" "}
        <Image
          src={career}
          className="h-auto max-w-full"
          alt="Let our career counsellors help you!"
        />
        <div className="absolute play_3x w-44 top-1/2 left-3/4">
          <div className="grid grid-flow-row auto-rows-max gap-y-1">
            <h3 className="text-sm font-bold not-italic leading-4 text-black">
              Let our career counsellors help you!
            </h3>
            <p className="text-xs font-normal not-italic text-black">
              Book an appointment
              <br />
              with us
            </p>
            <button
              type="button"
              className="inline-block whitespace-nowrap bg-fun-blue w-max h-7 px-3 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {" "}
              Find a slot{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
