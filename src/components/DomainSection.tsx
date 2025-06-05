import { Globe, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const domainCategories = [
  {
    id: 1,
    title: "Premium Domains",
    icon: Star,
    description: "Short, memorable domains with high commercial value",
    domains: ["TechHub.com", "BizPro.net", "WebFlow.co"],
    priceRange: "$5K - $50K",
    color: "rgb(250, 204, 21)",
  },
  {
    id: 2,
    title: "Aged Domains",
    icon: Globe,
    description: "Established domains with history and authority",
    domains: ["Digital2010.com", "OnlineStore.org", "WebSite.net"],
    priceRange: "$500 - $5K",
    color: "rgb(0, 88, 255)",
  },
  {
    id: 3,
    title: "Trending Niches",
    icon: TrendingUp,
    description: "Domains in emerging markets and popular trends",
    domains: ["CryptoTrade.co", "AITools.net", "GreenTech.io"],
    priceRange: "$100 - $2K",
    color: "rgb(34, 197, 94)",
  },
];

export default function DomainSection() {
  return (
    <section
      style={{ backgroundColor: "rgb(249, 250, 251)" }}
      className="py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "rgb(0, 31, 68)" }}
          >
            Premium Domain Names
          </h2>
          <p className="text-xl" style={{ color: "rgb(75, 85, 99)" }}>
            Invest in high-value domains for your next venture
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {domainCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-shadow border border-gray-200 bg-white"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className="mx-auto mb-4 p-3 rounded-full w-fit"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <IconComponent
                      className="h-6 w-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <CardTitle
                    className="text-xl"
                    style={{ color: "rgb(0, 31, 68)" }}
                  >
                    {category.title}
                  </CardTitle>
                  <p className="text-sm" style={{ color: "rgb(75, 85, 99)" }}>
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.domains.map((domain, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <span
                          className="font-medium"
                          style={{ color: "rgb(0, 31, 68)" }}
                        >
                          {domain}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-xs"
                          style={{
                            backgroundColor: `${category.color}20`,
                            color: category.color,
                          }}
                        >
                          Available
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Price Range:</p>
                    <p
                      className="font-semibold text-lg"
                      style={{ color: category.color }}
                    >
                      {category.priceRange}
                    </p>
                  </div>

                  <Button
                    className="w-full"
                    style={{ backgroundColor: category.color }}
                    size="sm"
                  >
                    Browse {category.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2"
            style={{ borderColor: "rgb(0, 88, 255)", color: "rgb(0, 88, 255)" }}
          >
            <Globe className="h-5 w-5 mr-2" />
            View All Domains
          </Button>
        </div>
      </div>
    </section>
  );
}
