export default function Documents() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="h-8"></div>
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div className="block max-w-sm bg-white-smoke relative">
            <div className="p-3.5">
              <h5 className="mb-3 text-base font-semibold capitalize leading-5 text-black">
                Documents to be submitted after collecting Provisional Admission
                Offer are:
              </h5>
              <ul className="leading-none mb-4 ml-3">
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Class 10 marks card (Original + 2 copies)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Class 12 / PUC marks card** (Original + 2 copies)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Diploma marks cards (all Semester)(If applicable)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Diploma degree certificate (If applicable)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Transfer certificate (Original + 2 copies)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Migration certificate (Original + 2 copies) (If applicable)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    5 passport size and 5 stamp size photographs
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Caste certificate and income certificate (Original + 2
                    copies) (If applicable)
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Parent's PAN card photocopy
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Student's Adhaar card photocopy
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Provisional Admission Offer letter (Original)
                  </span>
                </li>
              </ul>
              <p className="p-3.5 text-xs font-bold normal-case text-neutral-800 text-white bg-red-pink">
                *Candidates awaiting original 12th/PUC marks card may submit it
                later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
