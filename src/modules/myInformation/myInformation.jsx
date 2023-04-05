import Header from "../home/components/header";
import avatar from "@/themes/images/Avatars.jpg";
import Image from "next/image";

export default function MyInformation() {
  return (
    <>
      <Header />
      <div className="bg-white">
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
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 absolute"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                  <h2 className="text-base not-italic font-bold leading-8 text-black">
                    Edit Profile
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
                <p className="flex justify-center items-center text-xs gap-1 mt-2">
                  Photo Upload
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </p>
              </div>
              <div className="h-8"></div>
            </div>
          </div>
        </div>
        <div className="px-4 mx-auto">
          <div className="grid grid-flow-row auto-rows-max gap-y-3">
            <form action="">
              <div className="flex items-center mb-5">
                <label
                  for="name"
                  className="inline-block w-20 mr-6 text-left 
                                   font-normal text-10px text-grey"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="flex-1 text-xs py-2 border border-x-0 border-t-0 border-gray-400 focus:border-green-400 
                        text-black font-medium placeholder-grey
                        outline-none"
                />
              </div>
              <div className="flex items-center mb-5">
                <label
                  for="name"
                  className="inline-block w-20 mr-6 text-left 
                                   font-normal text-10px text-grey"
                >
                  DOB
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="DD/MM/YYYY"
                  className="flex-1 text-xs py-2 border border-x-0 border-t-0 border-gray-400 focus:border-green-400 
                        text-black font-medium placeholder-grey
                        outline-none"
                />
              </div>
              <div className="flex items-center mb-5">
                <label
                  for="name"
                  className="inline-block w-20 mr-6 text-left 
                                     font-normal text-10px text-grey"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="example@gmail.com"
                  className="flex-1 text-xs py-2 border border-x-0 border-t-0 border-gray-400 focus:border-green-400 
                          text-black font-medium placeholder-grey
                          outline-none"
                />
              </div>
              <div className="flex items-center mb-5">
                <label
                  for="name"
                  className="inline-block w-20 mr-6 text-left 
                                           font-normal text-10px text-grey"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="example@gmail.com"
                  className="flex-1 text-xs py-2 border border-x-0 border-t-0 border-gray-400 focus:border-green-400 
                                text-black font-medium placeholder-grey
                                outline-none"
                />
              </div>
              <div className="flex items-center mb-5">
                <label
                  for="name"
                  className="inline-block w-20 mr-6 text-left 
                                           font-normal text-10px text-grey"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="example@gmail.com"
                  className="flex-1 text-xs py-2 border border-x-0 border-t-0 border-gray-400 focus:border-green-400 
                                text-black font-medium placeholder-grey
                                outline-none"
                />
              </div>
              <div className="flex items-center mb-5">
                <label
                  for="name"
                  className="inline-block w-20 mr-6 text-left 
                                           font-normal text-10px text-grey"
                >
                  Pin Code
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="example@gmail.com"
                  className="flex-1 text-xs py-2 border border-x-0 border-t-0 border-gray-400 focus:border-green-400 
                                text-black font-medium placeholder-grey
                                outline-none"
                />
              </div>
              <div className="h-8"></div>
              <div className="text-right">
                <button className="py-3 px-8 bg-fun-blue text-sm text-white font-normal w-full">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}
