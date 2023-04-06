import React from "react";
import Image from "next/image";
import { LanguageDropdown } from "./LanguageDropdown";

interface NavItem {
  text: string;
  href: string;
}

const Header: React.FC = () => {
  return (
    <header className="bg-primary shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <div className="relative h-8 w-8 mr-4">
              <Image src="/logo.png" alt="Logo" fill={true} sizes={"32px"} />
            </div>
            <span className="text-xl font-sans text-white ">META FOXES</span>
          </a>
          <nav className="flex space-x-10 auto">
            <LanguageDropdown />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
