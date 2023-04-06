export default function EnrollPopup(props) {
    const { setShowModal } = props;
  return (
    <>
      <div className="relative bg-white enroll-popup">
        <button
          type="button"
          className="absolute top-3 right-2.5 text-grey bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-10px p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <span onClick={() => setShowModal(false)}>Skip</span>
        </button>
        <div className="px-6 py-6 lg:px-8 grid items-center h-80">
          <div>
            <h3 className="mb-2 text-base font-semibold text-center normal-case text-black">
              1,25,634 enrolled so far
            </h3>
            <p className="mb-6 text-xs font-medium text-center normal-case text-black">
              Get personalised guidance
            </p>
            <form className="space-y-4" action="#">
              <div className="relative">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 7.5C12.5449 7.5 14 6.04493 14 4.25C14 2.45507 12.5449 1 10.75 1C8.95507 1 7.5 2.45507 7.5 4.25C7.5 4.7699 7.62208 5.26128 7.83913 5.69705C7.8968 5.81286 7.916 5.94522 7.88256 6.0702L7.68899 6.79366C7.60496 7.10772 7.89228 7.39504 8.20634 7.31101L8.9298 7.11744C9.05478 7.084 9.18714 7.1032 9.30295 7.16087C9.73872 7.37792 10.2301 7.5 10.75 7.5Z"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M4.92443 4.45561L5.34629 5.21151C5.727 5.89367 5.57417 6.78856 4.97457 7.38816C4.97456 7.38817 4.97456 7.38817 4.97456 7.38817C4.97445 7.38828 4.24736 8.11559 5.56593 9.43416C6.88386 10.7521 7.61112 10.0263 7.61193 10.0255C7.61195 10.0255 7.61194 10.0255 7.61197 10.0255C8.21157 9.42592 9.10644 9.27311 9.78859 9.6538L10.5445 10.0757C11.5746 10.6505 11.6962 12.0951 10.7908 13.0005C10.2467 13.5446 9.58026 13.9679 8.84349 13.9958C7.6032 14.0429 5.49688 13.729 3.38401 11.6161C1.27113 9.50322 0.957239 7.39689 1.00426 6.1566C1.03219 5.41984 1.45552 4.75335 1.99957 4.2093C2.90499 3.30388 4.34956 3.42553 4.92443 4.45561Z"
                      stroke="black"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <input
                  type="mobile"
                  name="mobile"
                  id="mobile"
                  className="bg-alice-blue text-black text-10px h-10 focus:ring-fun-blue focus:border-fun-blue block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-black dark:text-white"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-10 mt-4 font-normal text-white text-base bg-fun-blue"
              >
                Submit
              </button>
              <div className="text-xs font-normal text-black text-center normal-case">
                Let us get back to you!
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
