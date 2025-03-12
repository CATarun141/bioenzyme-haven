
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sprout, Beaker, TestTube } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-bio-white">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-bio-dark mb-6">
            What Are <span className="text-bio-darkGreen">Bioenzymes</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Bioenzymes are natural multi-purpose cleaners made by fermenting fruit and vegetable scraps with jaggery/sugar and water. This fermentation process creates powerful enzymes with amazing cleaning and disinfecting properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-bio-lightGreen hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-6">
                <Leaf className="h-6 w-6 text-bio-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Made from kitchen waste, bioenzymes reduce landfill load and help you live more sustainably.
              </p>
            </CardContent>
          </Card>

          <Card className="border-bio-lightGreen hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-6">
                <TestTube className="h-6 w-6 text-bio-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chemical-Free</h3>
              <p className="text-muted-foreground">
                No harsh chemicals means it's safe for your family, pets, and the environment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-bio-lightGreen hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-6">
                <Beaker className="h-6 w-6 text-bio-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Versatile</h3>
              <p className="text-muted-foreground">
                Works as a cleaner, disinfectant, insect repellent, and even fertilizer for plants.
              </p>
            </CardContent>
          </Card>

          <Card className="border-bio-lightGreen hover:shadow-md transition-all hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-6">
                <Sprout className="h-6 w-6 text-bio-darkGreen" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
              <p className="text-muted-foreground">
                Save money by making your own cleaning products from kitchen waste you'd normally throw away.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 bg-bio-lightGreen rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-bio-dark">The Science Behind Bioenzymes</h3>
              <p className="mb-4 text-muted-foreground">
                During fermentation, microorganisms break down organic matter, creating enzymes, organic acids, and beneficial bacteria that have natural cleaning and disinfecting properties.
              </p>
              <p className="text-muted-foreground">
                These enzymes break down proteins, fats, and carbohydrates - the main components of most household dirt and grime. The acidic nature also makes bioenzymes effective against pathogens.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-bio-darkGreen mb-4">Key Components:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-bio-green/30 p-1 rounded-full mr-2 mt-1">
                    <Beaker className="h-4 w-4 text-bio-darkGreen" />
                  </span>
                  <div>
                    <span className="font-medium">Enzymes:</span> Catalyze chemical reactions to break down organic matter
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bio-green/30 p-1 rounded-full mr-2 mt-1">
                    <Beaker className="h-4 w-4 text-bio-darkGreen" />
                  </span>
                  <div>
                    <span className="font-medium">Organic Acids:</span> Create an environment hostile to harmful bacteria
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bio-green/30 p-1 rounded-full mr-2 mt-1">
                    <Beaker className="h-4 w-4 text-bio-darkGreen" />
                  </span>
                  <div>
                    <span className="font-medium">Beneficial Microbes:</span> Out-compete harmful bacteria
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-bio-green/30 p-1 rounded-full mr-2 mt-1">
                    <Beaker className="h-4 w-4 text-bio-darkGreen" />
                  </span>
                  <div>
                    <span className="font-medium">Phytochemicals:</span> Natural compounds from plants with antibacterial properties
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
