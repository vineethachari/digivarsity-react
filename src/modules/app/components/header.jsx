import menu from '@/themes/images/menu.svg';
import logo from '@/themes/images/logo.svg';
import language from '@/themes/images/language.svg';
import whatsapp from '@/themes/images/whatsapp.svg';
import user from '@/themes/images/user.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="bg-fun-blue sticky top-0 py-4 z-50">
        <div className="px-4 mx-auto">
          <div className="grid grid-cols-2">
            <div className="flex justify-start gap-5">
              <div className="flex">
                <Image src={menu} alt="Hamburger" />
              </div>
              <div className="flex">
                <Link href="/">
                  <Image src={logo} alt="Digivarsity" />
                </Link>
              </div>
            </div>
            <ul className="flex justify-end list-none gap-4">
              <li>
                <Image src={language} alt="Language" />
              </li>
              <li>
                <Image src={whatsapp} alt="WhatsApp" />
              </li>
              <li>
                <Image src={user} alt="My Account" />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
