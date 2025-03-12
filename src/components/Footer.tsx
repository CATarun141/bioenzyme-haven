
import React from "react";
import { Beaker, Leaf, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-bio-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <Beaker className="h-6 w-6 text-bio-green" />
              <span className="text-xl font-semibold">BioEnzyme Haven</span>
            </div>
            <p className="text-bio-lightGreen/80 max-w-md">
              Your trusted source for information on natural, eco-friendly cleaning solutions made from kitchen waste.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-bio-green hover:text-bio-lightGreen transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-bio-green hover:text-bio-lightGreen transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-bio-green hover:text-bio-lightGreen transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-bio-green hover:text-bio-lightGreen transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-bio-green" />
              <span>Quick Links</span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-bio-lightGreen/80 hover:text-bio-green transition-colors">
                Home
              </a>
              <a href="#about" className="text-bio-lightGreen/80 hover:text-bio-green transition-colors">
                About Bioenzymes
              </a>
              <a href="#howto" className="text-bio-lightGreen/80 hover:text-bio-green transition-colors">
                How To Make
              </a>
              <a href="#uses" className="text-bio-lightGreen/80 hover:text-bio-green transition-colors">
                Uses & Applications
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-bio-green" />
              <span>Newsletter</span>
            </h3>
            <p className="text-bio-lightGreen/80 mb-4">
              Subscribe to our newsletter for tips, recipes, and updates on sustainable living.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-bio-dark border rounded px-3 py-2 flex-1 text-white border-bio-green/50 focus:outline-none focus:border-bio-green"
              />
              <button
                type="submit"
                className="bg-bio-darkGreen hover:bg-bio-green text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-bio-green/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-bio-lightGreen/60 text-sm">
            &copy; {new Date().getFullYear()} BioEnzyme Haven. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-bio-green hover:text-bio-lightGreen transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
