import avatar from "@/themes/images/Avatars.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="px-4 mx-auto">
        <div className="grid grid-flow-row auto-rows-max gap-y-3">
          <div className="text-center">
            <div className="h-8"></div>
            <div className="justify-center">
              <div className="grid items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 absolute"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <h2 className="text-base not-italic font-bold leading-8 text-black">
                  My Profile
                </h2>
              </div>
            </div>
            <div className="h-4"></div>
            <div className="justify-center">
              <div className="px-4">
                <Image
                  src={avatar}
                  alt="Profile"
                  className="shadow rounded-full mx-auto w-28 h-28 align-middle border-none"
                />
              </div>
              <h5 className="text-sm not-italic font-semibold leading-8 text-fun-blue">
                Rahul Kumar
              </h5>
              <p className="flex justify-center items-center text-xs gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Chennai
              </p>
            </div>
            <div className="h-8"></div>
          </div>
        </div>
      </div>
    </>
  );
}
