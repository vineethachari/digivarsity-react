import Header from "../home/components/header";
export default function Notification() {
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
                  <h2 className="mb-3 text-sm not-italic font-semibold leading-8 text-black">
                    Today
                  </h2>
                </div>
              </div>
              <div className="justify-center">
                <div className="bg-white-smoke px-4 py-4 mb-4">
                  <p className="text-right leading-none">
                    <span className="mb-1.5 text-xm text-sm text-right font-normal capitalize leading-none text-black">
                      1hr ago
                    </span>
                  </p>
                  <h5 className="mb-1.5 text-sm font-semibold capitalize leading-tight text-black">
                    Upcoming test on: 31/01/23
                  </h5>
                  <p className="mb-1.5 text-xs font-normal capitalize leading-tight text-black">
                    Remember to go through your notes! You will definitely ace
                    your test!
                  </p>
                  <p className="mb-0 text-10px font-semibold capitalize leading-tight text-black">
                    <a
                      href="#"
                      className="font-normal text-red-pink dark:text-blue-500 hover:no-underline"
                    >
                      Dismiss
                    </a>
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
