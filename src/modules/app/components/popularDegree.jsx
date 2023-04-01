import PopularDegreeSlider from "./popularDegreeSlider";

export default function PopularDegree() {
  return (
    <>
      <div className="px-4 mx-auto">
        <h2 className="text-base not-italic font-semibold text-black mb-3">
          Popular Degree Programs
        </h2>
      </div>
      <div className="px-0 mx-auto">
        <div className="overflow-hidden">
          {/* <!-- Swiper --> */}
          <PopularDegreeSlider/>
        </div>
      </div>
    </>
  );
}
