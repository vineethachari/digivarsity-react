import friends from "@/themes/images/invite-your-friends-and-family.webp";
import Image from "next/image";

export default function Invite() {
  return (
    <>
      <div className="flex flex-wrap justify-start relative">
        {" "}
        <Image
          src={friends}
          className="h-auto max-w-full"
          alt="Invite your friends and family"
        />
        <div className="absolute play_3x w-44 top-1/2 left-1/3">
          <div className="grid grid-flow-row auto-rows-max gap-y-1">
            <h3 className="text-sm font-bold not-italic leading-4 text-black">
              Invite your friends
              <br />
              and family
            </h3>
            <p className="text-xs font-normal not-italic text-black">
              Into the first-ever career community!
            </p>
            <button
              type="button"
              className="inline-block whitespace-nowrap bg-fun-blue w-max h-7 px-3 py-px px-2.5 text-xo font-normal capitalize leading-normal text-white"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {" "}
              Share your bookmark{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
