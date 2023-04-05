import step1 from "@/themes/images/step1.svg";
import step2 from "@/themes/images/step2.svg";
import step3 from "@/themes/images/step3.svg";
import Image from "next/image";

export default function Process() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-base not-italic font-semibold text-black mt-3.5">
            Admission Process
          </h2>
          <div className="grid grid-rows-3 gap-y-3 justify-items-center">
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={step1} alt="Step 1" />
            </div>
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={step2} alt="Step 2" />
            </div>
            <div className="flex items-start gap-x-1">
              {" "}
              <Image src={step3} alt="Step 3" />
            </div>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}
