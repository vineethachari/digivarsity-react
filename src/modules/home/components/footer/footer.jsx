import FooterFirst from "./footerFirst";
import FooterMenus from "./footerMenus";

export default function Footer() {
  return (
    <>
      <FooterFirst />
      <div className="bg-charcoal-grey">
        <div className="px-4">
          <p className="text-xm text-white py-2">
            Copyright © 2010-2023 Digivarsity. All rights reserved.
          </p>
        </div>
      </div>
      <div className="h-20"></div>
      <FooterMenus />
    </>
  );
}
