export default function Fee() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="h-8"></div>
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div className="block max-w-sm bg-white relative">
            <div>
              <h5 className="mb-3 text-base font-semibold capitalize leading-5 text-black">
                Fee Structure
              </h5>
              <ul className="list-none leading-none mb-4">
                <li className="mb-2">
                  <span className="text-xs font-normal">
                    One Time Registration Fees:{" "}
                    <span className="block font-bold">INR 20,000</span>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-xs font-normal">
                    Fees Per Annum:{" "}
                    <span className="block font-bold">INR 2,10,000</span>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-xs font-normal">
                    Total Fees:{" "}
                    <span className="block font-bold">INR 8,40,000</span>
                  </span>
                </li>
              </ul>
              <p className="text-xs font-normal">
                The students will experience the ambience and general
                infrastructure of an institution with an A++ grade
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
