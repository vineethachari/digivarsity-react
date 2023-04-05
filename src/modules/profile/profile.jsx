import Header from "../home/components/header";
import About from "./components/about";
import ProfileLinks from "./components/profileLinks";
import Wishlist from "./components/wishlist";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="bg-white">
        <About />
        <ProfileLinks />
        <Wishlist />
      </div>
    </>
  );
}
