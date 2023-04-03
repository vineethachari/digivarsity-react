import Link from "next/link";

export default function UniversitySearch() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <h2 className="text-base not-italic font-semibold leading-8 text-red-pink">
            University
          </h2>
        </div>
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <ul className="list-none">
            <Link href="/search-results">
              <li className="flex justify-between items-center text-xs not-italic font-normal leading-8 text-black">
                Jain University{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </li>
            </Link>
            <Link href="/search-results">
              <li className="flex justify-between items-center text-xs not-italic font-normal leading-8 text-black">
                Acharya Nagarjuna University{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="h-8"></div>
    </>
  );
}
