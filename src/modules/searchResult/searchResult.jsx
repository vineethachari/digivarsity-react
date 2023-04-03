import Footer from "../app/components/footer/footer";
import Header from "../app/components/header";
import DegreeResults from "./components/degreeResults";
import InputArea from "../search/components/inputArea";
import OpportunityResults from "./components/opportunityResults";
import UniversityResults from "./components/universityResults";

export default function SearchResult() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <InputArea />
        <div className="px-4 mx-auto">
          <h2 className="text-base not-italic font-semibold text-black mb-3">
            1,967 results for “Business”
          </h2>
        </div>
        <DegreeResults/>
        <UniversityResults/>
        <OpportunityResults/>
      </div>
      <Footer />
    </>
  );
}
