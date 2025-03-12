
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const UsesSection = () => {
  return (
    <section id="uses" className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-bio-dark mb-6">
            Uses of <span className="text-bio-darkGreen">Bioenzymes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Bioenzymes are incredibly versatile and can replace many chemical cleaners in your home. Here are some of the most popular ways to use them.
          </p>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="home" className="data-[state=active]:bg-bio-lightGreen data-[state=active]:text-bio-darkGreen">
              Home Cleaning
            </TabsTrigger>
            <TabsTrigger value="personal" className="data-[state=active]:bg-bio-lightGreen data-[state=active]:text-bio-darkGreen">
              Personal Care
            </TabsTrigger>
            <TabsTrigger value="garden" className="data-[state=active]:bg-bio-lightGreen data-[state=active]:text-bio-darkGreen">
              Garden &amp; Plants
            </TabsTrigger>
            <TabsTrigger value="other" className="data-[state=active]:bg-bio-lightGreen data-[state=active]:text-bio-darkGreen">
              Other Uses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="p-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">All-Purpose Cleaner</h3>
                  <p className="text-muted-foreground mb-4">
                    Dilute 1 part bioenzyme with 10 parts water. Use to clean countertops, floors, glass surfaces, and bathrooms.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:10
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Dishwashing</h3>
                  <p className="text-muted-foreground mb-4">
                    Add 1-2 tablespoons to your dishwater or use directly on a sponge to clean dishes, pots, and pans.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:5 or use directly
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Laundry Booster</h3>
                  <p className="text-muted-foreground mb-4">
                    Add ½ cup to your laundry to enhance cleaning, remove odors, and soften clothes naturally.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Amount: ½ cup per load
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Drain Cleaner</h3>
                  <p className="text-muted-foreground mb-4">
                    Pour undiluted bioenzyme down drains weekly to prevent clogs and eliminate odors.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Use: Undiluted, weekly maintenance
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Toilet Cleaner</h3>
                  <p className="text-muted-foreground mb-4">
                    Use undiluted or in a 1:2 dilution to clean toilets. Let sit for 30 minutes before scrubbing.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:2 or undiluted
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Air Freshener</h3>
                  <p className="text-muted-foreground mb-4">
                    Mix with water in a spray bottle to create a natural air freshener that eliminates odors.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:10
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="personal" className="p-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Hand Wash</h3>
                  <p className="text-muted-foreground mb-4">
                    Highly diluted bioenzymes can be used as a gentle hand wash, especially for gardening.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:20
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Skin Toner</h3>
                  <p className="text-muted-foreground mb-4">
                    Very diluted bioenzymes can be used as a skin toner, particularly those made from citrus peels.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:50 (test on small area first)
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Hair Rinse</h3>
                  <p className="text-muted-foreground mb-4">
                    Use as a final hair rinse after shampooing to add shine and reduce dandruff.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:30
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="garden" className="p-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Plant Fertilizer</h3>
                  <p className="text-muted-foreground mb-4">
                    Diluted bioenzymes make excellent fertilizer, providing nutrients and beneficial microorganisms.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:100
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Pest Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Spray on plants to deter pests naturally without harming beneficial insects.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:20
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Compost Activator</h3>
                  <p className="text-muted-foreground mb-4">
                    Add to compost piles to accelerate decomposition and enhance compost quality.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Usage: Spray undiluted occasionally
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Soil Improvement</h3>
                  <p className="text-muted-foreground mb-4">
                    Add to soil to improve structure, increase microbial activity, and enhance nutrient availability.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:200
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="other" className="p-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Car Cleaning</h3>
                  <p className="text-muted-foreground mb-4">
                    Clean your car inside and out with diluted bioenzymes for a natural shine.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:10
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Septic System Treatment</h3>
                  <p className="text-muted-foreground mb-4">
                    Add to toilets monthly to help maintain septic systems and prevent clogs.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Usage: 1 cup monthly
                  </div>
                </CardContent>
              </Card>

              <Card className="border-bio-lightGreen hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-2 text-bio-darkGreen">Pet Odor Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Spray diluted bioenzymes to eliminate pet odors naturally and safely.
                  </p>
                  <div className="text-sm text-bio-darkGreen font-medium">
                    Dilution Ratio: 1:10
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 bg-bio-lightGreen rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-bio-dark">Usage Tips:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>Always test in an inconspicuous area first, especially on fabrics and sensitive surfaces.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>Different fruit/vegetable scraps produce bioenzymes with slightly different properties.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>Citrus-based bioenzymes are particularly good for cutting grease and removing odors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>For stronger cleaning power, use less dilution; for sensitive surfaces, dilute more.</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-bio-dark">Storage:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>Store bioenzymes in a glass bottle with a tight lid in a cool, dark place.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>Properly stored bioenzymes can last up to 1 year.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>Label bottles with the date made and ingredients used.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bio-darkGreen mr-2">•</span>
                  <span>As bioenzymes age, they become more potent, so you may need to dilute them more.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
