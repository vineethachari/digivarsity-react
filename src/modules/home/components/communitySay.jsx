import community2 from "@/themes/images/community2.jpg";
import community1 from "@/themes/images/community1.jpg";
import play from "@/themes/images/play.svg";
import Image from "next/image";

export default function CommunitySay() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-base not-italic font-semibold text-black mb-3">
            What our community has to say
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="flex justify-center">
            <div className="block max-w-sm bg-white mb-6">
              {" "}
              <a href="#!">
                <div className="relative">
                  {" "}
                  <Image className="Community" src={community1} alt="" />{" "}
                  <Image
                    className="play_3x absolute top-2/4 left-1/2"
                    src={play}
                    alt="Play Icon"
                  />{" "}
                </div>
                <p className="mt-2 text-xs font-normal not-italic text-black">
                  {" "}
                  “Digivarsity changed my life” - Saurav Gupta{" "}
                </p>
              </a>{" "}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="block max-w-sm bg-white mb-6">
              {" "}
              <a href="#!">
                <div className="relative">
                  {" "}
                  <Image className="Community" src={community2} alt="" />{" "}
                  <Image
                    className="play_3x absolute top-2/4 left-1/2"
                    src={play}
                    alt="Play Icon"
                  />{" "}
                </div>
                <p className="mt-2 text-xs font-normal not-italic text-black">
                  {" "}
                  Catch up with Dr. Rao and hear his thoughts about the future
                  in neuroscience.{" "}
                </p>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
