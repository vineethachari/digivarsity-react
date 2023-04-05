import Footer from "../home/components/footer/footer";
import Header from "../home/components/header";
import Documents from "./components/documents";
import Eligibility from "./components/eligibility";
import Fee from "./components/fee";
import HighLights from "./components/highlights";
import Objectives from "./components/objectives";
import Process from "./components/process";

export default function CourseDetails() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="px-4 mx-auto">
          <div className="h-8"></div>
          <div className="grid grid-flow-row auto-rows-max gap-y-3">
            <div>
              <button
                type="button"
                className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 mr-0.5 mb-1.5 text-xo font-normal capitalize leading-normal text-white"
              >
                Highlights
              </button>
              <button
                type="button"
                className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 mr-0.5 mb-1.5 text-xo font-normal capitalize leading-normal text-white"
              >
                Admission Process
              </button>
              <button
                type="button"
                className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 mr-0.5 mb-1.5 text-xo font-normal capitalize leading-normal text-white"
              >
                Fee Structure
              </button>
              <button
                type="button"
                className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 mr-0.5 mb-1.5 text-xo font-normal capitalize leading-normal text-white"
              >
                Objectives
              </button>
              <button
                type="button"
                className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 mr-0.5 mb-1.5 text-xo font-normal capitalize leading-normal text-white"
              >
                Eligibility
              </button>
            </div>
            <HighLights />
          </div>
        </div>
        <Process />
        <Documents />
        <Fee />
        <Objectives />
        <Eligibility />
      </div>
      <Footer />
    </>
  );
}
