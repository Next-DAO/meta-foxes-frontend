import React from 'react';

interface NavItem {
  text: string;
  href: string;
}

const Header: React.FC = () => {
  return (
    <header className="bg-primary shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="#" className="flex">
              <span className="text-xl font-semibold text-gray-700">YourLogo</span>
            </a>
          </div>
          <nav className="flex space-x-10 auto">
            <button className=''>change language</button>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
