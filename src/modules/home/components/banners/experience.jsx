import degree from "@/themes/images/experience-the-industry-during-your-degree.webp";
import Image from "next/image";

export default function Experience() {
  return (
    <>
      <div className="flex flex-wrap justify-start relative">
        {" "}
        <Image
          src={degree}
          className="h-auto max-w-full"
          alt="Experience the industry during your degree"
        />
        <div className="absolute play_3x w-44 top-1/2 left-1/3">
          <div className="grid grid-flow-row auto-rows-max gap-y-1">
            <h3 className="text-sm font-bold not-italic leading-4 text-white">
              Experience the industry during your degree
            </h3>
            <p className="text-xs font-normal not-italic text-white">
              Accredited and premier institutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
