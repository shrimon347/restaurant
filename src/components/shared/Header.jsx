import { useState } from "react";
import logo from "../../assets/logo.png";
import Button from "./Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-gradient-to-r from-[#bd1f17] via-[#A51D13] to-[#be1b0f] z-[1000] text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
      
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Restaurant Logo" className="h-8 inline mr-2" />
          Restaurant
        </div>

     
        <nav className="hidden md:flex gap-6">
          {['Home', 'About', 'Portfolio', 'Clients', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-400"
            >
              {item}
            </a>
          ))}
        </nav>

      
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

       
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#bd1f17] md:hidden text-center py-4">
            {['Home', 'About', 'Portfolio', 'Clients', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white hover:text-yellow-400"
                onClick={toggleMenu} 
              >
                {item}
              </a>
            ))}

          
            <div className="py-4">
              <Button text="BOOK A TABLE" font="font-semibold" />
            </div>
          </div>
        )}

      
        <div className="hidden md:block">
          <Button text="BOOK A TABLE" font="font-semibold" />
        </div>
      </div>
    </header>
  );
};

export default Header;
