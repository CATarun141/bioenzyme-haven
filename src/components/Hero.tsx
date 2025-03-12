
import React from "react";
import { Button } from "@/components/ui/button";
import { Beaker, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-bio-pattern py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-bio-lightGreen px-4 py-1 text-sm text-bio-darkGreen">
              <Beaker className="h-4 w-4" />
              <span>Natural Cleaning Solutions</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-bio-dark">
              Clean Your Home <span className="text-bio-darkGreen">Naturally</span> With BioEnzymes
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
              Discover the power of bioenzymes - 100% natural, eco-friendly cleaning solutions made from fruit and vegetable scraps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection("howto")}
                className="bg-bio-darkGreen hover:bg-bio-green text-white"
                size="lg"
              >
                Learn How To Make
              </Button>
              <Button 
                onClick={() => scrollToSection("about")}
                variant="outline" 
                className="border-bio-darkGreen text-bio-darkGreen hover:bg-bio-lightGreen hover:text-bio-dark"
                size="lg"
              >
                Discover Benefits
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 animate-bounce-slow">
              <div className="absolute inset-0 rounded-full bg-bio-lightGreen/80 backdrop-blur-lg"></div>
              <div className="absolute inset-4 rounded-full bg-bio-green/50 backdrop-blur-lg"></div>
              <div className="absolute inset-8 rounded-full bg-bio-darkGreen/30 backdrop-blur-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Beaker className="h-20 w-20 text-bio-dark" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            aria-label="Scroll Down"
            className="flex items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20"
          >
            <ArrowDown className="h-6 w-6 text-bio-darkGreen" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
