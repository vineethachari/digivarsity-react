import Image from "next/image";
import trichy from "@/themes/images/NIT-trichy.svg";
import semester from "@/themes/images/semester.svg";
import price from "@/themes/images/price.svg";

export default function UniversityResults() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-base not-italic font-semibold text-red-pink mb-3">
            University Results
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-3">
          <div className="block max-w-sm bg-light-red-pink border-b-2 border-red-pink">
            <div className="p-3.5">
              <div className="grid grid-rows-1 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5 mb-2.5">
                  {" "}
                  <Image src={trichy} alt="University Logo" />{" "}
                  <span className="text-xn font-normal">
                    Jain
                    <span className="block">University</span>
                  </span>{" "}
                </div>
                <h5 className="mb-0 text-xs font-bold capitalize leading-tight text-black">
                  B.Tech Electrical Engineering
                </h5>
                <p className="mb-2 text-xs font-normal normal-case text-neutral-600 text-black">
                  {" "}
                  with paid internship in leading companies{" "}
                </p>

                <div className="flex items-start gap-x-1 mb-2">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-bold">
                    33,000/-{" "}
                    <span className="block font-medium">Semester Fee</span>
                  </span>{" "}
                </div>
                <div className="grid grid-cols-2 justify-items-stretch mb-3">
                  <div className="flex items-start gap-x-1">
                    {" "}
                    <Image src={price} alt="Stipend" />{" "}
                    <span className="text-xn font-bold">
                      1.2L/year{" "}
                      <span className="block font-medium">Stipend</span>
                    </span>{" "}
                  </div>
                  <div className="flex items-start justify-end gap-x-1">
                    {" "}
                    <Image src={semester} alt="Enrolled" />{" "}
                    <span className="text-xn font-bold">
                      23,431 <span className="block font-medium">Enrolled</span>
                    </span>{" "}
                  </div>
                </div>

                <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                  <div className="flex items-start gap-x-1 w-12">
                    <span className="text-xn font-medium">
                      95% of seats full
                    </span>{" "}
                  </div>
                  <div className="flex items-start justify-end gap-x-2.5">
                    <button
                      type="button"
                      className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block max-w-sm bg-light-red-pink border-b-2 border-red-pink">
            <div className="p-3.5">
              <div className="grid grid-rows-1 justify-items-stretch items-center mb-0">
                <div className="flex items-start gap-x-1.5 mb-2.5">
                  {" "}
                  <Image src={trichy} alt="University Logo" />{" "}
                  <span className="text-xn font-normal">
                    Jain
                    <span className="block">University</span>
                  </span>{" "}
                </div>
                <h5 className="mb-0 text-xs font-bold capitalize leading-tight text-black">
                  B.Tech Electrical Engineering
                </h5>
                <p className="mb-2 text-xs font-normal normal-case text-neutral-600 text-black">
                  {" "}
                  with paid internship in leading companies{" "}
                </p>

                <div className="flex items-start gap-x-1 mb-2">
                  {" "}
                  <Image src={semester} alt="Semester Fee" />{" "}
                  <span className="text-xn font-bold">
                    33,000/-{" "}
                    <span className="block font-medium">Semester Fee</span>
                  </span>{" "}
                </div>
                <div className="grid grid-cols-2 justify-items-stretch mb-3">
                  <div className="flex items-start gap-x-1">
                    {" "}
                    <Image src={price} alt="Stipend" />{" "}
                    <span className="text-xn font-bold">
                      1.2L/year{" "}
                      <span className="block font-medium">Stipend</span>
                    </span>{" "}
                  </div>
                  <div className="flex items-start justify-end gap-x-1">
                    {" "}
                    <Image src={semester} alt="Enrolled" />{" "}
                    <span className="text-xn font-bold">
                      23,431 <span className="block font-medium">Enrolled</span>
                    </span>{" "}
                  </div>
                </div>

                <div className="grid grid-cols-2 justify-items-stretch items-center mb-0">
                  <div className="flex items-start gap-x-1 w-12">
                    <span className="text-xn font-medium">
                      95% of seats full
                    </span>{" "}
                  </div>
                  <div className="flex items-start justify-end gap-x-2.5">
                    <button
                      type="button"
                      className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      {" "}
                      Read More{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <nav aria-label="Page navigation example">
            <ul className="list-style-none flex">
              <li>
                <a className="pointer-events-none relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-500 transition-all duration-300">
                  Previous
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300"
                  href="#!"
                >
                  1
                </a>
              </li>
              <li aria-current="page">
                <a
                  className="relative block rounded-full bg-light-red-pink py-1.5 px-3 text-sm font-medium text-red-pink transition-all duration-300"
                  href="#!"
                >
                  2
                  <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                    (current)
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300"
                  href="#!"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="relative block rounded-full bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300"
                  href="#!"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="h-8"></div>
    </>
  );
}
