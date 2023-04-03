import CounsellorHelp from "@/modules/app/components/banners/counsellorHelp";
import CommunitySay from "@/modules/app/components/communitySay";
import IndustrySlider from "./industrySlider";
import SimilarCoursesSlider from "./similarCoursesSlider";

export default function CourseBanners() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-0">
          <h2 className="text-base not-italic font-semibold leading-5 text-black mb-3 w-52">
            Get industry exposure with your degree
          </h2>
        </div>
     </div>
     <IndustrySlider/>
     <CommunitySay/>
     <CounsellorHelp/>
     <div className="h-6"></div>
     <SimilarCoursesSlider/>
    </>
  );
}
