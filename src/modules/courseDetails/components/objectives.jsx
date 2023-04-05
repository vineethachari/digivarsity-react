export default function Objectives() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="h-8"></div>
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div className="block max-w-sm bg-white-smoke relative">
            <div className="p-3.5">
              <h5 className="mb-3 text-base font-semibold capitalize leading-5 text-black">
                Objectives
              </h5>
              <ul className="leading-none mb-4 ml-3">
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    The students will experience the ambience and general
                    infrastructure of an institution with an A++ grade
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    The students will experience the availability of teachers,
                    Qualified only from reputed institutions across the country
                    with good technical skills and parental approach towards the
                    students.
                  </span>
                </li>
                <li className="list-disc mb-2">
                  <span className="text-xs font-normal">
                    Various skill development courses throughout the curriculum
                    are available, with different levels of certifications.
                  </span>
                </li>
              </ul>
              <p className="p-3.5 text-xs font-normal normal-case text-neutral-800 text-white bg-red-pink">
                The students of B.Tech in Electrical and Electronics Engineering
                will be trained to provide acceptable solutions to complex
                electrical engineering problems in major core industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
