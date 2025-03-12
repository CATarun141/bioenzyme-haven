
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowToSection = () => {
  return (
    <section id="howto" className="py-20 bg-bio-pattern">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-bio-dark mb-6">
            How To Make <span className="text-bio-darkGreen">Bioenzymes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Creating your own bioenzymes is simple and requires just a few ingredients. Follow these steps to make your own natural cleaning solution at home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6 text-bio-darkGreen">What You'll Need:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-bio-lightGreen flex items-center justify-center text-bio-darkGreen font-medium">
                    1
                  </div>
                  <span>A large plastic container with a tight lid (do not use metal)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-bio-lightGreen flex items-center justify-center text-bio-darkGreen font-medium">
                    2
                  </div>
                  <span>1 part fruit/vegetable scraps (citrus peels work particularly well)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-bio-lightGreen flex items-center justify-center text-bio-darkGreen font-medium">
                    3
                  </div>
                  <span>1 part jaggery or brown sugar</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-bio-lightGreen flex items-center justify-center text-bio-darkGreen font-medium">
                    4
                  </div>
                  <span>3 parts water (chlorine-free water is best)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-bio-green to-bio-darkGreen shadow-lg">
                <div className="absolute inset-0 bg-bio-pattern opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold">1:1:3</div>
                    <div className="mt-2 text-sm">
                      FRUIT SCRAPS : SUGAR : WATER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-bio-dark">
            Step-by-Step Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-bio-lightGreen hover:shadow-md transition-all bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-4 text-bio-darkGreen font-bold text-xl">
                  1
                </div>
                <h4 className="text-lg font-medium mb-2">Prepare Your Container</h4>
                <p className="text-muted-foreground">
                  Clean your plastic container thoroughly. Make sure it can be sealed tightly but also allows gases to escape during fermentation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bio-lightGreen hover:shadow-md transition-all bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-4 text-bio-darkGreen font-bold text-xl">
                  2
                </div>
                <h4 className="text-lg font-medium mb-2">Add Ingredients</h4>
                <p className="text-muted-foreground">
                  Chop fruit/vegetable scraps into small pieces. Add the scraps, jaggery/sugar, and water to your container in a 1:1:3 ratio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bio-lightGreen hover:shadow-md transition-all bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-4 text-bio-darkGreen font-bold text-xl">
                  3
                </div>
                <h4 className="text-lg font-medium mb-2">Fermentation</h4>
                <p className="text-muted-foreground">
                  Seal the container and store in a cool, dark place. Open the lid daily for the first week to release gases, then weekly after that.
                </p>
              </CardContent>
            </Card>

            <Card className="border-bio-lightGreen hover:shadow-md transition-all bg-white">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-bio-lightGreen flex items-center justify-center mb-4 text-bio-darkGreen font-bold text-xl">
                  4
                </div>
                <h4 className="text-lg font-medium mb-2">Ready to Use</h4>
                <p className="text-muted-foreground">
                  After 3 months, strain the liquid. Your bioenzyme cleaner is ready! You can dilute it with water before using (1:10 ratio).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-bio-lightGreen rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-bio-dark">Important Tips:</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-bio-darkGreen mr-2">•</span>
              <span>Don't use metal containers or utensils as they can interfere with the fermentation process.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bio-darkGreen mr-2">•</span>
              <span>Release gases regularly to prevent pressure buildup.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bio-darkGreen mr-2">•</span>
              <span>The mixture will bubble and foam during fermentation - this is normal!</span>
            </li>
            <li className="flex items-start">
              <span className="text-bio-darkGreen mr-2">•</span>
              <span>The final product should smell sweet and slightly acidic, like vinegar or apple cider.</span>
            </li>
            <li className="flex items-start">
              <span className="text-bio-darkGreen mr-2">•</span>
              <span>Don't fill the container completely - leave at least 25% empty for expansion.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
