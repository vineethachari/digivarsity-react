import Header from "../home/components/header";
export default function Schedule() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="px-4 mx-auto">
          <div className="grid grid-flow-row auto-rows-max gap-y-3">
            <div className="text-left">
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
                    Upcoming Appointment
                  </h2>
                </div>
              </div>
              <div className="h-4"></div>
              <div className="justify-center">
                <div className="bg-white-smoke px-4 py-4 mb-4">
                  <h5 className="mb-1.5 text-sm font-normal capitalize leading-tight text-black">
                    Dear, <strong>Rahul</strong>
                  </h5>
                  <p className="mb-1.5 text-xs font-normal capitalize leading-tight text-black">
                    We are happy to inform you that your appointment has been
                    booked. We look forward to having you with us.
                  </p>
                  <p className="mb-0 text-xs font-semibold capitalize leading-tight text-black">
                    <span className="mr-3">04-Apr-2023</span>
                    <span>02:30 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
    </>
  );
}
