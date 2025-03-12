
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Beaker, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <Beaker className="h-6 w-6 text-bio-darkGreen" />
            <span className="text-xl font-semibold text-bio-dark">BioEnzyme Haven</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#home"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#howto"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              How To Make
            </a>
            <a
              href="#uses"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Uses
            </a>
            <Button variant="default" className="bg-bio-darkGreen hover:bg-bio-green text-white">
              Get Started
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 h-[calc(100vh-4rem)] w-full bg-background md:hidden">
          <div className="container flex flex-col gap-6 p-8">
            <a
              href="#home"
              className="flex py-2 text-lg font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="flex py-2 text-lg font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#howto"
              className="flex py-2 text-lg font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              How To Make
            </a>
            <a
              href="#uses"
              className="flex py-2 text-lg font-medium text-foreground hover:text-primary"
              onClick={toggleMenu}
            >
              Uses
            </a>
            <Button variant="default" className="w-full bg-bio-darkGreen hover:bg-bio-green text-white" onClick={toggleMenu}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
