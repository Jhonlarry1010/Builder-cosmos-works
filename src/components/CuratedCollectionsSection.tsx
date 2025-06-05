import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    id: 1,
    title: "E-commerce Empire",
    subtitle: "High-Revenue Stores",
    description: "Established online stores with proven sales records",
    count: "25+ businesses",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "SaaS Powerhouse",
    subtitle: "Recurring Revenue",
    description: "Software businesses with subscription models",
    count: "15+ businesses",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Content Creators",
    subtitle: "Media & Publishing",
    description: "Blogs, newsletters, and content platforms",
    count: "40+ businesses",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Tech Innovators",
    subtitle: "Cutting-Edge",
    description: "AI, blockchain, and emerging technology businesses",
    count: "12+ businesses",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function CuratedCollectionsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "rgb(0, 31, 68)" }}
          >
            Curated Collections
          </h2>
          <p className="text-xl" style={{ color: "rgb(75, 85, 99)" }}>
            Hand-picked businesses organized by category and theme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {collections.map((collection) => (
            <Card
              key={collection.id}
              className="group overflow-hidden border-0 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-0">
                <div
                  className={`bg-gradient-to-br ${collection.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-6 translate-y-6"></div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-1">
                      {collection.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {collection.subtitle}
                    </p>
                    <p className="text-white/90 text-sm mb-6">
                      {collection.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">
                        {collection.count}
                      </span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            style={{ backgroundColor: "rgb(0, 88, 255)" }}
            className="hover:opacity-90"
          >
            Explore All Collections
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
