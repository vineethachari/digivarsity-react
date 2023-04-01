import ugc from "@/themes/images/ugc.svg";
import naac from "@/themes/images/naac.svg";
import ugcapprove from "@/themes/images/ugc-appov.svg";
import Image from "next/image";

export default function Approved() {
  return (
    <>
      <div className="bg-seashell">
        <div className="px-4 mx-auto">
          <div className="grid grid-cols-3 justify-items-center py-3">
            <div className="flex items-center gap-x-2.5">
              <Image src={ugc} alt="UGC Approved" />{" "}
              <span className="text-xn font-normal">
                UGC <span className="block">Approved</span>
              </span>{" "}
            </div>
            <div className="flex items-center gap-x-2.5">
              <Image src={naac} alt="NAAC Accredited" />{" "}
              <span className="text-xn font-normal">
                NAAC <span className="block">Accredited</span>
              </span>{" "}
            </div>
            <div className="flex items-center gap-x-2.5">
              <Image src={ugcapprove} alt="UGC Approved" />{" "}
              <span className="text-xn font-normal">
                UGC <span className="block">Approved</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
