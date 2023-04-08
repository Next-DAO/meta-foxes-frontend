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
      <div className="lg:w-[1024px] mx-auto px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <div className="relative w-6 md:w-9 aspect-square">
              <Image src="/logo.png" alt="Logo" fill />
            </div>
            <span className="text-l md:text-2xl font-sans text-white ml-3">
              META FOXES
            </span>
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
