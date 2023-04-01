import Faq from "../app/components/faq/faq";
import Footer from "../app/components/footer/footer";
import Header from "../app/components/header";
import CourseBanners from "./components/courseBanners";
import ProgramDetails from "./components/programDetails";

export default function Course() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <ProgramDetails/>
        <CourseBanners/>
        <Faq/>
      </div> 
      <Footer/>
    </>
  );
}
