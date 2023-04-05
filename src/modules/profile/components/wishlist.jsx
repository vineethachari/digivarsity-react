import ProgramSlider from "@/modules/home/components/programList/programSlider";
export default function Wishlist() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-base not-italic font-semibold leading-8 text-black">
            My Wishlist
          </h2>
        </div>
      </div>
      <div className="h-4"></div>
      <div className="px-0 mx-auto">
        <div className="overflow-hidden">
          {/* <!-- Swiper -->  */}
          <ProgramSlider />
        </div>
      </div>
    </>
  );
}
