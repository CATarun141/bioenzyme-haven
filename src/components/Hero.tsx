
import React from "react";
import { Button } from "@/components/ui/button";
import { Droplets, ArrowDown, Leaf } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-cleanse-pattern py-20 md:py-32">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-cleanse-limeGreen/20 px-4 py-1 text-sm text-cleanse-darkGreen">
              <Leaf className="h-4 w-4" />
              <span>100% Natural Cleaning</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-cleanse-black">
              <span className="text-gradient-cleanse">Cleanse</span> Your Home With Citrus Power
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-lg">
              Discover eco-friendly cleaning solutions made from citrus peels and other natural ingredients - effective, sustainable, and better for your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection("howto")}
                className="bg-cleanse-limeGreen hover:bg-cleanse-darkGreen text-cleanse-black hover:text-white"
                size="lg"
              >
                Make Your Own
              </Button>
              <Button 
                onClick={() => scrollToSection("about")}
                variant="outline" 
                className="border-cleanse-limeGreen text-cleanse-darkGreen hover:bg-cleanse-limeGreen/20"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 animate-float">
              <img 
                src="/lovable-uploads/1e89c272-0a06-4b6f-8891-277b5a65f53f.png" 
                alt="Cleanse Logo" 
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            aria-label="Scroll Down"
            className="flex items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-sm hover:bg-white/20"
          >
            <ArrowDown className="h-6 w-6 text-cleanse-darkGreen" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
