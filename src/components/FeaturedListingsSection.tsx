import { Star, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredListings = [
  {
    id: 1,
    title: "Premium E-commerce Store",
    description: "Established dropshipping business with 50K+ monthly visitors",
    price: "$125,000",
    revenue: "$15K/mo",
    profit: "$8K/mo",
    rating: 4.8,
    category: "E-commerce",
    image: "/placeholder.svg",
    verified: true,
  },
  {
    id: 1,
    title: "Premium E-commerce Store",
    description: "Established dropshipping business with 50K+ monthly visitors",
    price: "$125,000",
    revenue: "$15K/mo",
    profit: "$8K/mo",
    rating: 4.8,
    category: "E-commerce",
    image: "/placeholder.svg",
    verified: true,
  },
  {
    id: 2,
    title: "SaaS Analytics Platform",
    description: "B2B analytics tool with 200+ paying subscribers",
    price: "$85,000",
    revenue: "$12K/mo",
    profit: "$9K/mo",
    rating: 4.9,
    category: "SaaS",
    image: "/placeholder.svg",
    verified: true,
  },
  {
    id: 3,
    title: "Content & Affiliate Site",
    description: "High-traffic blog with established affiliate income",
    price: "$45,000",
    revenue: "$6K/mo",
    profit: "$4.5K/mo",
    rating: 4.7,
    category: "Content",
    image: "/placeholder.svg",
    verified: true,
  },
];

export default function FeaturedListingsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: "rgb(0, 31, 68)" }}
          >
            Top Online Business Listings
          </h2>
          <p className="text-xl" style={{ color: "rgb(75, 85, 99)" }}>
            Hand-picked opportunities from our marketplace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredListings.map((listing) => (
            <Card
              key={listing.id}
              className="group hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {listing.verified && (
                    <Badge
                      className="absolute top-4 left-4 text-white"
                      style={{ backgroundColor: "rgb(34, 197, 94)" }}
                    >
                      Verified
                    </Badge>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/90 text-gray-700"
                  >
                    {listing.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(listing.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {listing.rating}
                  </span>
                </div>

                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "rgb(0, 31, 68)" }}
                >
                  {listing.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {listing.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Monthly Revenue:
                    </span>
                    <span className="font-semibold text-green-600">
                      {listing.revenue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">
                      Monthly Profit:
                    </span>
                    <span className="font-semibold text-green-600">
                      {listing.profit}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "rgb(0, 31, 68)" }}
                    >
                      {listing.price}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    style={{ backgroundColor: "rgb(0, 88, 255)" }}
                    className="hover:opacity-90"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2"
            style={{ borderColor: "rgb(0, 88, 255)", color: "rgb(0, 88, 255)" }}
          >
            <TrendingUp className="h-5 w-5 mr-2" />
            View All Listings
          </Button>
        </div>
      </div>
    </section>
  );
}
