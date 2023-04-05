import Image from "next/image";
import facebook from "@/themes/images/facbook.svg";
import instagram from "@/themes/images/instagram.svg";
import twitter from "@/themes/images/twitter.svg";
import linkedin from "@/themes/images/linkedin.svg";

export default function SocialIcons() {
  return (
    <>
      <ul className="flex mt-6 gap-2">
        <li className="border border-white rounded-full w-8 h-8">
          <a href="">
            <Image className="mx-auto m-1.5" src={facebook} alt="Facebook" />
          </a>
        </li>
        <li className="border border-white rounded-full w-8 h-8">
          <a href="">
            <Image className="mx-auto m-1.5" src={instagram} alt="Instagram" />
          </a>
        </li>
        <li className="border border-white rounded-full w-8 h-8">
          <a href="">
            <Image className="mx-auto m-1.5" src={twitter} alt="Twitter" />
          </a>
        </li>
        <li className="border border-white rounded-full w-8 h-8">
          <a href="">
            <Image className="mx-auto m-1.5" src={linkedin} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </>
  );
}
