import IndustrySliderItem from "./industrySliderItem";

export default function IndustrySlider() {
  return (
    <>
      <div className="px-0 mx-auto">
    <div className="grid grid-flow-row auto-rows-max gap-y-0">
      <div className="overflow-hidden">
        {/* <!-- Swiper --> */}
        <IndustrySliderItem/>
      </div>
    </div>
  </div>
    </>
  );
}
