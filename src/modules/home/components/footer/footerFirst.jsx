import Image from "next/image";
import logo from "@/themes/images/logo.svg";
import SocialIcons from "./socialIcons";
import FooterAccordion from "./footerAccordion";

export default function FooterFirst() {
  return (
    <>
      <footer className="bg-grey-teal pt-8 pb-1 mt-12">
        <div className="grid grid-flow-row auto-rows-max">
          <div className="px-4">
            <div className="mb-2">
              <Image src={logo} alt="Digivarsity" />
            </div>
            <p className="text-xs text-white mb-2.5 w-60">
              By working with some of the top companies in India and helping
              them earn a handsome stipend Digivarsity aim to give the students
              a new way to complete their graduation and find success and
              careers
            </p>
            <input
              type="email"
              id="email"
              className="text-grey-teal text-xs p-2 w-52"
              placeholder="Subscribe to our newsletter"
              required
            />
            <SocialIcons />
          </div>
          <FooterAccordion />
          <div className="px-4">
            <ul className="list-none mt-7">
              <li className="text-xm text-white my-px">
                <a href="">Privacy policy</a>
              </li>
              <li className="text-xm text-white my-px">
                <a href="">Terms and conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
