import price from "@/themes/images/price.svg";
import Image from "next/image";

export default function HighLights() {
  return (
    <>
      <div className="block max-w-sm bg-white-smoke relative">
        <div className="p-3.5">
          <h5 className="mb-3 text-base font-semibold capitalize leading-tight text-black">
            Highlights
          </h5>
          <ul className="leading-8 mb-4">
            <li>
              <Image className="inline w-4 h-4" src={price} alt="Program fee" />{" "}
              <span className="text-xs font-medium">
                Course Duration: <span className="font-bold">4 years</span>
              </span>
            </li>
            <li>
              <Image className="inline w-4 h-4" src={price} alt="Program fee" />{" "}
              <span className="text-xs font-medium">
                Online Learning Duration:{" "}
                <span className="font-bold">12 hrs per week</span>
              </span>
            </li>
            <li>
              <Image className="inline w-4 h-4" src={price} alt="Program fee" />{" "}
              <span className="text-xs font-medium">
                On the Job Training Hours:{" "}
                <span className="font-bold">40 hrs per week</span>
              </span>
            </li>
            <li>
              <Image className="inline w-4 h-4" src={price} alt="Program fee" />{" "}
              <span className="text-xs font-medium">
                Program Fees: <span className="font-bold">8.40L</span>
              </span>
            </li>
            <li>
              <Image className="inline w-4 h-4" src={price} alt="Program fee" />{" "}
              <span className="text-xs font-medium">
                Stipend Range:{" "}
                <span className="font-bold">12,000 - 25,000</span>
              </span>
            </li>
            <li>
              <Image className="inline w-4 h-4" src={price} alt="Program fee" />{" "}
              <span className="text-xs font-medium">
                Eligibility:{" "}
                <span className="font-bold">45% in 12th Standard</span>
              </span>
            </li>
          </ul>
          <p className="mb-4 text-xs font-normal normal-case text-neutral-600 text-black">
            The EEE program at JAIN (Deemed-to-be University) is unique in its
            curriculum with a blend of core electrical courses besides elective
            subjects of recent trends and techniques that enhance the students
            with good employability opportunities in various domains globally.
          </p>
          <p className="mb-4 text-xs font-normal normal-case text-neutral-600 text-black">
            B. Tech course in Electrical and Electronics Engineering is an
            Unique, multi-faceted discipline and the universal set of all other
            circuit branches that offers exponential growth with widest spectrum
            of career choices into various fields namely the Power and Energy
            Sector, Control Engineering, Embedded technologies, Instrumentation,
            Renewable Energy Sector including recent advancements in Electric
            Vehicles,Charging stations, Energy Storage Systems and advanced
            electrical machinery.
          </p>
        </div>
      </div>
    </>
  );
}
