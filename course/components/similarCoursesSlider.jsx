import IndustrySliderItem from "./industrySliderItem";
import SimilarCoursesSliderItem from "./similarCoursesSliderItem";

export default function SimilarCoursesSlider() {
  return (
    <>
      <div className="px-4 mx-auto">
        <h2 className="text-base not-italic font-semibold text-black mb-3">
          Similar Courses
        </h2>
      </div>
      <div className="px-0 mx-auto">
        <div className="overflow-hidden">
          {/* <!-- Swiper --> */}
          <SimilarCoursesSliderItem/>
        </div>
      </div>
    </>
  );
}
