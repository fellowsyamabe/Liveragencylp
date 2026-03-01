import { Facebook, Twitter, Instagram, Menu, X } from "lucide-react";
import svgPaths from "../../imports/svg-b8y292tsky";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-[#78D7D4]">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="relative">
            <div className="relative h-[25px] md:h-[31px] w-[140px] md:w-[169px] hover:scale-105 transition-transform duration-300">

            </div>
          </div>

          {/* Social Links with sketch underline */}
          <div className="relative hidden md:flex items-center gap-4">
            <span className="text-xs text-[#1e2f4e] font-medium">Follow us -</span>
            <div className="flex gap-3">
              <a href="#" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-all duration-300 hover:scale-110 hover:rotate-12">
                <Instagram size={20} />
              </a>
            </div>
            {/* Sketch underline */}
            <svg className="absolute -bottom-1 left-0 w-full h-1" viewBox="0 0 200 3">
              <path 
                d="M 2 1.5 Q 50 2.5 100 1.5 T 198 1.5" 
                stroke="#78D7D4" 
                strokeWidth="1.5" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1e2f4e] hover:text-[#78D7D4] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-[#78D7D4] shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors font-medium py-2">
                About
              </a>
              <a href="#strengths" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors font-medium py-2">
                Strengths
              </a>
              <a href="#benefits" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors font-medium py-2">
                Benefits
              </a>
              <a href="#recruit" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors font-medium py-2">
                Recruit
              </a>
              <div className="flex gap-4 pt-2 border-t border-gray-200">
                <a href="#" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-[#1e2f4e] hover:text-[#78D7D4] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
