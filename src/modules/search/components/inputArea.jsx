export default function InputArea() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div>
            <div className="h-8"></div>
            <div className="flex justify-center">
              <div className="w-278">
                <div className="relative mb-1.5 flex w-full flex-wrap items-stretch">
                  <div className="absolute -left-8 top-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="relative m-0 -mr-px block w-[1%] min-w-0 h-9 flex-auto border border-solid border-grey bg-transparent bg-clip-padding px-3 py-1.5 text-xn font-normal text-black outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    placeholder="Search: Degrees with Work Experience"
                    aria-label="Search"
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="relative z-[2] h-9 flex items-center border border-solid border-grey border-l-0 bg-seashell px-2.5 py-2.5 text-xs font-medium uppercase leading-tight text-black transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800"
                    type="button"
                    id="button-addon1"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex overflow-y-auto gap-1.5">
                  <button
                    type="button"
                    className="inline-block whitespace-nowrap bg-fun-blue h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                  >
                    Degree
                  </button>
                  <button
                    type="button"
                    className="inline-block whitespace-nowrap bg-red-pink h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                  >
                    University
                  </button>
                  <button
                    type="button"
                    className="inline-block whitespace-nowrap bg-grey-teal h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                  >
                    Opportunity
                  </button>
                  <button
                    type="button"
                    className="inline-block whitespace-nowrap bg-ironside-grey h-7 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
                  >
                    Company
                  </button>
                </div>
              </div>
            </div>
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}
