import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import sfwLogo from "@/assets/sfw-logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productLinks = [
    { name: "SFW Matching Tool", url: "https://sfwmatchingtool.vercel.app/" },
    { name: "SFW AI Sales Bot", url: "https://sfwtechnologiesrag.vercel.app/" },
    { name: "Executive Financial Management Dashboard", url: "https://qxxcbwpmeasz5qsuscyfnt.streamlit.app/" },
  ];

  const caseStudyLinks = [
    { name: "Field Service Management", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/ES3OjFvorX9NnWKMHvPRV6cByHn5TY5TOXU6EQMzgRC9Kg" },
    { name: "Digital Transformation", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EUNQgoiEGrxNro8KNoNO8SQBQWL8ywkV_TGeHF9nHP_A5A" },
    { name: "Kiosk System", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/ETUQAWH8MRtBjJol4tTy7CwBtPrOtub0qa5Lbl2W9Vap5Q" },
    { name: "Application Booking System", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EeOn-5ax-tFEujzBZkEuRpUBNJI6rf8cEUKmaFnr46zJ4A" },
    { name: "TMS", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EWLA3HJzLVJKsnwvFO5XRakBufrvyFLsaEAg9HclRLRTjg" },
    { name: "SFW AI -Management Dashboard", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EfVbjt19aoxDr3qQQ1O2uEcBSi2UGRDs8jV59Kz-a0XQcg" },
    { name: "SFW Matching Tool", url: "https://sfwtechnologies-my.sharepoint.com/:v:/p/sivakumar/EVvZVMpfuN9JvXPu2eDWOSABXo4ZE42F3utMyHAoPQIERg" },
  ];

  const scrollToDemos = () => {
    const demosSection = document.getElementById("demos");
    demosSection?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={sfwLogo} alt="SFW" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                {productLinks.map((product) => (
                  <DropdownMenuItem key={product.name} asChild>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {product.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Open Source */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Open Source <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white backdrop-blur-md">
                <DropdownMenuItem asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                    GitHub Repositories
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#opensource" className="cursor-pointer">
                    Contributions Guide
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Figma */}
            <a href="#figma" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Figma
            </a>

            {/* Case Studies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Case Studies <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-white backdrop-blur-md">
                {caseStudyLinks.map((caseStudy) => (
                  <DropdownMenuItem key={caseStudy.name} asChild>
                    <a
                      href={caseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {caseStudy.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Videos */}
            <a href="#videos" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Videos
            </a>

            {/* CTA Buttons */}
            <Button onClick={scrollToDemos} variant="outline" size="sm" className="ml-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50">
              Try Demos
            </Button>
            <Link to="/login">
              <Button size="sm" className="bg-dodger-blue-500 text-white hover:bg-dodger-blue-600 shadow-lg">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 bg-white rounded-lg mt-2 px-4 shadow-lg animate-fade-in border border-gray-200">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase">Products</p>
              {productLinks.map((product) => (
                <a
                  key={product.name}
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {product.name}
                </a>
              ))}
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <a href="#opensource" className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Open Source
              </a>
              <a href="#figma" className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Figma
              </a>
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase pt-2">Case Studies</p>
                {caseStudyLinks.map((caseStudy) => (
                  <a
                    key={caseStudy.name}
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors pl-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {caseStudy.name}
                  </a>
                ))}
              </div>
              <a href="#videos" className="block py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Videos
              </a>
            </div>
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Button onClick={scrollToDemos} variant="outline" className="w-full border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50">
                Try Demos
              </Button>
              <Link to="/login" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-dodger-blue-500 text-white hover:bg-dodger-blue-600 shadow-lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
