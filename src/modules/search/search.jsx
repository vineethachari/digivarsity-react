import Footer from "../app/components/footer/footer";
import Header from "../app/components/header";
import CompanySearch from "./components/companySearch";
import CourseSearch from "./components/courseSearch";
import InputArea from "./components/inputArea";
import OpportunitySearch from "./components/opportunitySearch";
import UniversitySearch from "./components/universitySearch";

export default function Search() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <InputArea />
        <div className="h-6"></div> 
        <CourseSearch/>
        <OpportunitySearch/>
        <UniversitySearch/>
        <CompanySearch/>
      </div>
      <Footer /> 
    </>
  );
}
