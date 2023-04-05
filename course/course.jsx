import Faq from "../home/components/faq/faq";
import Footer from "../home/components/footer/footer";
import Header from "../home/components/header";
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
