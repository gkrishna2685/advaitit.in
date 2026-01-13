
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'it-services', label: 'IT Infrastructure' },
    { id: 'hr-services', label: 'Manpower' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: Page) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg mr-2">
              <i className="fas fa-microchip text-white text-xl"></i>
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-indigo-900' : 'text-slate-900'}`}>
              Advait <span className="text-indigo-600">Infotech</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-slate-900">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors ${
                  currentPage === link.id ? 'text-indigo-600' : 'text-slate-700 hover:text-indigo-500'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 focus:outline-none">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-nav absolute top-full left-0 w-full shadow-lg py-4 border-t">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-6 py-3 text-base font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600 p-2 rounded-lg mr-2">
                  <i className="fas fa-microchip text-white text-lg"></i>
                </div>
                <span className="text-2xl font-bold text-white">Advait Infotech</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                A professionally managed organization delivering end-to-end IT infrastructure combined with strategic manpower staffing solutions across India.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Infrastructure</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavClick('it-services')} className="hover:text-indigo-400">Laptop Rentals</button></li>
                <li><button onClick={() => handleNavClick('it-services')} className="hover:text-indigo-400">IT AMC Services</button></li>
                <li><button onClick={() => handleNavClick('it-services')} className="hover:text-indigo-400">Hardware Sales</button></li>
                <li><button onClick={() => handleNavClick('it-services')} className="hover:text-indigo-400">Network Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Staffing</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => handleNavClick('hr-services')} className="hover:text-indigo-400">IT Support Engineers</button></li>
                <li><button onClick={() => handleNavClick('hr-services')} className="hover:text-indigo-400">Back-Office Executives</button></li>
                <li><button onClick={() => handleNavClick('hr-services')} className="hover:text-indigo-400">Field Operations</button></li>
                <li><button onClick={() => handleNavClick('hr-services')} className="hover:text-indigo-400">Contract Staffing</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt text-indigo-500 mt-1 mr-3"></i>
                  <span>Saket, Delhi, India</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt text-indigo-500 mr-3"></i>
                  <span>+91 9899979044</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope text-indigo-500 mr-3"></i>
                  <span>connect@advaithr.in</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} Advait Infotech. Strategic Technology & Workforce Partner.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
