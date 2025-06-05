import { Search, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section
      style={{ backgroundColor: "rgb(0, 31, 68)" }}
      className="text-white py-24"
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Find Your Perfect
          <br />
          <span style={{ color: "rgb(0, 88, 255)" }}>Business Opportunity</span>
        </h1>

        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Discover vetted online businesses, established domains, and profitable
          ventures ready for acquisition
        </p>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search businesses, domains, keywords..."
              className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-lg"
            />
            <Button
              size="lg"
              style={{ backgroundColor: "rgb(0, 88, 255)" }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:opacity-90"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Trending tags */}
        <div className="mb-16">
          <p className="text-white/60 mb-4">Trending searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "E-commerce",
              "SaaS",
              "Dropshipping",
              "Content Sites",
              "Mobile Apps",
            ].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-3xl font-bold">10,000+</span>
            </div>
            <p className="text-white/70">Active Listings</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-3xl font-bold">50,000+</span>
            </div>
            <p className="text-white/70">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold">$2.5B+</span>
            </div>
            <p className="text-white/70">Total Sales Volume</p>
          </div>
        </div>
      </div>
    </section>
  );
}
