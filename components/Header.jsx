import Link from "next/link";
import { Button } from "./ui/button";

//component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img 
            src="/assets/haikalPutra-dev11.png" // Change this path to the actual path of your image
            alt="Logo"
            className="w-auto h-auto" // Adjust the width and height as needed
            style={{ maxHeight: '48px', maxWidth: 'auto' }} // Adjust this inline style for more control
          />
        </Link>
        {/* desktop nav & hire me btn */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="font-chakraPetch">Contact Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>

  );
};

export default Header;
