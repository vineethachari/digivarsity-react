import Advantage from "./components/advantage";
import Approved from "./components/approved";
import CommunitySay from "./components/communitySay";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/footer";
import Header from "./components/header";
import HomeBanners from "./components/homeBanners";
import PopularDegree from "./components/popularDegree";

export default function Home() {
  return (
    <>
      <Header />
      <Approved />
      <div className="bg-white">
        <Advantage />
        <PopularDegree />
        <CommunitySay/>
        <HomeBanners/>
        <Faq/>
      </div>
      <Footer/>
    </>
  );
}
